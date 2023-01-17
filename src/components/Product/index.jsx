import React from 'react';

import './styles.scss';
import catImg from '../../assets/images/cat.png';
import Weight from '../Weight';

export default function Product({ type, weight, description, benefits, disabled }) {
    const [isSelected, setSelected] = React.useState(false);
    const [isHovered, setHovered] = React.useState(false);

    const productRef = React.useRef(null);
    const subtitleRef = React.useRef(null);

    const productClassName = `product ${isSelected ? 'product--selected' : ''}`;

    const onSelectProduct = () => {
        if (!disabled) {
            setSelected((prev) => !prev);

            if (productRef.current.className.includes('product--selected')) {
                subtitleRef.current.textContent = 'Сказочное заморское яство';
                subtitleRef.current.style.color = '#666666';
            }
        }
    };

    React.useEffect(() => {
        if (isHovered) {
            if (productRef.current.className.includes('product--selected')) {
                subtitleRef.current.textContent = 'Котэ не одобряет?';
                subtitleRef.current.style.color = '#E52E7A';
            }
        } else {
            if (productRef.current.className.includes('product--selected')) {
                subtitleRef.current.textContent = 'Сказочное заморское яство';
                subtitleRef.current.style.color = '#666666';
            }
        }
    }, [isHovered]);

    return (
        <div
            className={disabled ? 'product product--disabled' : productClassName}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            ref={productRef}
        >
            <div className="product__card" onClick={onSelectProduct}>
                <div className="product__card-info">
                    <p className="product__subtitle" ref={subtitleRef}>
                        Сказочное заморское яство
                    </p>
                    <h2 className="product__title">Нямушка</h2>
                    <p className="product__type">{type.name}</p>
                    <ul className="product__benefits">
                        {benefits.map((item, idx) => (
                            <li key={idx} className="product__benefits-item">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <img className="product__card-img" src={catImg} alt="Cat" />
                <Weight weight={weight} />
            </div>
            <p className="product__link">
                {isSelected ? (
                    <>{description}</>
                ) : (
                    <>
                        Чего сидишь? Порадуй котэ, <span onClick={onSelectProduct}>купи</span>.
                    </>
                )}
            </p>
        </div>
    );
}
