import StyledContainer from "./style/Container.styled";
import Button from "./style/Button.styled";
import PlayIcon from "./img/PlayIcon";

function Container({ click }) {
    return(
        <StyledContainer props={ click } >
            <Button>
                <PlayIcon /> Watch Video
            </Button>
        </StyledContainer>
    );
}

export default Container;