interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Quint',
    lastName: 'Talks',
    age: 46,
    location: 'Oodweyne'
}

const student2: Student = {
    firstName: 'Wanids',
    lastName: 'Hovenden',
    age: 21,
    location: 'Kapunduk'
}

const studentsList: Student[] = [student1, student2]

const studentTable = () => {
    const table = document.createElement('table')
    const thead = document.createElement('thead')
    const theadRow = thead.insertRow()
    const headerInfo = ['First Name', 'Location']

    for (let i = 0; i < headerInfo.length; i += 1) {
        const th = document.createElement('th')
        th.textContent = headerInfo[i]
        theadRow.appendChild(th)
    }

    thead.appendChild(theadRow)
    table.appendChild(thead)

    const tbody = document.createElement('tbody')

    studentsList.forEach((student) => {
        const row = tbody.insertRow()
        const nameCell = row.insertCell()
        const locationCell = row.insertCell()

        nameCell.textContent = student.firstName
        locationCell.textContent = student.location

        tbody.appendChild(row)
    })

    table.appendChild(tbody)
    document.body.appendChild(table)
}

studentTable()