import { verifyTokenRoute } from '../utils/APIRoutes';
import axios from 'axios'
import Cookie from 'js-cookie';

export function verifyToken(){
    const token = Cookie.get('token');

    return {
        unvalidated:async () => {
            try{
                await axios.post(verifyTokenRoute, {token});
            } catch(err){
                return null;
            }
            throw new Error('');
        },
        validated:() => {
            if(!token){
                throw new Error('');
            }
            return (async () => {
                try{
                    await axios.post(verifyTokenRoute, {token});
                } catch(err){
                    throw new Error('');
                }
                return true;
            })();    
        }
    }
}
