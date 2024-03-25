"use client";
import PageTemplate from '@/components/general/PageTemplate';
import Grid from '/public/Gride.svg';
import Image from 'next/image';
import Button from '@/components/general/Button';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { ApplicationForm, Course } from '@/types';
import { getAllCourses } from '@/lib/course';
import { submitApplication, validateDate, validateEmail } from '@/lib/application';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const handleSubmit = async () => {
        console.log(formData);
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
            <div className='w-11/12 lg:w-4/5 h-full mt-12 rounded-lg backdrop-blur-sm border border-2 border-primarycolor'>
                <form className='w-full h-full'>
                    <div className='flex items-center justify-center flex-col lg:flex-row'>
                        <div className='p-2 mt-2 w-full'>
                            <label htmlFor="course" className='text-black font-medium'>Course</label>
                            <select
                                className='w-full h-11 border rounded-sm border-primarycolor focus:outline-green-600'
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                            >
                                <option value={undefined}>Select Course</option>
                                {
                                    courses.map(course => (
                                        <option
                                            key={course.id}
                                            value={course.id}
                                        >
                                            {course.attributes.name}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className='p-2 mt-2 w-full'>
                            <label htmlFor="name" className='text-black font-medium'>Name</label>
                            <input
                                type="text"
                                placeholder='Name'
                                id="name"
                                className='rounded-sm border-primarycolor focus:outline-green-600'
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className='flex items-center justify-center flex-col lg:flex-row'>
                        <div className='p-2 mt-2 w-full'>
                            <label htmlFor="email" className="text-black font-medium">Email</label>
                            <input
                                type="email"
                                placeholder='Email'
                                id="email"
                                className='rounded-sm border-primarycolor focus:outline-green-600'
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='p-2 mt-2 w-full'>
                            <label htmlFor="phone" className='text-black font-medium'>Phone</label>
                            <input
                                type="tel"
                                placeholder='Phone'
                                id="phone"
                                className='rounded-sm border-primarycolor focus:outline-green-600'
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className='flex items-center justify-center flex-col lg:flex-row'>
                        <div className='p-2 mt-2 w-full'>
                            <label htmlFor="dob" className='text-black font-medium'>Date of Birth</label>
                            <input
                                type="date"
                                id="dob"
                                className='rounded-sm border-primarycolor focus:outline-green-600'
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='p-2 mt-2 w-full'>
                            <label htmlFor="gender" className='text-black font-medium'>Gender</label>
                            <select
                                className='w-full h-11 border rounded-sm border-primarycolor focus:outline-green-600'
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex items-center justify-center flex-col bg-neutral-200 m-2 rounded-md'>
                        <span className='font-bold text-xl my-4'> Address </span>
                        <div className='flex items-center justify-center flex-col lg:flex-row w-full'>
                            <div className='p-2 mt-2 w-full'>
                                <label htmlFor="country" className='text-black font-medium'>Country</label>
                                <input
                                    type="text"
                                    placeholder='country'
                                    id="country"
                                    className='rounded-sm border-primarycolor focus:outline-green-600'
                                    name="country"
                                    value={formData.address.country}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='p-2 mt-2 w-full'>
                                <label htmlFor="state" className='text-black font-medium'>State</label>
                                <input
                                    type="text"
                                    placeholder='state'
                                    id="state"
                                    className='rounded-sm border-primarycolor focus:outline-green-600'
                                    name="state"
                                    value={formData.address.state}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className='flex items-center justify-center flex-col lg:flex-row w-full'>
                            <div className='p-2 mt-2 w-full'>
                                <label htmlFor="district" className='text-black font-medium'>District</label>
                                <input
                                    type="text"
                                    placeholder='district'
                                    id="district"
                                    className='rounded-sm border-primarycolor focus:outline-green-600'
                                    name="district"
                                    value={formData.address.district}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='p-2 mt-2 w-full'>
                                <label htmlFor="pincode" className='text-black font-medium'>Pin Code</label>
                                <input
                                    type="text"
                                    placeholder='pincode'
                                    id="pincode"
                                    className='rounded-sm border-primarycolor focus:outline-green-600'
                                    name="pinCode"
                                    value={formData.address.pinCode}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center flex-col bg-neutral-200 m-2 rounded-md'>
                        <span className='font-bold text-xl my-4'> Qualifications </span>
                        <div className='flex items-center justify-center flex-col lg:flex-row w-full'>
                            <div className='p-2 mt-2 w-full'>
                                <label htmlFor="university" className='text-black font-medium'>University</label>
                                <input
                                    type="text"
                                    placeholder='university'
                                    id="university"
                                    className='rounded-sm border-primarycolor focus:outline-green-600'
                                    name="university"
                                    value={formData.qualification.university}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='p-2 mt-2 w-full'>
                                <label htmlFor="marks" className='text-black font-medium'>Marks</label>
                                <input
                                    type="text"
                                    placeholder='marks'
                                    id="marks"
                                    className='rounded-sm border-primarycolor focus:outline-green-600'
                                    name="marks"
                                    value={formData.qualification.marks}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className='flex items-center justify-center flex-col lg:flex-row w-full'>
                            <div className='p-2 mt-2 w-full'>
                                <label htmlFor="message" className='text-black font-medium'>Message</label>
                                <textarea
                                    placeholder='message'
                                    id="message"
                                    className='rounded-sm border-primarycolor focus:outline-green-600'
                                    rows={10}
                                    name="message"
                                    value={formData.qualification.message}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </form>
                <div className='flex items-center justify-end p-2 w-full'>
                    <div className='w-full lg:w-1/3'>
                        <Button
                            text="submit"
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