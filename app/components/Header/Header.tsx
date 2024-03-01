function Header() {
  return (
    <header className="p-4">
      <nav className="flex items-center justify-between">
        <h1 className="text-3xl font-main">Vision.</h1>
        <ul className="flex gap-2 font-main">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Work</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Contacts</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
