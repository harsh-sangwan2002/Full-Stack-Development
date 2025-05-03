import axiosInstance from "../utils/api.js";

export const RegisterUser = async (value)=>{
    try {
        const res = await axiosInstance.post('/api/users/register', value);
        return res.data;
    }
    catch(err){
        console.log(err);
        return err;
    }
}

export const LoginUser = async (value)=>{
    try {
        const res = await axiosInstance.post('/api/users/login', value);
        return res.data;
    }
    catch(err){
        console.log(err);
        return err;
    }
}

export const getCurrentUser = async ()=>{

    try {
        const res = await axiosInstance.get('/api/users/');
        return res.data;
    }
    catch(err){
        console.log(err);
    }
}