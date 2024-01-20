import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <main>
        <header>Webáruházam</header>

        <nav>
          <ul>
            <li>
              <Link to="/">Amin</Link>
            </li>
            <li>
              <Link to="/publikus">Publikus</Link>
            </li>
          </ul>
        </nav>
        <article>
          <Outlet />
        </article>
        <footer>Bathelt Róbert</footer>
      </main>
    </>
  );
};

export default Layout;
