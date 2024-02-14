import { AddProduct } from "./components/AddProduct/AddProduct";
import { MyHeader } from "./components/Header/MyHeader";
import { ListProducts } from "./components/ListProducts/ListProducts";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div className="max-w-[700px] border rounded-lg w-full h-[700px] overflow-hidden">
        <MyHeader />

        <div className="px-4">
          <AddProduct />

          <ListProducts />
        </div>
      </div>
    </div>
  );
}
