import axios from 'axios';
const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export const sendMessage = async (data: {
    name: string,
    email: string,
    phoneNumber: string,
    course: string,
    university: string,
}) => {
    await axios.post(`${API_URL}/api/messages`, { data });
}