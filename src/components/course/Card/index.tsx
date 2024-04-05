"use client";

import { motion } from 'framer-motion';
import Button from '@/components/general/Button';
import { CourseAttributes } from '@/types';
import { useRouter } from 'next/navigation';

const Card = ({
    id,
    attributes

}: {
    id: string,
    attributes: CourseAttributes,
}) => {
    const router = useRouter();
    return (
        <motion.div
            className="w-full bg-white shadow-2xl shadow-primarycolor/40 border border-primarycolor h-full lg:h-72 rounded-3xl p-6 font-inherit flex flex-col relative"
            layoutId={`course-${id}`}
        >
            <div className='flex flex-col'>
                <span className='font-regular text-md text-nuetral-300'>{attributes.graduationType}</span>
                <span className='font-bold text-xl'>{attributes.name}</span>
                <span className='font-bold text-xl'>{attributes.courseType}</span>
            </div>
            <div className='my-2 h-full overflow-hidden py-2 text-ellipsis overflow-hidden'>
                <div className='w-full h-full text-regular text-neutral-500 text-ellipsis overflow-hidden'>
                    {attributes.description.slice(0, 85)}...
                </div>
            </div>
            <div>
                <Button
                    rounded
                    text='View Course'
                    onClick={() => router.push(`/courses/${id}`)}
                />

            </div>
        </motion.div>
    )
}


export default Card;