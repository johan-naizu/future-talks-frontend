import Image from "next/image";
import grid from "/public/Gride.svg";
import contactImage from '/public/contactImage.svg';
import { neueRegrade } from "@/fonts";
import send from '/public/send.svg';
import { FormEvent, useState } from "react";
const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div className="w-screen min-h-screen h-full flex flex-col relative">
            <Image
                src={grid}
                className="absolute w-full h-full -z-10 object-fit-cover"
                alt="grid"
                width={1000}
                height={1000}
            />

            <h1 className={`w-full font-extrabold text-2xl text-primarycolor text-center p-16 ${neueRegrade.className}`}> Get in touch </h1>

            <div className="w-full h-full flex mb-8">
                <div className="w-full h-full flex items-center justify-center">
                    <Image
                        src={contactImage}
                        alt="contactImage"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="w-full h-full flex items-center justify-center">
                    <form className="shadow-xl rounded-xl bg-[#79BCB8] p-8 w-2/3" onSubmit={handleSubmit}>
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
                        <div className="flex flex-col">
                            <label htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                cols={30}
                                rows={10}
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <button className="flex bg-white rounded-full font-medium text-[#79BCB8] text-xs gap-2 p-2 items-center justify-center">
                                <Image src={send} alt="send" width={10} height={10} />
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;