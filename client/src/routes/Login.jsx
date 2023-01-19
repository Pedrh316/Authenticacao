import React, { useState } from 'react'
import styled from 'styled-components'
import { Form, Link, useActionData, useNavigation } from 'react-router-dom'
import Alert from '../components/Alert'
import Loading from '../components/Loading'
import FormInput from '../components/FormInput'
import { useRedirect } from '../hooks/useRedirect'
import { values as loginValues } from '../schemas/login'
import { fields as loginFields } from '../schemas/fields/login'
import { useCleanForm } from '../hooks/useCleanForm'

const SLogin = styled(Form)`
    .buttons-container{
        display:flex;
        justify-content:space-between;
    }
`

const Login = () => {

    const [values, setValues] = useState(loginValues)
    
    function handleChange({target}){
        setValues(prevValues => ({...prevValues, [target.name]:target.value}));
    }

    const fieldsJSX = loginFields.map(field => <FormInput key={field.id} onChange={handleChange} required={true} {...field}/>)
    const navigation = useNavigation()
    const loginResponse = useActionData();
    loginResponse?.success && useRedirect('/', 1500);

    return (
        <>
            { navigation.state === "submitting" && <Loading/> }
            <SLogin method="post">
                <h1 className='title'>Logar</h1>
                {fieldsJSX}
                <footer>
                    <small className="small">Não possui uma conta? <Link to="/register">Registrar</Link></small>
                    <div className="buttons-container">
                        <button type="button" className="button-default button-empty" onClick={() => useCleanForm(setValues)}>Limpar</button>
                        <button type="submit" className="button-default button-solid">Concluir</button>
                    </div>
                    {loginResponse && <Alert {...loginResponse}/>}
                </footer>
            </SLogin>
        </>
    )
}

export default Login