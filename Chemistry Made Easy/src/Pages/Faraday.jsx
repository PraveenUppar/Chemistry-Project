import FaradayCalculationsCurrent from "../FaradayCalculations/FaradayCurrent/Calculations";
import FaradayCalculationsTime from "../FaradayCalculations/FaradayTime/Calculations";
import FaradayCalculationsMolarMass from "../FaradayCalculations/FaradayMolarMass/Calculations";
import FaradayCalculationsMoles from "../FaradayCalculations/FaradayMoles/Calculations";
import { AppContext } from "../Context/AppContext";
import React, { useContext } from "react";

let Total;
let Charges;
let Constant = 96485;

const Faraday = () => {
  const { current, time, moles, molar_mass } = useContext(AppContext);

  Charges = current * time;
  Total = (Charges * molar_mass) / (moles * Constant);

  return (
    <div>
      <h1 className="text-4xl font-semibold">Faraday Calculations</h1>
      <br></br>
      <span className="mt-6 text-lg leading-8 text-gray-600 coda-extrabold">
        Faraday's laws of electrolysis describe the relationship between the
        amount of substance produced or consumed during electrolysis and the
        quantity of electricity passed through the electrolyte.
        <ul className="mt-4">
          Parameters
          <li>• n is the number of moles of the substance</li>
          <li>• M is the molar mass of the substance.</li>
          <li>• I is the current (in amperes)</li>
          <li>• t is the time (in seconds)</li>
          <li>• Faraday's constant (96485 C/mol)</li>
        </ul>
        <div className="mt-3">
          Formulas
          <p> • Charges (Q) = Current (I) * Time (t)</p>
          <p> • Mass = Charge(Q) * Molar Mass (M) / moles(n) * Constant </p>
        </div>
      </span>
      <div className="grid md:grid-cols-2 gap-3 mt-3 grid-col-1 lg:grid-cols-4 ">
        <FaradayCalculationsCurrent></FaradayCalculationsCurrent>
        <FaradayCalculationsTime></FaradayCalculationsTime>
        <FaradayCalculationsMolarMass></FaradayCalculationsMolarMass>
        <FaradayCalculationsMoles></FaradayCalculationsMoles>
      </div>
      <br></br>
      <br></br>
      <p className="text-2xl font-semibold">Total Mass = {Total} g</p>
      <br></br>
    </div>
  );
};

export default Faraday;
