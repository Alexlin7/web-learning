import Icon from "./img/Icon";
import Button from "./style/Button.styled";
import { StyledHeader } from "./style/Header.styled";
import { List } from "./style/Header.styled";
import { Nav } from "./style/Header.styled";
import { ListItem } from "./style/Header.styled";



export default function Header({ click ,setClick }) {
    const clickLogin = () => {
        setClick(!click);
    };
    return (
        <StyledHeader>
            <Nav>
                <Icon />
                <List>
                    <ListItem>manu1</ListItem>
                    <ListItem>manu2</ListItem>
                    <ListItem>manu3</ListItem>

                </List>
                <Button onClick={clickLogin}>Login</Button>
            </Nav>
        </StyledHeader>


    );

}