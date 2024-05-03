import axios from 'axios';
const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL


export const sendMessage = async (data: {
    name: string,
    email: string,
    message: string
}) => {
    await axios.post(`${API_URL}/api/messages`, { data });
}

export const sendMessageNew = async (data: {
    name: string,
    email: string,
    phoneNumber: string,
    course: string,
    university: string,
}) => {
    await axios.post(`${API_URL}/api/messages`, { ...data, message: "" });
}


export const generateMessage = (message: string, firstName: string, lastName: string, phoneNumber: string) => {
    return `${message} \n\n\n -------------------- \n ${firstName} ${lastName} \n ${phoneNumber}`
}