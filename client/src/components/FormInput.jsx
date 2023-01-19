import { useState } from "react";
import styled from "styled-components";

const SFormInput = styled.label`
    display:block;
    margin-block:.75rem;

    input{
        border:1px solid #53624F;
        padding:.5rem;
        border-radius:.35rem;        
        margin-top:.25rem;
        margin-bottom:.5rem;
        color:#888;
    }
    input + small{
        display:none;
    }
    input:invalid[focused="true"] + small{
        display:block;
    }

    &, input, small{
        display:block;
        width:100%;
    }
    
    small{
        color:darkred;
    }
`

const FormInput = (props) => {
    const {id, label, errorMessage, ...inputProps} = props;
    const [focused, setFocused] = useState(false);

    const handleFocused = () => {
        setFocused(true);
    }
    
    return (
        <SFormInput htmlFor={id}>{label}
            <input {...inputProps} focused={focused.toString()} onBlur={handleFocused} />
            <small>{errorMessage}</small>
        </SFormInput>
    )
}

export default FormInput