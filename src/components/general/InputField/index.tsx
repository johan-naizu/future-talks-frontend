const InputField = ({
    type,
    placeholder,
    value,
    onChange,
    name,
    label,
    selectData,
}: {
    type: string,
    placeholder?: string,
    value: string | undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void,
    name: string,
    label: string,
    selectData?: { key: string, value: string | undefined }[]
}) => {
    return (
        <div className='p-2 mt-2 w-full'>
            {
                ["text", "email", "tel", "date"].includes(type) && (
                    <>
                        <label htmlFor={name} className='text-black font-medium'>{label}</label>
                        <input
                            type={type}
                            placeholder={placeholder}
                            id={name}
                            className='rounded-sm border-primarycolor focus:outline-green-600'
                            name={name}
                            value={value}
                            onChange={onChange}
                        />
                    </>
                )
            }
            {
                type === "textarea" && (
                    <>
                        <label htmlFor={name} className='text-black font-medium'>{label}</label>
                        <textarea
                            placeholder={placeholder}
                            id={name}
                            className='rounded-sm border-primarycolor focus:outline-green-600'
                            rows={10}
                            name={name}
                            value={value}
                            onChange={onChange}
                        />
                    </>
                )
            }
            {
                type === "select" && (
                    <>
                        <label htmlFor={name} className='text-black font-medium'>Gender</label>
                        <select
                            className='w-full h-11 border rounded-sm border-primarycolor focus:outline-green-600'
                            name={name}
                            id={name}
                            value={value}
                            onChange={onChange}
                        >
                            {
                                selectData?.map(({ key, value }) => (
                                    <option key={key} value={value}>{key}</option>
                                ))
                            }
                        </select>
                    </>
                )
            }
        </div>
    )
}

export default InputField;