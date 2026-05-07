import "./Product.css";
import Price from "./Price";

function Product({ title,idx }) {
  let oldPrices = ["10,000","20,000","5,000","2,000"];
  let newPrices = ["8,000","18,000","3,000","1,000"];
  let desc = [["Good", "hi-tech"],["Reliable", "durable"],["Useful", "fast"],["Helpful", "magnificent"]]
  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>{desc[idx][0]}</p>
      <p>{desc[idx][1]}</p>

      <br></br>
      <Price oldPrice={oldPrices[idx]} newPrice = {newPrices[idx]}/>
    </div>
  );
}
export default Product;
