export default function Modal() {
  return (
    <dialog className="modal">
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          <li className="cart-item">
            <p></p>
          </li>
          <li className="cart-item">
            <p></p>
          </li>
          <li className="cart-item">
            <p></p>
          </li>
        </ul>
        <p className="cart-total">$Total</p>
        <div className="modal-actions">
          <button className="text-button">Close</button>
          <button className="button">Go to Checkout</button>
        </div>
      </div>
    </dialog>
  );
}
