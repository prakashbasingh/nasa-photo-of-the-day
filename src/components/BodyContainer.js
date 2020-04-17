import styled from 'styled-components'


const BodyContainer = styled.div`
border: 2px solid black;
margin: 15rem;
box-shadow: 0 0 20px 8px magenta;
background-color: black;
color: white;

p{
color: yellow;
transition: all 1s ease-in-out;
padding: 1rem;
    &:hover {
        color: red;
        transition: all 1s ease-in-out;
    }
}

img{
    box-shadow: 0 0 20px 8px gray;

}

h3{
    color: gold;
    transition: all 1s ease-in-out;
  
  &:hover {
    color: red;
    transition: all 1s ease-in-out;
  }

}
`

export default BodyContainer