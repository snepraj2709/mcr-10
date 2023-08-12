import { useData } from "../context/DataContext";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const { state, dispatch } = useData();
  const [newProduct, setNewProduct] = useState({
    id: state.allProducts.length + 1,
    department: "",
    name: "",
    description: "",
    price: "",
    stock: "",
    sku: "",
    supplier: "",
    delivered: "",
    imageUrl: null,
  });
  const navigate = useNavigate();

  function addProduct() {
    dispatch({ type: "AddProduct", payload: newProduct });
    navigate("/products");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="grid grid-cols-8 overflow-hidden lg:max-w-6xl px-5 gap-2 grow">
        <Sidebar />
        <div className="flex flex-col col-span-6">
          <h2 className="font-bold text-2xl py-4">Add New Product</h2>

          <form className="flex flex-col space-y-5 w-3/4">
            <div className="flex flex-col">
              <label className="font-bold text-lg">Select Department</label>
              <select className="bg-inherit w-32">
                <option className="bg-slate-700 text-white">Kitchen</option>
                <option className="bg-slate-700 text-white">Clothing</option>
                <option className="bg-slate-700 text-white">Toys</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="font-bold text-lg">Name</label>
              <input
                className="bg-slate-700 text-white h-8 rounded-sm"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col">
              <label className="font-bold text-lg">Description</label>
              <textarea
                className="bg-slate-700 text-white rounded-sm"
                type="text"
                value={newProduct.description}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, description: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col">
              <label className="font-bold text-lg">Price</label>
              <input
                className="bg-slate-700 text-white h-8 rounded-sm"
                type="number"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col">
              <label className="font-bold text-lg">Stock</label>
              <input
                className="bg-slate-700 text-white h-8 rounded-sm"
                type="number"
                value={newProduct.stock}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, stock: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col">
              <label className="font-bold text-lg">SKU</label>
              <input
                className="bg-slate-700 text-white h-8 rounded-sm"
                type="text"
                value={newProduct.sku}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, sku: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col">
              <label className="font-bold text-lg">Supplier</label>
              <input
                className="bg-slate-700 text-white h-8 rounded-sm"
                type="text"
                value={newProduct.supplier}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, supplier: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col">
              <label className="font-bold text-lg">Delivered</label>
              <input
                className="bg-slate-700 text-white h-8 rounded-sm"
                type="number"
                value={newProduct.delivered}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, delivered: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col">
              <label className="font-bold text-lg">Image Url</label>
              <input
                className="bg-slate-700 text-white h-8 rounded-sm"
                type="url"
                value={newProduct.imageUrl}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, imageUrl: e.target.value })
                }
              />
            </div>
            <button
              className="bg-blue-500 p-3 text-white rounded-md"
              onClick={addProduct}>
              New
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;