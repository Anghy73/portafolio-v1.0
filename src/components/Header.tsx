function Header() {
  return (
    <header
      style={{
        backgroundColor: 'transparent',
        backdropFilter: 'blur(20px)'
      }}
      className="fixed top-0 left-0 w-full h-20 z-20"
    >
      <nav className="w-full h-full flex justify-center items-center">
        <ul className="flex justify-center items-center gap-10 text-white text-shadow-[0px_0px_8px] text-shadow-white font-medium">
          <li className="hover:text-teal-500 hover:text-shadow-[0px_0px_8px] hover:text-shadow-teal-600 transition-all">
            <a href="#"><span className="text- text-teal-500">&#123;</span> About me <span className="text- text-teal-500">&#125;</span></a>
          </li>
          <li className="hover:text-teal-500 hover:text-shadow-[0px_0px_8px] hover:text-shadow-teal-600">
            <a href="#"><span className="text- text-teal-500">&#123;</span> Projects <span className="text- text-teal-500">&#125;</span></a>
          </li>
          <li className="hover:text-teal-500 hover:text-shadow-[0px_0px_8px] hover:text-shadow-teal-600">
            <a href="#"><span className="text- text-teal-500">&#123;</span> Skills <span className="text- text-teal-500">&#125;</span></a>
          </li>
          <li className="hover:text-teal-500 hover:text-shadow-[0px_0px_8px] hover:text-shadow-teal-600">
            <a href="#"><span className="text- text-teal-500">&#123;</span> Contacts <span className="text- text-teal-500">&#125;</span></a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header