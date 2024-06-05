import HeatCapacityCalculationsHeatCapacity from "../HeatCapacityCalculations/HeatCapacity/Calculations";
import HeatCapacityCalculationsMass from "../HeatCapacityCalculations/HeatCapacityMass/Calculations";
import HeatCapacityCalculationsTemp from "../HeatCapacityCalculations/HeatCapacityTemp/Calculations";
import { AppContext } from "../Context/AppContext";
import React, { useContext } from "react";

let Total;

const HeatCapacity = () => {
  const { heat_mass, heat_temp, heat_capacity } = useContext(AppContext);

  Total = heat_capacity * heat_mass * heat_temp;

  return (
    <div>
      <h1 className="text-4xl font-semibold">Heat Capacity Calculations</h1>
      <br></br>
      <span className="mt-6 text-lg leading-8 text-gray-600 coda-extrabold">
        Heat capacity is a physical property of a substance that measures its
        ability to absorb heat energy and change in temperature. In simpler
        terms, it's a measure of how much heat energy is required to raise the
        temperature of a substance by a certain amount.
        <ul className="mt-4">
          Parameters
          <li>• M is the mass of the substance.</li>
          <li>• Q is the Heat Capacity </li>
          <li>• T is the Temperature </li>
          <li>• C is the Specific Heat Capacity </li>
        </ul>
        <div className="mt-3">
          Formulas
          <p>
            {" "}
            • Heat Capacity (Q) = Mass (m) * Temp (T) * Specific Heat Capacity
            (C)
          </p>
        </div>
      </span>
      <div className="grid md:grid-cols-2 gap-3 mt-3 grid-col-1 lg:grid-cols-4 ">
        <HeatCapacityCalculationsHeatCapacity></HeatCapacityCalculationsHeatCapacity>
        <HeatCapacityCalculationsMass></HeatCapacityCalculationsMass>
        <HeatCapacityCalculationsTemp></HeatCapacityCalculationsTemp>
      </div>
      <br></br>
      <br></br>
      <p className="text-2xl font-semibold">Heat Capacity (Q) = {Total} J</p>
      <br></br>
    </div>
  );
};

export default HeatCapacity;
