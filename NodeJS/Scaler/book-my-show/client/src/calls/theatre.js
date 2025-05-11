import { axiosInstance } from "./index";

export const GetAllTheatresForOwner = async (values) => {
    try {
        const resp = await axiosInstance.post(`/theatres/get-all-theatre-by-owner`, values);
        return resp.data;
    } catch (err) {
        console.log(err);
    }
}

export const GetAlTheatreForAdmin = async () => {
    try {
        const resp = await axiosInstance.get(`/theatres/get-all`);
        return resp.data;
    } catch (err) {
        console.log(err);
    }
}

export const AddTheatre = async (values) => {
    try {
        const resp = await axiosInstance.post(`/theatres/add`, values);
        return resp.data;
    } catch (err) {
        console.log(err);
    }
}

export const UpdateTheatre = async (values) => {
    try {
        const resp = await axiosInstance.put(`/theatres/update`, values);
        return resp.data;
    } catch (err) {
        console.log(err);
    }
}

export const DeleteTheatre = async (values) => {
    try {
        const resp = await axiosInstance.put(`/theatres/delete`, values)
        return resp.data;
    } catch (err) {
        console.log(err);
    }
}