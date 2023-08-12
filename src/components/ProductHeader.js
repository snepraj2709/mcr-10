import React from "react";
import { useNavigate } from "react-router-dom";

function ProductHeader() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between align-middle py-3">
      <p className="font-bold text-2xl ml-4 pt-4">Products</p>
      <select className="bg-inherit">
        <option className="bg-slate-700 text-white">All Departments</option>
        <option className="bg-slate-700 text-white">Kitchen</option>
        <option className="bg-slate-700 text-white">Clothing</option>
        <option className="bg-slate-700 text-white">Toys</option>
      </select>
      <div>
        <input type="checkbox" defaultChecked={false} />
        <label>Low Stock Items</label>
      </div>

      <select className="bg-inherit">
        <option className="bg-slate-700 text-white">Name</option>
        <option className="bg-slate-700 text-white">Price</option>
        <option className="bg-slate-700 text-white">Stock</option>
      </select>
      <button
        className="bg-blue-500 p-3 text-white rounded-md cursor-pointer"
        onClick={() => navigate("/products/add")}>
        New
      </button>
    </div>
  );
}

export default ProductHeader;
