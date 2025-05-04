import { axiosInstance } from ".";

export const RegisterUser = async (value) => {

    try {
        const res = await axiosInstance.post('/api/users/register', value);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const LoginUser = async (value) => {
    try {
        const res = await axiosInstance.post('/api/users/login', value);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}