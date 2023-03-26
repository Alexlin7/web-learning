import Button from "./style/Button.styled";
import StyledForm from "./style/Form.styled";
import Container from "./style/Container.styled";

export default function Form({ click, setClick }) {
    const ClickContainer = () => {
        setClick(!click);
    }

    return (
        <>
            <Container onClick={ClickContainer} click={click} />
            <StyledForm click={click}>
                    <h1 className="formTitle">FBI Open Up</h1>
                    <h2 className="colTitle">EMAIL</h2>
                    <input type="email" className="inputClass" />
                    <h2 className="colTitle">PASSWORD</h2>
                    <input type="password" className="inputClass" />
                    <Button LoginClick >Login</Button>

                    <span>Don't have an account?Sigu up!</span>

            </StyledForm>    
        </>
         
    );
}