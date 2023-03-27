import styled from "styled-components";

const StyledContainer = styled.div`

    width: auto;
    height: auto;
    position: fixed;
    right: ${((props) => {
        console.log(props.click)
        return props.props ? "42vw" : "2vw"
        })};
    bottom: 20px;
   z-index: 1;
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
 

`

export default StyledContainer;