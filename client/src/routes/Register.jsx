import React, { useState } from 'react'
import { Form, Link, useActionData, useNavigation } from 'react-router-dom'
import styled from 'styled-components'
import { useCleanForm } from '../hooks/useCleanForm'
import Alert from '../components/Alert'
import Loading from '../components/Loading'
import FormInput from '../components/FormInput'
import { useRedirect } from '../hooks/useRedirect'
import {values as registerValues} from '../schemas/register'
import { fields as registerFields } from '../schemas/fields/register'

const SRegister = styled(Form)`
    .buttons-container{
        display:flex;
        justify-content:space-between;
    }
`

const Register = () => {    

    const [values, setValues] = useState(registerValues)
    
    function handleChange({target}){
        setValues(prevValues => ({...prevValues, [target.name]:target.value}));
    }

    const fieldsJSX = registerFields(values).map(field => <FormInput 
        key={field.id}
        value={values[field.name]}
        {...field}
        required={true}
        onChange={handleChange}
    />)

    const navigation = useNavigation();
    let registerResponse = useActionData();
    registerResponse?.success && useRedirect('/', 1500);

    return (
        <>
            { navigation.state === "submitting" && <Loading/> }
            <SRegister method="post">
                <h1 className="title">Criar Conta</h1>
                { fieldsJSX }
                <footer>
                    <small className="small">Já possui uma conta? <Link to="/login">Logar</Link></small>
                    <div className="buttons-container">
                        <button className="button-default button-empty" type="button" onClick={() => useCleanForm(setValues)}>Limpar</button>
                        <button className="button-default button-solid" type="submit" >Concluir</button>
                    </div>
                    {registerResponse && <Alert {...registerResponse}/>}
                </footer>
            </SRegister>
        </>
    )
}

export default Register