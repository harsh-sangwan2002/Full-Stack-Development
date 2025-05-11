import { axiosInstance } from ".";

export const GetMovies = async () => {
    try {
        const res = await axiosInstance.get('/movies');
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const AddMovie = async (values) => {
    try {
        const res = await axiosInstance.post('/movies/add-movie', values);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const UpdateMovie = async (values) => {
    try {
        const res = await axiosInstance.put('/movies', values);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const DeleteMovie = async (values) => {
    try {
        const res = await axiosInstance.put('/movies/delete', values);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}