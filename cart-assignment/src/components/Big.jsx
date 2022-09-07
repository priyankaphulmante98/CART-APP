import Quantity from "./quantity";
import Small from "./small";

export default function Big({ id, lablel, price, qty, handling }) {
  return (
    <div>
      <Small lablel={lablel} price={price} />
      <Quantity
        qty={qty}
        decrement={() => handling(id, -1)}
        increment={() => handling(id, +1)}
      />
    </div>
  );
}
