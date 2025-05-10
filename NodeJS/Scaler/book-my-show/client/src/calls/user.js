import { axiosInstance } from "./index";

export const RegisterUser = async (values) => {

    try {
        const res = await axiosInstance.post('/users/register', values);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const LoginUser = async (values) => {

    try {
        const res = await axiosInstance.post('/users/login', values);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const GetCurrentUser = async () => {

    try {
        const res = await axiosInstance.get('/users/get-current-user');
        return res;
    } catch (err) {
        console.log(err);
    }
}