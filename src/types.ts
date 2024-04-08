export interface Course {
    id: string,
    attributes: CourseAttributes,
}
export interface Professional {
    id: string,
    attributes: ProfessionalAttributes,
}

export interface Student {
    id: string,
    attributes: StudentAttributes,
}

export interface University {
    id: string,
    attributes: UniversityAttributes,
}

export interface CourseAttributes {
    name: string,
    graduationType: GraduationType,
    // specialisation: string,
    courseType: CourseType,
    description: string,
    requirements?: string,
    logo?: {
        data: Picture,
    }
    students?: {
        data: Student[]
    }
}

export type GraduationType =
    "Diploma" |
    "Polytechnic" |
    "UG" |
    "PG" |
    "Certified Programs" |
    "M.Phil" |
    "PHD";

export type CourseType =
    "BTech" |
    "Bsc" |
    "BA" |
    "MTech" |
    "MS" |
    "MBA" |
    "BPT" |
    "MPT";




export interface ProfessionalAttributes {
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

export interface StudentAttributes {
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


export interface UniversityAttributes {
    name: string,
    location: string,
    address: string,
    remarks: string,
    students: {
        data: Student[]
    }
}


export interface Picture {
    id: string,
    attributes: {
        url: string,
    }
}

export interface ApplicationForm {
    course?: string,
    name: string,
    email: string,
    dob: string,
    gender: "Male" | "Female" | "Other",
    phoneNumber: string,
    address: {
        country: string,
        state: string,
        district: string,
        pinCode: string,
    },
    qualification: {
        university: string,
        marks: string,
        message: string,
    }

}