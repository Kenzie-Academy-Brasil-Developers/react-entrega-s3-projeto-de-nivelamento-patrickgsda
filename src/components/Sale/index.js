import React from "react";
import "./styles.css";
import Button from "../Button";

export default function Sale({
  discTotal,
  saleTotal,
  products,
  remSale,
  hiddenSale,
}) {
  return (
    <>
      {hiddenSale && (
        <div className="sale">
          {products.length > 0 && (
            <div>
              <h6>Sacola</h6>
              <div>
                <h4>Total sem desconto: R$ {saleTotal.toFixed(2)}</h4>
                <h4>
                  Total com desconto: R${" "}
                  {saleTotal.toFixed(2) - discTotal.toFixed(2)}
                </h4>
                <h4>Desconto Total: R$ {discTotal.toFixed(2)}</h4>
              </div>
            </div>
          )}
          <div className="form-info-group">
            {products.map((product) => {
              return (
                <div key={product.code} className="cardSale">
                  <p>{product.name}</p>
                  <p>{product.description}</p>
                  <p className="pOld">
                    <s>R$ {product.price}</s>
                  </p>
                  <p>
                    R$ {product.price.toFixed(2) - product.discount.toFixed(2)}
                  </p>
                  <Button onClick={() => remSale(product.code)}>Excluir</Button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
