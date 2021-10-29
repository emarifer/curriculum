import styled, { css } from "styled-components";
import { Link, useRoute } from "wouter";

const ActiveLink = props => {
  const [isActive] = useRoute(props.href);
  return (
    <Link {...props}>
      <NavLink className={isActive ? "active" : ""}>{props.children}</NavLink>
    </Link>
  );
};

export const Navbar = ({ children }) => {
  return (
    <nav className="navbar">
      {children}
      <Separator>
        <ActiveLink href="/">
          Inicio
        </ActiveLink>
        <ActiveLink href="/cv-page">
          Mi CV
        </ActiveLink>
      </Separator>
      <div>
        <a
          href="https://www.laserrania.org/autor/enrique-marin-fernandez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mis Libros
        </a>
        <a
          href="https://github.com/emarifer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mi GitHub
        </a>
        <a
          href="https://emarifer-pwa.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mi Web Site
        </a>
      </div>
    </nav>
  );
};

const Separator = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 6rem;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

const NavLink = styled.a`
  color: #2377ff !important;
  font-weight: bolder;
  text-decoration: none;
  padding-bottom: 3px;
`;

/**
 * ACTIVAR UN ENLACE PARA LA RUTA ACTUAL. VER:
 * https://giters.com/dazzz/wouter#how-do-i-make-a-link-active-for-the-current-route
 * https://codesandbox.io/s/5zjpj19yz4?file=/src/index.js:520-537.S
 */