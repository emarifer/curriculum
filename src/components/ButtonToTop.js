import styled from "styled-components";

export const ButtonToTop = styled.button`
  display: flex;
  border: 1px solid whitesmoke;
  border-radius: 50%;
  cursor: pointer;
  font-size: 2.5rem;
  width: 3.2rem;
  height: 3.2rem;
  align-items: center;
  justify-content: center;
  background-color: #2377ff;
  outline: none;
  color: whitesmoke;
  position: fixed;
  z-index: 100;
  bottom: 1rem;
  right: 1rem;

  &:hover {
    transition: transform 100ms;
    transform: scale(1.1);
  }
`;
