interface Course {
    id: string,
    attributes: CourseAttributes,
}
interface Professional {
    id: string,
    attributes: ProfessionalAttributes,
}

interface Student {
    id: string,
    attributes: StudentAttributes,
}

interface University {
    id: string,
    attributes: UniversityAttributes,
}

interface CourseAttributes {
    name: string,
    graduationType: string,
    specialisation: string,
    description: string,
    logo?: {
        data: {
            attributes: {
                url: string,
            }
        }
    }
}

enum GraduationType {
    "Diploma",
    "Polytechnic",
    "UG",
    "PG",
    "Certified Programs",
    "M.Phil",
    "PHD",
}




interface ProfessionalAttributes {
    name: string,
    courses?: {
        data: Course[]
    },
    job?: string,
    pfp: any,
    remarks: string,
    phoneNumber: string,
    email: string,
}

interface StudentAttributes {
    name: string,
    courses?: {
        data: Course[]
    },
    universities?: {
        data: University[]
    },
    pfp: any,
    remarks: string,
    phoneNumber: string,
    email: string,
}


interface UniversityAttributes {
    name: string,
    location: string,
    address: string,
    remarks: string,
}