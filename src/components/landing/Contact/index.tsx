import Image from "next/image";
import grid from "/public/Gride.svg";
import contactImage from '/public/contactImage.svg';
import { neueRegrade } from "@/fonts";
import send from '/public/send.svg';
import { ChangeEvent, FormEvent, useState } from "react";
import { sendMessage } from "@/lib/getInTouch";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCourseContext } from "@/hooks/useCourseContext";


const Contact = () => {
    const { courses, universities } = useCourseContext();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        course: "1",
        university: "1"
    })


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        console.log(e.target.value);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.course || !formData.university) {
            console.log(formData)
            return toast.error("Please fill in all fields")
        }

        try {
            await sendMessage({
                name: formData.name,
                email: formData.email,
                phoneNumber: "",
                course: formData.course,
                university: formData.university,
            });
            toast.success("Message sent successfully")
            setFormData({
                name: "",
                email: "",
                course: "",
                university: ""
            })
        }
        catch (error) {
            console.error(error);
            toast.error("An error occurred while sending the message")
        }
    }

    return (
        <div className="w-screen min-h-screen h-full
         flex flex-col relative overflow-hidden">
            <Image
                src={grid}
                className="absolute w-full h-full top-0 left-0 -z-10 object-cover"
                alt="grid"
                width={1000}
                height={1000}
            />

            <h1 className={`w-full font-extrabold text-2xl text-primarycolor text-center p-16 ${neueRegrade.className}`}> Get in touch </h1>

            <div className="w-full h-full flex mb-8">
                <div className="w-full h-full hidden lg:flex items-center justify-center z-10">
                    <Image
                        src={contactImage}
                        alt="contactImage"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="w-full h-full flex items-center justify-center p-2">
                    <form className="shadow-xl rounded-xl bg-[#1587AD] p-8 md:w-2/3" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col md:flex-row w-full gap-2">
                            <div className="flex flex-col w-full">
                                <label htmlFor="course">Course</label>
                                <select
                                    name="course"
                                    id="course"
                                    value={formData.course}
                                    onChange={handleChange}
                                >
                                    {
                                        courses?.data.map(course => (
                                            <option value={course.id} key={course.id}>{course.attributes.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="university"> College </label>
                                <select
                                    name="university"
                                    id="univerisity"
                                    value={formData.university}
                                    onChange={handleChange}
                                >
                                    {
                                        universities?.data.map((university) => (
                                            <option key={university.id} value={university.id}>{university.attributes.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-center mt-2">
                            <button className="flex bg-white rounded-full font-medium text-[#1587AD] text-xs gap-2 p-2 px-6 items-center justify-center">
                                <Image src={send} alt="send" width={10} height={10} />
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
        </div>
    )
}

export default Contact;