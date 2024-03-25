import axios from "axios";
import { ApplicationForm } from "@/types";

export const submitApplication = async (data: ApplicationForm) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/applications`, { data });
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

export const validateEmail = (email: string) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validateDate = (date: string) => {
    return date.match(/^\d{4}-\d{2}-\d{2}$/);
};