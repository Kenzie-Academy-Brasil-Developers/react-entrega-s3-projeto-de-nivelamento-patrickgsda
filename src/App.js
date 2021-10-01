import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./components/Card";
import Sale from "./components/Sale";
import iconSale from "./images/salew.svg";

function App() {
  const [products, setProducts] = useState([
    {
      code: 10,
      name: "Smart TV Led 50 Semp",
      description:
        "SK8300 4K HDR Android Wi-Fi 3 HDMI 2 USB Controle Remoto com atalhos Chromecast Integrado",
      price: 2299.99,
      discount: 190.99,
    },
    {
      code: 11,
      name: "Smartphone Samsung Galaxy A72 128GB",
      description:
        "4G Wi-Fi Tela 6.7 Dual Chip 6GB RAM Câmera Quádrupla + Selfie 32MP - Preto",
      price: 1988.4,
      discount: 87.89,
    },
    {
      code: 12,
      name: "Smartwatch Samsung Galaxy Watch Active",
      description:
        "4O Galaxy Watch Active é o smartwatch ideal para quem tem um estilo de vida ativo e saudável. Ele é leve, confortável e monitora diariamente suas atividades físicas, e os comportamentos de nível de stress e sono",
      price: 678.6,
      discount: 110.2,
    },
  ]);

  const [sale, setSale] = useState([]);
  const [saleOk, setSaleOk] = useState(false);
  const [saleTotal, setSaleTotal] = useState(0);
  const [discTotal, setDiscTotal] = useState(0);

  const [prodCode, setProdrCode] = useState("");
  const [prodName, setProdName] = useState("");
  const [prodDescrip, setProdDescrip] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [prodDiscount, setProdDiscount] = useState("");

  function addSale(id) {
    const productActualFilter = products.filter(
      (product) => product.code === id
    );
    const product = productActualFilter[0];
    const productVerifyDouble = sale.find((prod) => prod.code === id);
    if (!productVerifyDouble) {
      setSale([...sale, product]);
      totalSale(product.price);
      totalDiscSale(product.discount);
    }
  }

  function totalSale(product) {
    const reducer = (cartTotal, currentValue) => cartTotal + currentValue;
    setSaleTotal(sale.map((sale) => sale.price).reduce(reducer, product));
  }

  function totalDiscSale(product) {
    const reducer = (cartTotal, currentValue) => cartTotal + currentValue;
    setDiscTotal(sale.map((sale) => sale.discount).reduce(reducer, product));
  }

  function remSale(id) {
    const arrayProductDeleted = sale.filter((product) => product.code !== id);
    const removedItem = sale.find((sale) => sale.code === id);
    setSale([...arrayProductDeleted]);

    totalSale(-removedItem.price);
    totalDiscSale(-removedItem.discount);
  }

  function addProd(e) {
    e.preventDefault();
    setProducts([
      ...products,
      {
        code: parseInt(Math.floor(Math.random(Math.PI * prodCode) * 10000)),
        name: prodName,
        description: prodDescrip,
        price: parseFloat(prodPrice),
        discount: parseFloat(prodDiscount),
      },
    ]);
  }

  function remProds(id) {
    const arrayProductDeleted = products.filter(
      (product) => product.code !== id
    );
    setProducts([...arrayProductDeleted]);

    const productInSale = sale.find((sale) => sale.code === id);
    if (productInSale) {
      remSale(id);
    }
  }

  function hiddenSale() {
    if (saleOk === false) {
      setSaleOk(true);
    } else if (saleOk === true) {
      setSaleOk(false);
    }
  }

  return (
    <div className="App">
      <div className="App-content">
        <h1>KenzieShop</h1>
        <div className="App-form-sale">
          <form className="App-header" onSubmit={addProd}>
            <h6>Adicionar novos produtos</h6>
            <Input
              required={true}
              value={prodCode}
              type="number"
              onChange={(e) => setProdrCode(e.target.value)}
              placeholder="Código"
            />
            <Input
              required={true}
              value={prodName}
              onChange={(e) => setProdName(e.target.value)}
              placeholder="Nome"
            />
            <Input
              required={true}
              value={prodDescrip}
              onChange={(e) => setProdDescrip(e.target.value)}
              placeholder="Descrição"
            />
            <Input
              required={true}
              value={prodPrice}
              type="number"
              onChange={(e) => setProdPrice(e.target.value)}
              placeholder="Preço"
              min="0"
            />
            <Input
              required={true}
              value={prodDiscount}
              type="number"
              onChange={(e) => setProdDiscount(e.target.value)}
              placeholder="Desconto"
              min="0"
            />
            <div className="form-group-submitSale">
              <Button type="submit">Adicionar</Button>
              {sale.length > 0 && (
                <>
                  <img
                    onClick={() => hiddenSale()}
                    className="iconSale"
                    src={iconSale}
                    alt="Sale"
                  />
                  <span
                    onClick={() => hiddenSale()}
                    className="count-sale-prods"
                  >
                    {sale.length}
                  </span>
                </>
              )}
            </div>
          </form>
          <Sale
            discTotal={discTotal}
            saleTotal={saleTotal}
            hiddenSale={saleOk}
            products={sale}
            remSale={remSale}
          />
        </div>
        {products.length > 0 && (
          <div>
            <h6>Produtos</h6>
            <Card remProds={remProds} products={products} addSale={addSale} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
