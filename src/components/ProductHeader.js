import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";

function ProductHeader() {
  const { dispatch } = useData();
  const navigate = useNavigate();
  const categoryChangeHandler = (e) => {
    dispatch({ type: "SelectCategory", payload: e.target.value });
  };

  const LowStockHandler = (e) => {
    dispatch({ type: "SetLowStocks", payload: e.target.checked });
  };

  const sortHandler = (e) => {
    dispatch({ type: "SortBy", payload: e.target.value });
  };

  return (
    <div className="flex justify-between align-middle py-3">
      <p className="font-bold text-2xl">Products</p>
      <select
        className="bg-inherit cursor-pointer"
        onChange={(e) => categoryChangeHandler(e)}>
        <option className="dark:bg-slate-700 dark:text-white" value="all">
          All Departments
        </option>
        <option className="dark:bg-slate-700 dark:text-white" value="kitchen">
          Kitchen
        </option>
        <option className="dark:bg-slate-700 dark:text-white" value="clothing">
          Clothing
        </option>
        <option className="dark:bg-slate-700 dark:text-white" value="toys">
          Toys
        </option>
      </select>
      <div className="cursor-pointer my-auto">
        <input
          type="checkbox"
          defaultChecked={false}
          onChange={(e) => LowStockHandler(e)}
        />
        <label>Low Stock Items</label>
      </div>

      <select
        className="bg-inherit cursor-pointer"
        onChange={(e) => sortHandler(e)}>
        <option className="dark:bg-slate-700 dark:text-white" value="name">
          Name
        </option>
        <option className="dark:bg-slate-700 dark:text-white" value="price">
          Price
        </option>
        <option className="dark:bg-slate-700 dark:text-white" value="stock">
          Stock
        </option>
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
