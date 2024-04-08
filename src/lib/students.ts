import axios from 'axios';
import { Student } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL
const config = {
    params: {
        populate: '*'

    }
}

export const getAllStudents = async () => {
    try {
        const response = await axios.get<{
            data: Student[]
        }>(`${API_URL}/api/students`, config);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}
export const getStudentById = async (id: string) => {
    try {

        const response = await axios.get<{
            data: Student
        }>(`${API_URL}/api/students/${id}`, config);

        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}