export default function Button({ onClick, disabled, children }) {
  return (
    <div>
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </div>
  );
}
