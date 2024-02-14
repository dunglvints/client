"use client";

import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import { InputCommon } from "./InputCommon/InputCommon";
import { axiosClient } from "@/app/axios/axiosClient";
import { useService } from "../ListProducts/service";

export const AddProduct = () => {
  const { handleSetLoading } = useService();

  const [productValues, setProductValues] = useState({
    name: "",
    price: "0",
    image: "",
    description: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const URI = "/product";

    try {
      await axiosClient.post(URI, productValues);
      handleSetLoading();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setProductValues((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="mt-[50px]">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex justify-between gap-3">
          <div className="w-full">
            <InputCommon
              name="name"
              value={productValues.name}
              setProduct={handleChangeInput}
            />
          </div>

          <div className="w-full">
            <InputCommon
              name="price"
              value={productValues.price}
              setProduct={handleChangeInput}
            />
          </div>
        </div>

        <div className="flex justify-between gap-3">
          <div className="w-full">
            <InputCommon
              name="image"
              value={productValues.image}
              setProduct={handleChangeInput}
            />
          </div>

          <div className="w-full">
            <InputCommon
              name="description"
              value={productValues.description}
              setProduct={handleChangeInput}
            />
          </div>
        </div>

        <div className="flex justify-center w-full mt-[15px]">
          <button
            type="submit"
            className="px-3 rounded bg-[#1875f7] text-[#fff]"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
