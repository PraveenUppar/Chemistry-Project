import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-700 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        <span className="text-4xl text-white font-bold tracking-tight md:ml-6 mt-4 md:mt-0">
          <Link to="/" className="title">
            Chemistry Made Easy
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
