import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./components/Card";

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
      discount: 110.19,
    },
  ]);

  const [sale, setSale] = useState([]);

  const [prodCode, setProdrCode] = useState("");
  const [prodName, setProdName] = useState("");
  const [prodDescrip, setProdDescrip] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [prodDiscount, setProdDiscount] = useState("");

  function addProd(e) {
    e.preventDefault();
    setProducts([
      ...products,
      {
        code: parseInt(prodCode),
        name: prodName,
        description: prodDescrip,
        price: parseFloat(prodPrice),
        discount: parseFloat(prodDiscount),
      },
    ]);
  }

  return (
    <div className="App">
      <div className="App-content">
        <form className="App-header" onSubmit={addProd}>
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
          />
          <Input
            required={true}
            value={prodDiscount}
            type="number"
            onChange={(e) => setProdDiscount(e.target.value)}
            placeholder="Desconto"
          />
          <Button type="submit" />
        </form>
        <Card products={products} />
      </div>
    </div>
  );
}

export default App;
