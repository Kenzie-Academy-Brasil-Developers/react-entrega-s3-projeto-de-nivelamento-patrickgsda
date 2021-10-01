import React from "react";
import "./styles.css";

export default function Card({ products }) {
  return (
    <div className="form-info-group">
      {products.map((product) => {
        return (
          <div key={product.code} className="card">
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>
              <s>R$ {product.price}</s>
            </p>
            <p>R$ {product.price - product.discount.toFixed()}</p>
          </div>
        );
      })}
    </div>
  );
}
