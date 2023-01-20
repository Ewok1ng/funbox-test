import React from 'react';

import './styles.scss';
import catImg from '../../assets/images/cat.png';
import Weight from '../Weight';

export default function Product({ type, weight, description, benefits, disabled }) {
    const [isSelected, setSelected] = React.useState(false);
    const [subtitle, setSubtitle] = React.useState('Сказочное заморское яство');

    const productRef = React.useRef(null);
    const subtitleRef = React.useRef(null);

    const productClassName = `product ${isSelected ? 'product--selected' : ''}`;

    const onSelectProduct = () => {
        if (!disabled) {
            setSelected((prev) => !prev);
        }
    };

    const onMouseEnter = () => {
        if (isSelected && !productRef.current.classList.contains('nohover')) {
            setSubtitle('Котэ не одобряет');
        }
    };

    const onMouseLeave = () => {
        if (!disabled && isSelected) {
            productRef.current.classList.remove('nohover');
            setSubtitle('Сказочное заморское яство');
        }
    };

    React.useEffect(() => {
        if (isSelected) {
            productRef.current.classList.add('nohover');
        }

        if (!isSelected) {
            setSubtitle('Сказочное заморское яство');
        }
    }, [isSelected]);

    return (
        <div
            className={disabled ? 'product product--disabled' : productClassName}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            ref={productRef}
        >
            <div className="product__card" onClick={onSelectProduct}>
                <div className="product__card-info">
                    <p className="product__subtitle" ref={subtitleRef}>
                        {subtitle}
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
