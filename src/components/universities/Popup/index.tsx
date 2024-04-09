import Button from "@/components/general/Button";
import { neueRegrade } from "@/fonts";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { motion } from 'framer-motion';
import { useCourseContext } from "@/hooks/useCourseContext";

const Popup = ({
    setShow
}: {
    setShow: Dispatch<SetStateAction<boolean>>
}) => {
    const router = useRouter();
    const { setCanShowPopup } = useCourseContext();

    return (
        <motion.div
            className={"w-screen h-screen fixed top-0 left-0 bg-black/20 z-[100000000] flex items-center justify-center " + neueRegrade.className}
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
        >
            <div className="border border-2 border-primarycolor rounded-2xl w-96 h-64 bg-white p-8 relative flex flex-col items-center justify-center gap-10">
                <p className="text-center text-lg font-semibold"> Saw something interesting? </p>
                <span className="bg-black lg:bg-transparent absolute top-2 right-2 rounded-full z-[10000000000]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white lg:text-black cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        onClick={() => {
                            setShow(false);
                            setCanShowPopup(false);
                        }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </span>
                <span className="w-3/4">
                    <Button
                        onClick={() => router.push("/apply")}
                        text="Apply Now"
                        invert
                    />
                </span>
            </div>
        </motion.div>
    )
}

export default Popup;