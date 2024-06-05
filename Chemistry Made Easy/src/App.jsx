import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

import "./App.css";
import Layout from "./Layouts/Layout";
import Home from "./Pages/Home";
import IdealGas from "./Pages/IdealGas";
import Faraday from "./Pages/Faraday";
import Bohr from "./Pages/Bohr";
import Stefan from "./Pages/Stefan";
import HeatCapacity from "./Pages/HeatCapacity";
import GibbsEnergy from "./Pages/GibbsEnergy";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home></Home>
              </Layout>
            }
          ></Route>
          <Route
            path="/ideal"
            element={
              <Layout>
                <IdealGas></IdealGas>
              </Layout>
            }
          ></Route>
          <Route
            path="/faraday"
            element={
              <Layout>
                <Faraday></Faraday>
              </Layout>
            }
          ></Route>
          <Route
            path="/bohr"
            element={
              <Layout>
                <Bohr></Bohr>
              </Layout>
            }
          ></Route>

          <Route
            path="/stefan"
            element={
              <Layout>
                <Stefan></Stefan>
              </Layout>
            }
          ></Route>
          <Route
            path="/heat"
            element={
              <Layout>
                <HeatCapacity></HeatCapacity>
              </Layout>
            }
          ></Route>
          <Route
            path="/gibbs"
            element={
              <Layout>
                <GibbsEnergy></GibbsEnergy>
              </Layout>
            }
          ></Route>
          <Route path="*" element={<Navigate to={"/"}></Navigate>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
