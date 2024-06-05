import StefanCalculationsTemp from "../StefanCalculations/StefanTemp/Calculations";
import { AppContext } from "../Context/AppContext";
import React, { useContext } from "react";

let Total;
let Constant = 5.67 * 10 ** -8;
let temp;

const Stefan = () => {
  const { stefan_temp } = useContext(AppContext);

  temp = stefan_temp ** 4;
  Total = temp * Constant;

  return (
    <div>
      <h1 className="text-4xl font-semibold">Stefan Boltzmann Calculations</h1>
      <br></br>
      <span className="mt-6 text-lg leading-8 text-gray-600 coda-extrabold">
        Stefan-Boltzmann law describes how much energy is radiated by a
        blackbody, proportional to the fourth power of its temperature. It's a
        fundamental principle in thermodynamics and astrophysics.
        <ul className="mt-4">
          Parameters
          <li>• E is the Total Energy Radiation </li>
          <li>• T is the Temperature </li>
          <li>• σ is the Stefan Boltzmann Constant (5.67 x 10^-8 Wm^−2K^−4)</li>
        </ul>
        <div className="mt-3">
          Formulas
          <p> • Total Energy = Constant(σ) * Temperature(T) ^4</p>
        </div>
      </span>
      <div className="grid md:grid-cols-2 gap-3 mt-3 grid-col-1 lg:grid-cols-4 ">
        <StefanCalculationsTemp></StefanCalculationsTemp>
      </div>
      <br></br>
      <br></br>
      <p className="text-2xl font-semibold">Total Energy (E) = {Total} Wm^−2</p>
      <br></br>
    </div>
  );
};

export default Stefan;
