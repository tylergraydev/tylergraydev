export default function Nav() {
  return (
    <nav className=" w-full h-16 bg-gray-800 text-white flex items-center justify-between px-4">
      <div className="text-lg font-bold">Tyler Gray</div>
      <ul className="flex space-x-16">
        <li>
          <a href="#home" className="hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-400">
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-400">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-400">
            Passions
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
