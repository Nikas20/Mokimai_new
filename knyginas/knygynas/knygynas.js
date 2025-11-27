let books = [

    { title: 'Knyga #1', price: 10.25 },

    { title: 'Knyga #2', price: 5.15 },

    { title: 'Knyga #3', price: 7.32 },

    { title: 'Knyga #4', price: 54.01 },

    { title: 'Knyga #5', price: 77.17 },

];

let numBook = (arr) => {
    arr.map((e, i) => {
        let n = i + 1
        console.log(`${n}. ${e.title}`);
    })

    return ""
}

// console.log(numBook(books));

let knyguKekis = (arr) => {
    return arr.length
}

// console.log(knyguKekis(books));

let addBook = (arr, onjekt) => {
    arr.push(onjekt)
    return arr
}

// console.log(addBook(books, { title: 'Knyga #6', price: 2.75 }));

let lastBook = (arr) => {
    return arr[arr.length - 1]
}

// console.log(lastBook(books));

let nuolaidaBook = (arr) => {
    return arr.filter(e => e.price > 10).map(e => `Knyga: ${e.title} Sena kaina: ${e.price} Pardavimo kaina: ${e.price * 0.75} Prideta nuolaida -25%`)

}

// console.log(nuolaidaBook(books));

let sortBook = (arr) => {
    return arr.sort((a, b) => a.price - b.price)
}

// console.log(sortBook(books));

let sortBookAZ = (arr, sort) => {
    switch (sort) {
        case "AZ":
            return arr.sort((a, b) => a.title.localeCompare(b.title))

        case "ZA":
            return arr.sort((a, b) => b.title.localeCompare(a.title))


        default:
            break;
    }

}

// console.log(sortBookAZ(books, "AZ"));
// console.log(sortBookAZ(books, "ZA"));

let filterBook = (arr) => {
    return arr.filter(e => e.price > 7.5)
}

// console.log(filterBook(books));
