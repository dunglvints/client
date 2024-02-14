interface MyProps {
  name: string;
  price: string;
  des: string;
  image: string;
}

export const ItemCommon = ({ name, price, des, image }: MyProps) => {
  return (
    <div className="flex items-center gap-2 bg-[#f5f5f5] p-2 mb-2">
      <div className="w-[40px] h-[40px]">
        <img src={image} />
      </div>

      <div className="flex justify-between w-full items-center ">
        <div>
          <div>Product name: <span className="font-bold">{name}</span></div>
          <div>Price: <span className="font-bold">{price}</span></div>
          <div>Description: <i className="">{des}</i></div>
        </div>

        <div className="flex gap-2">
          <div className="px-2 bg-slate-300 cursor-pointer rounded text-[#fff]">
            Edit
          </div>
          <div className="px-2 bg-red-400 rounded cursor-pointer text-[#fff]">
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};
