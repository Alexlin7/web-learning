import styled from "styled-components";

const StyledForm = styled.div`
 background-color: #FFFFFF;
 color: #000000;
 padding: 60px;

 display: flex;
 flex-direction: column;
 align-items: stretch;
 
 position: absolute;
 width: 40%;
 height: auto;
 right: 0;
 
 .formTitle {
    margin: 0px 0px 60px;
    font-weight: normal;
    font-size:70px;
 }

 .colTitle {
    margin: 0;
 }
 
 .inputClass {
    background: none;
    outline: none;
    font-size: 24px;
    border-top: #FFFFFF;
    border-left: #FFFFFF;
    border-right: #FFFFFF;
    width: auto;
    margin-bottom: 60px;
    }
    line-height: 1.5;
`

export default StyledForm;