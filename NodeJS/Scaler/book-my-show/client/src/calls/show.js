import { axiosInstance } from ".";

export const AddShow = async (values) => {
    try {
        const res = await axiosInstance.post('/shows/add', values);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const GetShowsByTheatreId = async (values) => {
    try {
        const res = await axiosInstance.post('/shows/get-all-shows-by-theatre', values);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const UpdateShow = async (values) => {
    try {
        const res = await axiosInstance.put('/shows/update', values);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const DeleteShow = async (values) => {
    try {
        const res = await axiosInstance.put('/shows/delete', values);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}