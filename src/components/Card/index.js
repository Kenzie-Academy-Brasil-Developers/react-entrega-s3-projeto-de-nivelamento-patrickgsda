import React from "react";
import "./styles.css";
import Button from "../Button";

export default function Card({ products, addSale, remProds }) {
  return (
    <div className="form-info-group">
      {products.map((product) => {
        return (
          <div key={product.code} className="card">
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p className="pOld">
              <s>R$ {product.price}</s>
            </p>
            <p>R$ {product.price.toFixed(2) - product.discount.toFixed(2)}</p>
            <div className="group-buttons">
              <Button onClick={() => addSale(product.code)}>Comprar</Button>
              <Button onClick={() => remProds(product.code)}>Excluir</Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
