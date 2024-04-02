"use client";
import PageTemplate from '@/components/general/PageTemplate';
import Grid from '/public/Gride.svg';
import Image from 'next/image';
import Button from '@/components/general/Button';
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';
import { ApplicationForm, Course } from '@/types';
import { getAllCourses } from '@/lib/course';
import { submitApplication, validateDate, validateEmail } from '@/lib/application';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputField from '@/components/general/InputField';

const Apply = () => {
    const [formData, setFormData] = useState<ApplicationForm>({
        name: '',
        email: '',
        phoneNumber: '',
        dob: '',
        gender: "Male",
        address: {
            country: '',
            state: '',
            district: '',
            pinCode: ''
        },
        qualification: {
            university: '',
            marks: '',
            message: ''
        }

    })

    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllCourses();
            setCourses(response?.data || []);
        }

        fetchData();
    }, []);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        if (Object.keys(formData.address).includes(target.name)) {
            setFormData({
                ...formData,
                address: {
                    ...formData.address,
                    [target.name]: target.value
                }
            });
        }
        else if (Object.keys(formData.qualification).includes(target.name)) {
            setFormData({
                ...formData,
                qualification: {
                    ...formData.qualification,
                    [target.name]: target.value
                }
            });
        }
        else {
            setFormData({
                ...formData,
                [target.name]: target.value
            });
        }
    }

    const formBuilder = useMemo(() => ({
        main: [
            [
                {
                    type: "select",
                    label: "Course",
                    name: "course",
                    selectData: [{ key: "Select Course", value: undefined }, ...courses.map(course => ({ key: course.attributes.name, value: course.id }))],
                    value: formData.course,
                },
                {
                    type: "text",
                    label: "Name",
                    placeholder: "Name",
                    name: "name",
                    value: formData.name,
                },
            ],
            [
                {
                    type: "email",
                    label: "Email",
                    placeholder: "Email",
                    name: "email",
                    value: formData.email,
                },
                {
                    type: "tel",
                    label: "Phone",
                    placeholder: "Phone",
                    name: "phoneNumber",
                    value: formData.phoneNumber,
                },
            ],
            [
                {
                    type: "date",
                    label: "Date of Birth",
                    placeholder: "Date of Birth",
                    name: "dob",
                    value: formData.dob,
                },
                {
                    type: "select",
                    label: "Gender",
                    name: "gender",
                    selectData:
                        [
                            { key: "Male", value: "Male" },
                            { key: "Female", value: "Female" },
                            { key: "Other", value: "Other" }
                        ],
                    value: formData.gender,
                },
            ]
        ],
        address: [
            [
                {
                    type: "text",
                    label: "Country",
                    placeholder: "Country",
                    name: "country",
                    value: formData.address.country,
                },
                {
                    type: "text",
                    label: "State",
                    placeholder: "State",
                    name: "state",
                    value: formData.address.state,
                },
            ],
            [
                {
                    type: "text",
                    label: "District",
                    placeholder: "District",
                    name: "district",
                    value: formData.address.district,
                },
                {
                    type: "text",
                    label: "Pin Code",
                    placeholder: "Pin Code",
                    name: "pinCode",
                    value: formData.address.pinCode,
                },
            ]
        ],
        qualification: [
            [
                {
                    type: "text",
                    label: "University",
                    placeholder: "University",
                    name: "university",
                    value: formData.qualification.university,
                },
                {
                    type: "text",
                    label: "Marks",
                    placeholder: "Marks",
                    name: "marks",
                    value: formData.qualification.marks,
                },
            ],
            [
                {
                    type: "textarea",
                    label: "Message",
                    placeholder: "Message",
                    name: "message",
                    value: formData.qualification.message,
                },
            ]
        ]
    }), [formData, courses])



    const handleSubmit = async () => {
        if (!validateDate(formData.dob) || !validateEmail(formData.email))
            return toast.error('Invalid Date or Email');
        const response = await submitApplication(formData);
        if (response)
            toast.success('Application submitted successfully');
        else
            toast.error('Failed to submit application');
    }


    return (
        <PageTemplate className='w-screen min-h-screen h-full p-1 lg:p-8 flex flex-col items-center relative'>
            <Image
                src={Grid}
                alt='Apply'
                width={500}
                height={500}
                className='object-cover w-full h-full absolute top-0 left-0 -z-10'
            />
            <div className='w-full text-center p-4 font-bold text-4xl mt-24'> Application Form </div>
            <div className='w-11/12 lg:w-4/5 h-full mt-12 rounded-lg backdrop-blur-sm shadow-2xl border-primarycolor'>
                <form className='w-full h-full p-2'>
                    {
                        formBuilder.main.map((row, index) => (
                            <div key={index} className='flex items-center justify-center flex-col lg:flex-row w-full'>
                                {
                                    row.map((input, index) => (
                                        <InputField
                                            key={index}
                                            {...input}
                                            onChange={handleChange}
                                        />
                                    ))
                                }
                            </div>
                        ))
                    }

                    <div className='flex items-center justify-center flex-col bg-neutral-200 m-2 rounded-md'>
                        <span className='font-bold text-xl my-4'> Address </span>
                        {
                            formBuilder.address.map((row, index) => (
                                <div key={index} className='flex items-center justify-center flex-col lg:flex-row w-full'>
                                    {
                                        row.map((input, index) => (
                                            <InputField
                                                key={index}
                                                {...input}
                                                onChange={handleChange}
                                            />
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>

                    <div className='flex items-center justify-center flex-col bg-neutral-200 m-2 rounded-md'>
                        <span className='font-bold text-xl my-4'> Qualifications </span>
                        {
                            formBuilder.qualification.map((row, index) => (
                                <div key={index} className='flex items-center justify-center flex-col lg:flex-row w-full'>
                                    {
                                        row.map((input, index) => (
                                            <InputField
                                                key={index}
                                                {...input}
                                                onChange={handleChange}
                                            />
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </form>
                <div className='flex items-center justify-end p-2 px-4 w-full'>
                    <div className='w-full lg:w-1/3'>
                        <Button
                            text="Submit"
                            invert
                            onClick={handleSubmit}
                        />
                    </div>
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
        </PageTemplate>
    );
}

export default Apply;