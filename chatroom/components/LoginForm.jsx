import Button from "./style/Button.styled";
import StyledForm from "./style/Form.styled";

export default function Form() {
    return(
        <StyledForm>
            <h1 className="formTitle">FBI Open Up</h1>
            <h2 className="colTitle">EMAIL</h2>
            <input type="email" className="inputClass" />
            <h2 className="colTitle">PASSWORD</h2>
            <input type="password" className="inputClass" />
            <Button LoginClick >Login</Button>

            <span>Don't have an account?Sigu up!</span>
        </StyledForm>
    );
}