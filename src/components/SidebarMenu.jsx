import styled, { css } from "styled-components";
import { useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { CgWebsite } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
import { Link } from "wouter";

export const SidebarMenu = ({ showSidebarMenu, setShowSidebarMenu }) => {
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    if (window.innerWidth > 768) setShowSidebarMenu(false);
  };

  return (
    <>
      <Menu showSidebarMenu={showSidebarMenu}>
        <MenuLinks>
          <ElementList>
            <ElementLink
              href="https://www.laserrania.org/autor/enrique-marin-fernandez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImBooks />
              &nbsp;&nbsp;Mis Libros
            </ElementLink>
          </ElementList>
          <ElementList>
            <ElementLink
              href="https://github.com/emarifer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
              &nbsp;&nbsp;Mi GitHub
            </ElementLink>
          </ElementList>
          <ElementList>
            <ElementLink
              href="https://emarifer-pwa.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgWebsite />
              &nbsp;&nbsp;Mi Web Site
            </ElementLink>
          </ElementList>
        </MenuLinks>
        <SiteLinks>
          <ElementList>
            <Link
              onClick={() => setShowSidebarMenu(!showSidebarMenu)}
              to="/"
              style={{ color: "#1f1f1f" }}
            >
              <AiFillHome />
              &nbsp;&nbsp;Inicio
            </Link>
          </ElementList>
          <ElementList>
            <Link
              onClick={() => setShowSidebarMenu(!showSidebarMenu)}
              to="/cv-page"
              style={{ color: "#1f1f1f" }}
            >
              <BsNewspaper />
              &nbsp;&nbsp;Mi CV
            </Link>
          </ElementList>
        </SiteLinks>
      </Menu>

      {showSidebarMenu && (
        <Overlay
          className="overlay"
          onClick={() => setShowSidebarMenu(!showSidebarMenu)}
        />
      )}
    </>
  );
};

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  position: fixed;
  top: 4rem;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

const Menu = styled.div`
  background-color: whitesmoke;
  z-index: 1000;
  position: fixed;
  top: 4rem;
  bottom: 0;
  left: 0;
  width: 70%;
  height: 100%;
  transition: transform 0.3s ease;
  transform: ${(props) =>
    props.showSidebarMenu ? "translate(0, 0)" : "translate(-100%, 0)"};
`;

const MenuLinks = styled.div`
  background: #c8ddff;
  padding: 1rem;
`;
const ElementList = styled.div`
  margin: 1rem 0 1rem 0.7rem;
`;

const ElementLink = styled.a`
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  color: #2377ff;
`;

const SiteLinks = styled.div`
  background: #d4d4d4;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

/**
 * PASAR UNA PROPS A UN STYLED COMPONENT PARA QUE CAMBIE ALGUNOS DE SUS ATRIBUTOS CSS
 * DE FORMA CONDICIONAL, P.EJ, UNA ANIMACION. VER:
 * https://stackoverflow.com/questions/44459813/adding-transitions-to-styled-components#57586503
 * 
 * AÑADIR CLASES A UN STYLED COMPONENT. VER:
 * https://stackoverflow.com/questions/59756648/add-classes-to-styled-component
 */
