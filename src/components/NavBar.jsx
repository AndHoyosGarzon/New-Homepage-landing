import burgerMenu from "/images/icon-menu.svg";

const Navbar = () => {
  return (
    <>
      <ul
        className="
         hidden  
         md:flex text-[18px] md:w-[438px] md:place-content-around
         md:items-center md:text-[16px]"
      >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">New</a>
        </li>
        <li>
          <a href="#">Popular</a>
        </li>
        <li>
          <a href="#">Trending</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
      </ul>
      <img
        className="w-10 h-4 cursor-pointer md:hidden"
        src={burgerMenu}
        alt="menu"
      />
    </>
  );
};

export default Navbar;
