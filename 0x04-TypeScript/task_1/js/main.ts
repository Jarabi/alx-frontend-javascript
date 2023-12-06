interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any;
}

const t1: Teacher = {
    firstName: 'Melina',
    lastName: 'Burghall',
    fullTimeEmployee: true,
    location: 'Guangping',
    contract: true,
};

console.log(t1)