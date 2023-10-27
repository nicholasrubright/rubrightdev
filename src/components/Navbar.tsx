export default function Navbar() {
  return (
    <div className="container-fluid mb-3">
      <ul className="nav nav-underline justify-content-center">
        <li className="nav-item">
          <a className="nav-link" href="#">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Experience
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
}
