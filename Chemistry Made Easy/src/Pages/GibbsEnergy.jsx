import GibbsCalculationsEnthaply from "../GibbsFreeCalculations/GibbsEnthalpy/Calculations";
import GibbsCalculationsEntropy from "../GibbsFreeCalculations/GibbsEntropy/Calculations";
import GibbsCalculationsTemp from "../GibbsFreeCalculations/GibbsTemp/Calculations";
import { AppContext } from "../Context/AppContext";
import React, { useContext } from "react";

let Total;

const GibbsEnergy = () => {
  const { gibbs_temp, gibbs_enthalpy, gibbs_entropy } = useContext(AppContext);

  Total = gibbs_enthalpy - gibbs_temp * gibbs_entropy;

  return (
    <div>
      <h1 className="text-4xl font-semibold">Gibbs Energy Calculations</h1>
      <br></br>
      <span className="mt-6 text-lg leading-8 text-gray-600 coda-extrabold">
        Gibbs Free Energy, often denoted as 𝐺 G, is a thermodynamic property
        that measures the maximum amount of useful work that can be obtained
        from a chemical reaction at constant temperature and pressure.
        <ul className="mt-4">
          Parameters
          <li>• H is the Change in Enthalpy </li>
          <li>• S is the Change in Entropy </li>
          <li>• T is the Temperature </li>
          <li>• G is the GibbsEnergy </li>
        </ul>
        <div className="mt-3">
          Formulas
          <p>
            {" "}
            • GibbsEnergy (G) = Enthalpy (H) - Temperature (T) * Entropy (S) (C)
          </p>
        </div>
      </span>
      <div className="grid md:grid-cols-2 gap-3 mt-3 grid-col-1 lg:grid-cols-4 ">
        <GibbsCalculationsEnthaply></GibbsCalculationsEnthaply>
        <GibbsCalculationsEntropy></GibbsCalculationsEntropy>
        <GibbsCalculationsTemp></GibbsCalculationsTemp>
      </div>
      <br></br>
      <br></br>
      <p className="text-2xl font-semibold">Gibbs Energy (G) = {Total} J</p>
      <br></br>
    </div>
  );
};

export default GibbsEnergy;
