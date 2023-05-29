const TableBussines = (title = "", amountPeople = 0) => {
    if (title.trim().length <= 0) throw new Error("Title cannot be blank or null.");

    if (amountPeople <= 0) throw new Error("Number of people cannot be less than or equal to zero");
}

export default TableBussines;