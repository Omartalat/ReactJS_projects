import { createPortal } from "react-dom";

export default function CheckoutModal() {
  return createPortal(
    <dialog className="modal">
      <h2>Checkout</h2>
      <p>Total Price $300</p>
      <form action="submit">
        <div className="control">
          <label htmlFor="full-name">Full Name</label>
          <input type="text" id="full-name" name="full-name" />
        </div>
        <div className="control">
          <label htmlFor="email">E-Mail Address</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="control">
          <label htmlFor="street">Street</label>
          <input type="text" id="street" name="street" />
        </div>
        <div className="control-row">
          <div className="control">
            <label htmlFor="postal-code">Postal Code</label>
            <input type="text" id="postal-code" name="postal-code" />
          </div>
          <div className="control">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" />
          </div>
        </div>
        <div className="modal-actions">
          <button className="text-button">Close</button>
          <button className="button">Submit Order</button>
        </div>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
