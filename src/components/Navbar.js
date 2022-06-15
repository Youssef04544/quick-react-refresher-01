import logo from "../setup/logo.png";

const NavBar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='city tours logo' />
      <ul className='nav-links'>
        <li className='nav-link'>Home</li>
        <li className='nav-link'>About</li>
        <li className='nav-link active'>Tours</li>
      </ul>
    </nav>
  );
};

export default NavBar;
