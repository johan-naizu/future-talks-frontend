//TODO: MAKE IT RESPONSIVE

import Image from "next/image";
import profile from "/public/userLogo.svg";
import Button from "@/components/general/Button";
const Card = ({
    name,
    course,
    remarks,
    contact,
    email,
}: {
    name: string,
    course: string,
    remarks: string,
    contact: string,
    email: string,
}) => {
    return (
        <div className="w-full bg-white shadow-2xl shadow-primarycolor/40 border border-primarycolor h-full lg:h-72 rounded-3xl p-8 font-inherit flex flex-col relative">
            <div className="flex w-full gap-4">
                <Image
                    src={profile}
                    alt="profile"
                />
                <div className="flex flex-col w-full">
                    <span className="font-medium text-lg">{name}</span>
                    <span className="font-regular text-neutral-500">{course}</span>
                </div>
            </div>
            <div className="flex flex-col w-full justify-between mt-4 h-24">
                <span className="font-medium text-lg">Remarks</span>
                <span className="font-regular text-neutral-500 h-20 overflow-hidden text-ellipsis">{remarks}</span>
            </div>

            <div className="w-full mt-4 lg:mt-0 lg:absolute left-0 bottom-8 flex flex-col lg:flex-row lg:px-8 gap-4 ">
                <div className="w-full lg:w-5/12 xl:w-1/3 text-xs">
                    <Button
                        text={contact}
                        rounded
                        invert
                        href={`tel:${contact}`}
                    />
                </div>
                <div className="w-full lg:w-7/12 xl:w-2/3 text-xs">
                    <Button
                        text={email}
                        rounded
                        href={`mailto:${email}`}
                    />
                </div>
            </div>
        </div>
    )
}

export default Card;