import styled from "styled-components"

const Button = styled.button`
    background-color: ${props => props.LoginClick ? "#000000" : "#FFFFFF"} ;
    border-radius: 100px;
    width: 200px;
    height: 60px;
    color: ${props => props.LoginClick ? "#FFFFFF" : "000000"};
    border: #FFFFFF;
    font-size: 40px;
    font-weight: bold;
`

export default Button;