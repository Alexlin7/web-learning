import { createGlobalStyle } from "styled-components"
import BG_IMG from '../../public/image/background.jpg'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

    * {
    box-sizing: border-box;
    }

    body {
    background-image: url(${BG_IMG.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
            background-position: center;
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
    }

    p {
    opacity: 0.6;
    line-height: 1.5;
    }


`

export default GlobalStyles
