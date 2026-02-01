

import {Link} from "react-router"

const NavBar = () => {
  return <nav className="navbar mt-6">
    <Link to="/" className="flex items-center">
        <p className="text-xl font-bold text-gradient uppercase tracking-widest" > resumind </p>
    </Link>
      <Link to="/upload" className="primary-button !w-fit text-sm font-medium px-6 py-2">
          Upload Resume
      </Link>
  </nav>
};
export default NavBar;