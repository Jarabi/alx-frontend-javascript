interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    readonly numberOfReports: number;
}

const d1: Directors = {
    firstName: 'Melina',
    lastName: 'Burghall',
    fullTimeEmployee: true,
    location: 'Guangping',
    numberOfReports: 17,
};

type printTeacherFunction = (firstName: string, lastName: string) => void

const printTeacher: printTeacherFunction = (firstName:string, lastName:string) => {
    console.log(`${firstName.substring(0, 1)}. ${lastName}`);
}

printTeacher('John', 'Doe')