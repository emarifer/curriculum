import styled, { css } from "styled-components";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "wouter";

export const Home = ({ props }) => {
  return (
    <Wrapper>
      <img src="img/avatar.jpeg" alt="avatar" />
      <h1>Mi Landing Page</h1>
      <p>¿En qué puede ayudarte?</p>
      <WrapperLink>
        <Link style={customLink} to="/cv-page">
          Revisa mi CV&nbsp;&nbsp;
          <MdOutlineArrowRightAlt />
        </Link>
      </WrapperLink>
      <Separator />
      <Content>
        <h3>¡¡¡Saludos!!!</h3>
        <p>
          Te presento mi landing page para que sepas algo sobre mí. Cualquier
          duda que se te ofrezca te la resolveré si te pones en contacto conmigo
          através de e-mail o teléfono. ¡Te espero!
        </p>
      </Content>
      <Separator />
      <Footer>MIT Licensed | Copyright © 2021 Enrique Marín</Footer>
    </Wrapper>
  );
};

const Common = css`
  color: #8099c2;
  line-height: 1.7rem;
`;

const customLink = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#2377ff",
  color: "whitesmoke",
  fontSize: "1.2rem",
  fontWeight: "600",
  margin: "1rem auto",
  padding: "1rem 1.3rem",
  borderRadius: "3px",
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  p {
    color: #8099c2;
    font-size: 1.2rem;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.5rem;
    }

    img {
      width: 260px;
    }
  }
`;

const WrapperLink = styled.div`
  margin: auto;
  &:hover {
    transition: transform 100ms;
    transform: scale(1.1);
  }
`;

const Separator = styled.hr`
  width: 90%;
  border: 1px solid #8099c2;
`;

const Content = styled.div`
  margin: 0 3rem;
  text-align: left;
  ${Common};

  p {
    font-size: 1rem;
  }

  @media screen and (min-width: 768px) {
    margin: 1rem 8rem;
  }
`;

const Footer = styled.footer`
  margin: 1rem 0;
  ${Common};
`;

/**
 * STYLED-COMPONENTS. VER:
 * https://latteandcode.medium.com/react-7-trucos-para-trabajar-con-styled-components-2f4df0ec568c
 */
