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

console.log(d1)