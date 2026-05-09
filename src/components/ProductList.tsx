import type { Product } from "../types";
import ProfuctDetails from "./ProductDetails";

interface ProfuctListprops {
  productList: Product[];
}

export default function ProfuctList({ productList }: ProfuctListprops) {
  return (
    <div>
      {productList.map((product) => (
        <ProfuctDetails product={product} />
      ))}
    </div>
  );
}
