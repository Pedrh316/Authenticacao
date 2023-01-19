
const fields = (values) => [
    {
        id:'name',
        name:'username',
        type:'text',
        placeholder:'Nome de usuário',
        errorMessage:'Seu nome deve ter de 3 a 16 caracteres e não pode conter números.',
        pattern:'[A-Za-z\D]{3,16}',
        label:'Nome',
    },
    {
        id:'email',
        name:'email',
        type:'email',
        placeholder:'Digite seu melhor email',
        errorMessage:'Email inválido.',
        label:'Email',
    },
    {
        id:'password',
        name:'password',
        type:'password',
        placeholder:'Senha',
        errorMessage:'Sua senha deve ter de 3 a 16 caracteres, sendo pelo menos uma letra maiúscula, minúscula, e um número',
        pattern:'(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{3,}',
        maxLength:50,
        label:'Senha',
    },
    {
        id:'passwordConfirm',
        name:'passwordConfirm',
        type:'password',
        placeholder:'Confirme sua senha',
        errorMessage:'Sua senha não coincide com a senha anterior',
        pattern:values.password,
        label:'Confirmar Senha',
    }
]


export {fields}