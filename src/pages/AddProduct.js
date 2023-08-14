import { useData } from "../context/DataContext";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { initialState } from "../reducer/DataReducer";

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
    imageUrl: "",
  });
  const navigate = useNavigate();

  const uploadImage = (e) => {
    if (newProduct?.imageUrl === "") {
      setNewProduct({
        ...newProduct,
        imageUrl: "https://picsum.photos/id/237/200/300",
      });
    }
  };

  function addProduct() {
    const imageUrlRegex = /\bhttps?:\/\/\S+\.(?:png|jpe?g|gif|webp)\b/;
    const media = newProduct.imageUrl;
    const departments = state?.allProducts?.reduce(
      (acc, curr) =>
        acc.includes(curr.department) ? [...acc] : [...acc, curr.department],
      []
    );
    const updatedState = { ...initialState, allDepartments: departments };

    if (!imageUrlRegex.test(media)) {
      const updatedProducts = [
        ...state?.allProducts,
        { ...newProduct, imageUrl: `https://picsum.photos/200/300/?random` },
      ];
      localStorage.setItem(
        "inventoryDataState",
        JSON.stringify({ ...updatedState, allProducts: updatedProducts })
      );
      dispatch({ type: "AddProduct", payload: updatedProducts });
    } else {
      const updatedProducts = [...state?.allProducts, { ...newProduct }];
      localStorage.setItem(
        "inventoryDataState",
        JSON.stringify({ ...updatedState, allProducts: updatedProducts })
      );
      dispatch({ type: "AddProduct", payload: updatedProducts });
    }

    navigate("/products");
    toast.success("Added New product");
    console.log(newProduct);
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
                <option className="dark:bg-slate-700 dark:text-white">
                  Kitchen
                </option>
                <option className="dark:bg-slate-700 dark:text-white">
                  Clothing
                </option>
                <option className="dark:bg-slate-700 dark:text-white">
                  Toys
                </option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="font-bold text-lg">Name</label>
              <input
                className="dark:bg-slate-700 dark:text-white bg-slate-100 border-slate-300 border h-8 rounded-sm"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col">
              <label className="font-bold text-lg">Description</label>
              <textarea
                className="dark:bg-slate-700 dark:text-white bg-slate-100 border-slate-300 border rounded-sm"
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
                className="dark:bg-slate-700 dark:text-white bg-slate-100 border-slate-300 border h-8 rounded-sm"
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
                className="dark:bg-slate-700 dark:text-white bg-slate-100 border-slate-300 border h-8 rounded-sm"
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
                className="dark:bg-slate-700 dark:text-white bg-slate-100 border-slate-300 border h-8 rounded-sm"
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
                className="dark:bg-slate-700 dark:text-white bg-slate-100 border-slate-300 border h-8 rounded-sm"
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
                className="dark:bg-slate-700 dark:text-white bg-slate-100 border-slate-300 border h-8 rounded-sm"
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
                className="dark:bg-slate-700 dark:text-white bg-slate-100 border-slate-300 border h-8 rounded-sm"
                type="url"
                value={newProduct.imageUrl}
                onChange={(e) => uploadImage(e)}
              />
            </div>
            <button
              className="bg-blue-500 p-3 text-white rounded-md w-36"
              onClick={addProduct}>
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
