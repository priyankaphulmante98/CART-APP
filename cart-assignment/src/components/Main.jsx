import { useState } from "react";
import Big from "./Big";
import Price from "./price";

let details = [
  { id: 1, name: "Manchurian", price: 100, qty: 1 },
  { id: 2, name: "Pullav", price: 100, qty: 1 },
  { id: 3, name: "Noodles", price: 300, qty: 1 },
  { id: 4, name: "Pasta", price: 100, qty: 1 }
];

export default function Main(prop) {
  const [data, setData] = useState(details);
  function Onefunction(products) {
    return products.reduce((acc, c) => acc + c.price * c.qty, 0);
  }
  let hadling = (id, amout) => {
    let updated = data.map((item) =>
      item.id === id ? { ...item, qty: item.qty + amout } : item
    );
    setData(updated);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          height: "200px",
          gap: "25px",
          backgroundColor: "pink"
        }}
      >
        {data.map((item) => (
          <div>
            <Big
              id={item.id}
              key={item.id}
              lablel={item.name}
              price={item.price}
              qty={item.qty}
              handling={hadling}
            />
          </div>
        ))}
      </div>
      <Price price={Onefunction(data)} />
    </div>
  );
}
