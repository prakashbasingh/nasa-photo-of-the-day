import styled from "styled-components";

const Header = styled.header`
  background-image: url("https://www.star2star.com/sites/default/files/headers/Space-Museum_0.png");
  background-size: cover;
  border: 1px solid black;
  margin: 5rem;
  min-height: 12vh;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  color: white;
  border-radius: 2rem;
  box-shadow: 0 0 20px 8px black;

  h1 {
    color: red;
    transition: all 1s ease-in-out;

    &:hover {
      color: gold;
      transition: all 1s ease-in-out;
      box-shadow: 0 0 20px 8px magenta;
      border-radius: 2rem;
      padding: 5px;
    }
  }

  img {
    box-shadow: 0 0 20px 8px magenta;
    border-radius: 2rem;
  }
`;
export default Header;
