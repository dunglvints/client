"use client";

import { ItemCommon } from "./ItemCommon/ItemCommon";
import { useService } from "./service";

export const ListProducts = () => {
  const { listProducts } = useService();

  console.log(listProducts)

  return (
    <div className="border h-[350px] mt-2 rounded py-2">
      {listProducts.map((product) => {
        return (
          <ItemCommon
            name={product.name}
            price={product.price}
            des={product.description}
            image={product.image}
          />
        );
      })}
    </div>
  );
};
