import styled from "styled-components";

const StyledForm = styled.div`
 background-color: #FFFFFF;
 color: #000000;
 padding: 60px;

 display: flex;
 flex-direction: column;
 align-items: stretch;
 
 position: fixed;
 width: 40%;
 height: 100%;
 z-index: 1;
 top: 0;
 right: ${((props) => props.click ? "0" : "-40%")};
 overflow-x: hidden;


/* (-)號開頭的 是用來擴充瀏覽器支援的部分 */
-webkit-transform:translateX(0);
-moz-transform:translateX(0);
-ms-transform:translateX(0);
-o-transform:translateX(0);
transform: translateX(0);

-webkit-transition:.5s ease all;
-moz-transition:.5s ease all;
-o-transition:.5s ease all;
transition:.5s ease all;
 
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

