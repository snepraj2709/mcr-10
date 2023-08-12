import React from "react";
import Sidebar from "../components/Sidebar";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import { FaSun, FaMoon } from "../utils/icons";
import { useTheme } from "../context/ThemeContext";

function Department() {
  const { state, dispatch } = useData();
  const { darkTheme, setDarkTheme } = useTheme();
  const navigate = useNavigate();
  const categoryChangeHandler = (department) => {
    dispatch({ type: "SelectCategory", payload: department.toLowerCase() });
    navigate("/products");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="grid grid-cols-8 overflow-hidden lg:max-w-6xl px-5 gap-2 grow">
        <Sidebar />
        <div className="flex flex-col col-span-6">
          <div className="flex justify-between">
            <h2 className="font-bold text-2xl ml-4 pt-4">Department</h2>
            <button onClick={() => setDarkTheme(!darkTheme)}>
              {darkTheme ? (
                <FaSun className="w-5 h-5 mx-2 my-auto" />
              ) : (
                <FaMoon className="w-5 h-5 mx-2 my-auto" />
              )}
            </button>
          </div>
          <div className=" grid grid-cols-3 gap-5 mt-5">
            {state?.allDepartments?.map((department, index) => (
              <div
                onClick={() => categoryChangeHandler(department)}
                key={index}
                className="w-auto h-20 bg-slate-100 shadow-lg dark:bg-slate-800 dark:text-slate-100 rounded-md p-4 text-center my-auto cursor-pointer">
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
