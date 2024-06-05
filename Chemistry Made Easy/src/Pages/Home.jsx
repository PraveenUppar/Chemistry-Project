import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white py-24 sm:py-5">
      <div className="lg:pr-8 lg:pt-4">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <h2> Quick Calculators </h2>
        </p>
        <br></br>
        <div className="grid md:grid-cols-2  gap-3 grid-col-1 lg:grid-cols-4 ">
          <Link
            to="/ideal"
            className="border-2 p-9 border-blue-600 font-semibold shadow-lg rounded-xl items-center"
          >
            {" "}
            Ideal Gas Volume Calculator
          </Link>
          <Link
            to="/faraday"
            className="border-2 border-blue-600 font-semibold p-9 shadow-lg  rounded-xl items-center"
          >
            {" "}
            Faraday Equation Mass Calculator
          </Link>
          <Link
            to="/bohr"
            className="border-2 border-blue-600 p-9 font-semibold shadow-lg  rounded-xl items-center"
          >
            {" "}
            Bohr Energy Calculator
          </Link>

          <Link
            to="/gibbs "
            className="border-2 border-blue-600 font-semibold p-9 shadow-lg  rounded-xl items-center"
          >
            {" "}
            Gibbs Free Energy Calculator{" "}
          </Link>
          <Link
            to="/heat"
            className="border-2 border-blue-600 font-semibold p-9 shadow-lg  rounded-xl items-center"
          >
            {" "}
            Heat Capacity Calculator{" "}
          </Link>
          <Link
            to="/stefan "
            className="border-2 border-blue-600 font-semibold p-9 shadow-lg  rounded-xl items-center"
          >
            {" "}
            Stefan & Boltzmann Calculator{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
