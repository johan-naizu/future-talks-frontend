import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL


export const getAllExperts = async () => {
    try {

        const response = await axios.get<{
            data: Professional[]
        }>(`${API_URL}/api/professionals?populate=*`);

        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

export const getCourseById = async (id: string) => {
    try {

        const response = await axios.get<{
            data: Professional
        }>(`${API_URL}/api/professionals/${id}?populate=*`);

        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}