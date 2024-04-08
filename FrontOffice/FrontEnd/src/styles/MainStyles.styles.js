import styled from "styled-components";

export const NavContainer = styled.nav`
  background-color: black;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  color: white;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;
    gap: 4rem;

    a {
      cursor: pointer;
    }
  }
  img {
    cursor: pointer;
  }
`;
