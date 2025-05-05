import { axiosInstance } from ".";

export const RegisterUser = async (value) => {

    try {
        const res = await axiosInstance.post('/api/users/register', value, { widthCredentials: true });
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const LoginUser = async (value) => {
    try {
        const res = await axiosInstance.post('/api/users/login', value, { withCredentials: true });
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const GetCurrentUser = async () => {
    try {
        const res = await axiosInstance.get('/api/users');
        return res.data;
    } catch (err) {
        console.log(err);
    }
}