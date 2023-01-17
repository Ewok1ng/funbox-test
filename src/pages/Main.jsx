import React from 'react';

import db from '../db.json';

import Product from '../components/Product';

export default function Main() {
    const [products] = React.useState(db);

    return (
        <div className="main">
            <div className="main-conatiner">
                <h3 className="title title--main">Ты сегодня покормил кота?</h3>
                <div className="products">
                    {products.map((product) => (
                        <Product id={product.id} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
