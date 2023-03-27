import styled from "styled-components";

const Block = styled.div`
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1;
    display: ${(props) => props.click ? "fixed" : "none"};
`

export default Block;