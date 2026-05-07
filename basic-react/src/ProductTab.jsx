import Product from "./Product";
import "./ProductTab.css";
function ProductTab() {
  return (
    <div className="ProductTab">
      <Product title="Logitech Mouse" idx={0} />
      <Product title="Apple Pencil" idx={1} />
      <Product title="Zebronics HeadPhone" idx={2} />
      <Product title="Portronics PowerBank" idx={3} />
    </div>
  );
}

export default ProductTab;
