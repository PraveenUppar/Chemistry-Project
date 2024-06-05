import { createContext, useReducer } from "react";

// It is newState object based on input it receives
const AppReducer = (state, action) => {
  switch (action.type) {
    case "CURRENT":
      return {
        ...state,
        current: action.payload,
      };
    case "TIME":
      return {
        ...state,
        time: action.payload,
      };
    case "MOLAR_MASS":
      return {
        ...state,
        molar_mass: action.payload,
      };
    case "MOLES":
      return {
        ...state,
        moles: action.payload,
      };
    case "ATOMIC_NO":
      return {
        ...state,
        atomic_no: action.payload,
      };
    case "BOHR_MOLES":
      return {
        ...state,
        bohr_moles: action.payload,
      };
    case "IDEAL_PRESSURE":
      return {
        ...state,
        ideal_pressure: action.payload,
      };
    case "IDEAL_MOLES":
      return {
        ...state,
        ideal_moles: action.payload,
      };
    case "IDEAL_TEMP":
      return {
        ...state,
        ideal_temp: action.payload,
      };
    case "HEAT_CAPACITY":
      return {
        ...state,
        heat_capacity: action.payload,
      };
    case "HEAT_TEMP":
      return {
        ...state,
        heat_temp_temp: action.payload,
      };
    case "HEAT_MASS":
      return {
        ...state,
        heat_mass: action.payload,
      };
    case "GIBBS_TEMP":
      return {
        ...state,
        gibbs_temp: action.payload,
      };
    case "GIBBS_ENTHALPY":
      return {
        ...state,
        gibbs_enthalpy: action.payload,
      };
    case "GIBBS_ENTROPY":
      return {
        ...state,
        gibbs_entropy: action.payload,
      };
    default:
      return state;
    case "STEFAN_TEMP":
      return {
        ...state,
        stefan_temp: action.payload,
      };
      return state;
  }
};

// It is the initial input values of the calculator
const initialState = {
  current: 10,
  time: 600,
  molar_mass: 40,
  moles: 2,
  atomic_no: 1,
  bohr_moles: 1,
  ideal_pressure: 3,
  ideal_moles: 2,
  ideal_temp: 400,
  heat_capacity: 4.18,
  heat_temp: 10,
  heat_mass: 100,
  gibbs_enthalpy: 483,
  gibbs_temp: 298,
  gibbs_entropy: -110,
  stefan_temp: 500,
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        current: state.current,
        time: state.time,
        molar_mass: state.molar_mass,
        moles: state.moles,
        atomic_no: state.atomic_no,
        bohr_moles: state.bohr_moles,
        ideal_moles: state.ideal_moles,
        ideal_pressure: state.ideal_pressure,
        ideal_temp: state.ideal_temp,
        heat_capacity: state.heat_capacity,
        heat_temp: state.heat_temp,
        heat_mass: state.heat_mass,
        stefan_temp: state.stefan_temp,
        gibbs_enthalpy: state.gibbs_enthalpy,
        gibbs_entropy: state.gibbs_entropy,
        gibbs_temp: state.gibbs_temp,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
