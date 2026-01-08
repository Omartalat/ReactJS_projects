export default function Product() {
  return (
    <div className="meal-item">
      <article>
        <img src="" alt="" />
        <h3>product name</h3>
        <p className="meal-item-price">price</p>
        <p className="meal-item-description">description</p>
        <p className="meal-item-actions">
          <button className="button">Add to Cart</button>
        </p>
      </article>
    </div>
  );
}
