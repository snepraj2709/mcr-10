import React from "react";
import Sidebar from "../components/Sidebar";
import { useData } from "../context/DataContext";

function Department() {
  const { state } = useData();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="grid grid-cols-8 overflow-hidden lg:max-w-6xl px-5 gap-2 grow">
        <Sidebar />
        <div className="flex flex-col col-span-6">
          <h2 className="font-bold text-2xl ml-4 pt-4">Department</h2>
          <div className=" grid grid-cols-3 gap-5 mt-5">
            {state.allDepartments?.map((department, index) => (
              <div
                key={index}
                className="w-auto h-20 bg-slate-800 text-slate-100 rounded-md p-4 text-center align-middle">
                <b className="text-lg font-bold">{department}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Department;
