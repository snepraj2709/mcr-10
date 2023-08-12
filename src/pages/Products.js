import ProductHeader from "../components/ProductHeader";
import Sidebar from "../components/Sidebar";
import { useData } from "../context/DataContext";

function Products() {
  const { state } = useData();
  const allProducts = state.allProducts;
  console.log();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="grid grid-cols-8 overflow-hidden lg:max-w-6xl px-5 gap-2 grow">
        <Sidebar />
        <div className="flex flex-col col-span-6">
          <ProductHeader />
          <div className="flex flex-col ">
            <div className="grid grid-cols-12 gap-1 bg-slate-600 px-2">
              <p className="col-span-2 text-lg">Image</p>
              <p className="col-span-2 text-lg">Name</p>
              <p className="col-span-4 text-lg">Description</p>
              <p className="col-span-1 text-lg">Price</p>
              <p className="col-span-1 text-lg">Stock</p>
              <p className="col-span-2 text-lg">Supplier</p>
            </div>
            {allProducts?.map(
              ({
                id,
                department,
                name,
                description,
                price,
                stock,
                sku,
                supplier,
                delivered,
                imageUrl,
              }) => (
                <div
                  key={id}
                  className=" flex flex-col w-full h-20 text-center">
                  <div className="grid grid-cols-12 gap-1 px-2 my-1">
                    <img
                      className="col-span-1 p-2 rounded-md object-cover w-16 h-16"
                      src={imageUrl}
                      alt={name}
                    />
                    <p className="col-span-3 text-lg line-clamp-1">{name}</p>
                    <p className="col-span-4 text-lg line-clamp-1">
                      {description}
                    </p>
                    <p className="col-span-1 text-base">{price}</p>
                    <p className="col-span-1 text-base">{stock}</p>
                    <p className="col-span-2 text-base line-clamp-1">
                      {supplier}
                    </p>
                  </div>
                  <hr className="border border-slate-600" />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
