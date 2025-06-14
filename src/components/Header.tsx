function Header() {
  return (
    <header
      // style={{
      //   backgroundColor: 'transparent',
      //   backdropFilter: "blur(0px)"
      // }}
      className="fixed top-0 left-0 w-full h-20 z-10 backdrop-blur-xl">
      <nav className="w-full h-full flex justify-center items-center">
        <ul className="flex justify-center items-center gap-10 text-white text-shadow-[0px_0px_8px] text-shadow-white font-medium">
          <li className="hover:text-teal-500 hover:text-shadow-[0px_0px_8px] hover:text-shadow-teal-600 transition-all">
            <a href="#">About me</a>
          </li>
          <li className="hover:text-teal-500 hover:text-shadow-[0px_0px_8px] hover:text-shadow-teal-600">
            <a href="#">Projects</a>
          </li>
          <li className="hover:text-teal-500 hover:text-shadow-[0px_0px_8px] hover:text-shadow-teal-600">
            <a href="#">Skills</a>
          </li>
          <li className="hover:text-teal-500 hover:text-shadow-[0px_0px_8px] hover:text-shadow-teal-600">
            <a href="#">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header