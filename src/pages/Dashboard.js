import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const stocks = {
    totalStocks: 200,
    totalDelivered: 152,
    lowStockItems: 10,
  };
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grid grid-cols-8 overflow-hidden lg:max-w-6xl px-5 gap-2 grow">
        <Sidebar />
        <div className="flex flex-col col-span-6">
          <h2 className="font-bold text-2xl ml-4 pt-4">Dashboard</h2>
          <div className=" grid grid-cols-3 gap-5 mt-5">
            {Object.keys(stocks).map((stockType, index) => (
              <div
                key={index}
                className="w-auto h-20 bg-slate-800 text-slate-100 rounded-md p-4">
                <b className="text-lg font-bold">{stockType}</b>
                <p>{stocks[stockType]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
