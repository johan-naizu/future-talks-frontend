import { University } from '@/types';
import axios from 'axios'
const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const config = {
    params: {
        populate: '*'
    }
};

export const getAllUniversities = async () => {
    try {
        const response = await axios.get<{
            data: University[]
        }>(`${API_URL}/api/universities`, {
            params: {
                'populate[students][populate]': "*",
                'populate[images][populate]': '*'
            }
        });

        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}
