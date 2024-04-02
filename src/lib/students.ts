import axios from 'axios';
import { Student } from '@/types';
const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL


export const getAllStudents = async () => {
    try {
        const response = await axios.get<{
            data: Student[]
        }>(`${API_URL}/api/students?populate=*`);
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
        }>(`${API_URL}/api/students/${id}?populate=*`);

        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}