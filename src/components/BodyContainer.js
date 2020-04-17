import styled from 'styled-components'


const BodyContainer = styled.div`
border: 2px solid black;
margin: 15rem;
box-shadow: 0 0 20px 8px orange;
background-color: black;
border-radius:2rem;
color: white;

p{
color: yellow;
transition: all 1s ease-in-out;
margin: 2rem;
padding: 1rem;
    &:hover {
        color: red;
        transition: all 1s ease-in-out;
    }

}

img{
    box-shadow: 0 0 20px 8px gray;
    object-fit: contain;
    width: 100%;
    @media (min-width: 800px){
        width:80%;
    }

}

h3{
    color: gold;
    transition: all 1s ease-in-out;
    margin: 2rem;

  &:hover {
    color: red;
    transition: all 1s ease-in-out;
  }
 
}

span{
    margin-bottom:4rem;
}
`

export default BodyContainer