import axios from 'axios';
import { Course } from '@/types';
const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL

const config = {
    params: {
        populate: '*'

    }
}

export const getAllCourses = async () => {
    try {
        const response = await axios.get<{
            data: Course[]
        }>(`${API_URL}/api/courses`, {
            params: {
                'populate[*][populate]': "*"
            }
        });

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
        }>(`${API_URL}/api/courses/${id}`, config);

        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}


export const getTrendingCourses = async () => {
    try {
        const response = await axios.get<{
            data: {
                id: string,
                attributes: {
                    courses: {
                        data: Course[]
                    }
                }
            }
        }>(`${API_URL}/api/trending-course`, {
            params: {
                'populate[courses][populate]': 'logo'
            }
        }
        );

        return response.data.data.attributes.courses;
    }
    catch (error) {
        console.log(error);
    }
}