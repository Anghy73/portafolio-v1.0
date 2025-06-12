function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-20 z-10">
      <nav className="w-full h-full flex justify-center items-center">
        <ul className="flex justify-center items-center gap-10">
          <li>
            <a href="#">About me</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header