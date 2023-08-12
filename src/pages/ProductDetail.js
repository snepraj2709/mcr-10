import React from "react";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import { useData } from "../context/DataContext";

function ProductDetail() {
  const { productId } = useParams();
  const { state } = useData();
  const product = state?.allProducts?.find(
    (product) => product.id === parseInt(productId)
  );
  const {
    department,
    name,
    description,
    price,
    stock,
    sku,
    supplier,
    delivered,
    imageUrl,
  } = product;
  return (
    <div className="min-h-screen flex flex-col text-left">
      <div className="grid grid-cols-8 overflow-hidden lg:max-w-6xl px-5 gap-2 grow">
        <Sidebar />
        <div className="flex flex-col col-span-6">
          <h2 className="font-bold text-2xl ml-4 pt-4">{name}</h2>
          <div className="w-auto h-20 bg-slate-800 text-slate-100 rounded-md p-4  align-middle mt-5">
            <img src={imageUrl} alt={description} className="object-cover" />
            <div className="text-lg flex space-x-2">
              <b>Price:</b>
              <p>{price}</p>
            </div>
            <div className="text-lg flex space-x-2">
              <b>Stock:</b>
              <p>{stock}</p>
            </div>

            <div className="text-lg flex space-x-2">
              <b>Supplier:</b>
              <p>{supplier}</p>
            </div>

            <div className="text-lg flex space-x-2">
              <b>Department:</b>
              <p>{department}</p>
            </div>

            <div className="text-lg flex space-x-2">
              <b>SKU:</b>
              <p>{sku}</p>
            </div>
            <div className="text-lg flex space-x-2">
              <b>Delivered:</b>
              <p>{delivered}</p>
            </div>

            <div className="text-lg flex space-x-2">
              <b>Description:</b>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
