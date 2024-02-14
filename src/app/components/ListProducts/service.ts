"use client";

import { axiosClient } from "@/app/axios/axiosClient";
import { useEffect, useState } from "react";

export const useService = () => {
  const [listProducts, setListProduct] = useState<
    {
      name: string;
      price: string;
      description: string;
      image: string;
    }[]
  >([
    {
      name: "",
      price: "",
      description: "",
      image: "",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetListProduct = async () => {
    const URI = "/product";
    try {
      setIsLoading(true);
      const response = await axiosClient.get(URI);
      setListProduct(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSetLoading = () => {
    setIsLoading(true);
  };

  useEffect(() => {
    if (isLoading) handleGetListProduct();
  }, [isLoading]);

  useEffect(() => {
    handleGetListProduct();
  }, []);

  return { listProducts, handleSetLoading };
};
