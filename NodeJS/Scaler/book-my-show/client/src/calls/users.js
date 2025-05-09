import { axiosInstance } from "./index";

export const RegisterUser = async (values) => {

    try {
        const res = await axiosInstance.post('/register', values);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const LoginUser = async (values) => {

    try {
        const res = await axiosInstance.post('/login', values);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}