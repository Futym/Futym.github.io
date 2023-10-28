import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/excuses">Excuses</Link>
    </div>
  );
};
