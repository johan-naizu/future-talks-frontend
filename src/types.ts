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
    // specialisation: string,
    courseType: CourseType,
    description: string,
    logo?: {
        data: Picture,
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

enum CourseType {
    "BTech",
    "Bsc",
    "BA",
    "MTech",
    "MS",
    "MBA",
    "BPT",
    "MPT",
}



interface ProfessionalAttributes {
    name: string,
    courses?: {
        data: Course[]
    },
    job?: string,
    pfp: {
        data: Picture[],
    },
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
    pfp: {
        data: Picture[],
    }
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


interface Picture {
    id: string,
    attributes: {
        url: string,
    }
}