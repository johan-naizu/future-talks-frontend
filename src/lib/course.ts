import axios from 'axios';
import { Course } from '@/types';
const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL


export const getAllCourses = async () => {
    try {
        const response = await axios.get<{
            data: Course[]
        }>(`${API_URL}/api/courses?populate=*`);

        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

export const getCourseById = async (id: string) => {
    try {
        const response = await axios.get<{
            data: Course
        }>(`${API_URL}/api/courses/${id}?populate=*`);

        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}