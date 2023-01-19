import axios from "axios";
import Cookie from 'js-cookie';

export const authenticate = async (request, requestRoute) => {
    const data = await request.formData();
    const values = Object.fromEntries(data);
    try{
        const {data:{msg, success, token}} = await axios.post(requestRoute, values);
        Cookie.set('token', token, {sameSite:'strict'});
        return {success, msg};
    }
    catch(err){
        return err.response ? {success:false, msg:err.response.data.msg} :
        {success:false, msg:'Servidor não disponível. Tente novamente mais tarde.'}
    }
}