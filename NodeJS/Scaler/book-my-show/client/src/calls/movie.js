import { axiosInstance } from ".";

export const GetMovies = async () => {
    try {
        const res = await axiosInstance.get('/movies');
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const CreateMovie = async (data) => {
    try {
        const res = await axiosInstance.post('/movies', data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const UpdateMovie = async (id, data) => {
    try {
        const res = await axiosInstance.put(`/movies/${id}`, data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const DeleteMovie = async (id) => {
    try {
        const res = await axiosInstance.delete(`/movies/${id}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}