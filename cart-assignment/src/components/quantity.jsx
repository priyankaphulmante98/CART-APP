import Button from "./button";

export default function Quantity({ qty, increment, decrement }) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button disabled={qty === 0} onClick={decrement}>
        -
      </Button>
      <span>{qty}</span>
      <Button disabled={qty === 100} onClick={increment}>
        +
      </Button>
    </div>
  );
}
