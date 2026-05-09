import type { Product } from "../types";

interface ProfuctDetailsProps {
  product: Product;
}

export default function ProfuctDetails({ product }: ProfuctDetailsProps) {
  return (
    <div className="productContainer">
      <img className="productImg" src={product.imgUrl} alt="" height={150} />
      <h1 className="productTitle">{product.title}</h1>
      <p className="productPrice">{product.price} kr.</p>
      <button className="buyButton">Kaupa</button>
    </div>
  );
}
