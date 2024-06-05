import IdealGasCalculationsPressure from "../IdealGasCalculations/IdealGasPressure/Calculations";
import IdealGasCalculationsMoles from "../IdealGasCalculations/IdealGasMoles/Calculations";
import IdealGasCalculationsTemp from "../IdealGasCalculations/IdealGasTemp/Calculations";
import { AppContext } from "../Context/AppContext";
import React, { useContext } from "react";

let Total;
let Constant = 0.0821;
const IdealGas = () => {
  const { ideal_moles, ideal_pressure, ideal_temp } = useContext(AppContext);

  Total = (ideal_moles * ideal_temp * Constant) / ideal_pressure;

  return (
    <div>
      <h1 className="text-4xl font-semibold">Ideal Gas Calculations</h1>
      <br></br>
      <span className="mt-6 text-lg leading-8 text-gray-600 coda-extrabold">
        The Ideal Gas Law is a fundamental equation in thermodynamics and is
        used to describe the behavior of ideal gases under various conditions.
        It relates the pressure, volume, temperature, and number of moles of an
        ideal gas in a closed system.
        <ul className="mt-4">
          Parameters
          <li>• n is the number of moles of the substance</li>
          <li>• P is the Pressure (atm)</li>
          <li>• T is the Temperature (K)</li>
          <li>• R is the Gas Constant (0.0821 L atm / mol K)</li>
        </ul>
        <div className="mt-3">
          Formulas
          <p> • Volume (V) = moles(n) * Constant * Temp(T) / Pressure (P) </p>
        </div>
      </span>
      <div className="grid md:grid-cols-2 gap-3 mt-3 grid-col-1 lg:grid-cols-4 ">
        <IdealGasCalculationsPressure></IdealGasCalculationsPressure>
        <IdealGasCalculationsMoles></IdealGasCalculationsMoles>
        <IdealGasCalculationsTemp></IdealGasCalculationsTemp>
      </div>
      <br></br>
      <br></br>
      <p className="text-2xl font-semibold">Volume = {Total} L</p>
      <br></br>
    </div>
  );
};

export default IdealGas;
