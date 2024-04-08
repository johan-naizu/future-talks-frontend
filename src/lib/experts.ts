import axios from 'axios';
import { Professional } from '@/types';
const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL

const config = {
    params: {
        populate: '*'
    }
}

export const getAllExperts = async () => {
    try {

        const response = await axios.get<{
            data: Professional[]
        }>(`${API_URL}/api/professionals`, config);

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
        }>(`${API_URL}/api/professionals/${id}`, config);

        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}