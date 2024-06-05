import BohrCalculationsMoles from "../BohrCalculations/BohrMoles/Calculations";
import BohrCalculationsAtomicNo from "../BohrCalculations/BohrAtomicNo/Calculations";

import { AppContext } from "../Context/AppContext";
import React, { useContext } from "react";

let Total;
let Constant = 8.9875 * 10 ** 9;
let moles;
let number;

const Bohr = () => {
  const { atomic_no, bohr_moles } = useContext(AppContext);

  moles = bohr_moles ** 2;
  number = atomic_no ** 2;
  Total = -(Constant * number) / moles;

  return (
    <div>
      <h1 className="text-4xl font-semibold">Bohr Energy Calculations</h1>
      <br></br>
      <span className="mt-6 text-lg leading-8 text-gray-600 coda-extrabold">
        The Bohr model describes the structure of hydrogen atom and other
        one-electron systems. It provides a simple, yet insightful, way of
        understanding the quantized energy levels of electrons in atoms.
        <ul className="mt-4">
          Parameters
          <li>• n is the Number of moles of the substance</li>
          <li>• Z is the Atomic number of the substance.</li>
          <li>• k is Coulomb's constant (8.9875×10^9 Nm2/C2)</li>
        </ul>
        <div className="mt-3">
          Formulas
          <p>
            • Energy = - Coulomb's constant (k) * Atomic number(Z) ^ 2 / Number
            of moles ^ 2
          </p>
        </div>
      </span>
      <div className="grid md:grid-cols-2 gap-3 mt-3 grid-col-1 lg:grid-cols-4 ">
        <BohrCalculationsMoles></BohrCalculationsMoles>
        <BohrCalculationsAtomicNo></BohrCalculationsAtomicNo>
      </div>
      <br></br>
      <br></br>
      <p className="text-2xl font-semibold">Energy = {Total} J</p>
      <br></br>
    </div>
  );
};

export default Bohr;
