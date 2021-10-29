import { ReactComponent as Md, attributes } from "./pages/markdown/post.md";
import { Home } from "./pages/Home";
import { MdKeyboardArrowUp } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { SidebarMenu } from "./components/SidebarMenu";
import { ButtonToTop } from "./components/ButtonToTop";
import { Route, Link } from "wouter";

const scrollToTop = () => {
  scrollTo({
    behavior: "smooth",
    top: 0,
  });
};

export const App = () => {
  const [showBtn, setShowBtn] = useState(false);
  const [showSidebarMenu, setShowSidebarMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleChangeScroll);
    return () => window.removeEventListener("scroll", handleChangeScroll);
  }, []);

  const handleChangeScroll = () => {
    const scrollTop = pageYOffset || window.document.documentElement.scrollTop; // Por si un navegador antiguo no detectara «pageYOffset»
    setShowBtn(scrollTop > 300 ? true : false);
  };

  return (
    <>
      <Navbar>
        <div className="menu-title">
          {!showSidebarMenu ? (
            <GiHamburgerMenu
              className="menu"
              onClick={() => setShowSidebarMenu(!showSidebarMenu)}
            />
          ) : (
            <GrClose
              className="menu"
              onClick={() => setShowSidebarMenu(!showSidebarMenu)}
            />
          )}
          <Link to="/">
            <small>Mi Landing Page</small>
          </Link>
        </div>
      </Navbar>
      <div className="container">
        <Route path="/" component={Home} />
        <Route path="/cv-page" component={Md} />
      </div>
      {showBtn && (
        <ButtonToTop onClick={scrollToTop}>
          <MdKeyboardArrowUp />
        </ButtonToTop>
      )}
      <SidebarMenu
        showSidebarMenu={showSidebarMenu}
        setShowSidebarMenu={setShowSidebarMenu}
      />
    </>
  );
};

/**
 * PASAR UNA PROPS A UN STYLED COMPONENT PARA QUE CAMBIE ALGUNOS DE SUS ATRIBUTOS CSS
 * DE FORMA CONDICIONAL, P.EJ, UNA ANIMACION. VER:
 * https://stackoverflow.com/questions/44459813/adding-transitions-to-styled-components#57586503
 */
