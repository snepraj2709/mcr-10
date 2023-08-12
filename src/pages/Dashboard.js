import Sidebar from "../components/Sidebar";
import { useData } from "../context/DataContext";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "../utils/icons";

export default function Dashboard() {
  const { darkTheme, setDarkTheme } = useTheme();
  const { state } = useData();

  const total = state.allProducts.reduce(
    (acc, curr) =>
      curr.stock <= 10
        ? {
            ...acc,
            totalStocks: acc.totalStocks + curr.stock,
            totalDelivered: acc.totalDelivered + curr.delivered,
            lowStockItems: acc.lowStockItems + 1,
          }
        : {
            ...acc,
            totalStocks: acc.totalStocks + curr.stock,
            totalDelivered: acc.totalDelivered + curr.delivered,
            lowStockItems: acc.lowStockItems,
          },
    {
      totalStocks: 0,
      totalDelivered: 0,
      lowStockItems: 0,
    }
  );
  const { totalStocks, totalDelivered, lowStockItems } = total;
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grid grid-cols-8 overflow-hidden lg:max-w-6xl px-5 gap-2 grow">
        <Sidebar />
        <div className="flex flex-col col-span-6">
          <div className="flex justify-between">
            <h2 className="font-bold text-2xl ml-4 pt-4">Dashboard</h2>
            <button onClick={() => setDarkTheme(!darkTheme)}>
              {darkTheme ? (
                <FaSun className="w-5 h-5 mx-2 my-auto" />
              ) : (
                <FaMoon className="w-5 h-5 mx-2 my-auto" />
              )}
            </button>
          </div>
          <div className="flex justify-between">
            <div className=" flex flex-col w-auto mt-5">
              <div className="w-auto w-min-44 h-20 bg-slate-50 shadow-lg dark:bg-slate-800 dark:text-slate-100 rounded-md p-4 text-center">
                <p>{totalStocks}</p>
                <b className="text-lg font-bold text-green-500">Total Stock</b>
              </div>
            </div>
            <div className=" flex flex-col w-auto mt-5">
              <div className="w-auto h-20 bg-slate-50 shadow-lg dark:bg-slate-800 dark:text-slate-100 rounded-md p-4 text-center">
                <p>{totalDelivered}</p>
                <b className="text-lg font-bold text-orange-500">
                  Total Delivered
                </b>
              </div>
            </div>
            <div className=" flex flex-col w-auto mt-5">
              <div className="w-auto h-20 bg-slate-50 shadow-lg dark:bg-slate-800 dark:text-slate-100 rounded-md p-4 text-center">
                <p>{lowStockItems}</p>
                <b className="text-lg font-bold text-red-500">
                  Low Stock Items
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
