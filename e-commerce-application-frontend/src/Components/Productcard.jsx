import React, { useState } from "react";

function Productcard(props) {

    const product = {}

    const handleAddToCart = (product, qty) => {
        console.log("Added to cart:", product, "Qty:", qty);
    };

    const [qty, setQty] = useState(1);

    const handleQtyChange = (value) => {
        if (value >= 1) {
            setQty(value);
        }
    };

    return (
        <>
            <div className="card shadow-sm" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title"> {product.title} </h5>
                    <h6 className="card-subtitle mb-2 text-muted">{product.category}</h6>
                    <p className="card-text">{product.description}</p>

                    <p className="fw-bold">Price: Rs.{product.price}</p>

                    {/* Quantity Spinner */}
                    <div className="d-flex align-items-center mb-3">
                        <button
                            className="btn btn-outline-secondary"
                            onClick={() => handleQtyChange(qty - 1)}
                        >

                        </button>

                        <input
                            type="number"
                            className="form-control text-center mx-2"
                            style={{ width: "70px" }}
                            value={qty}
                            onChange={(e) => handleQtyChange(Number(e.target.value))}
                            min="1"
                        />

                        <button
                            className="btn btn-outline-secondary"
                            onClick={() => handleQtyChange(qty + 1)}
                        >
                            +
                        </button>
                    </div>

                    <button
                        className="btn btn-primary w-100"
                        onClick={() => handleAddToCart(product, qty)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
    )
}

export default Productcard;