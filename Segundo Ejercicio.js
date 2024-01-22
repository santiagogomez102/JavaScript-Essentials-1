"use strict"

let ticket = {
    from: "Bogota",
    to: "Chia",
    price: 10000
};

console.log(`Ticket from: ${ticket.from}`);
console.log(`Ticket to: ${ticket.to}`);
console.log(`Ticket price: ${ticket.price}`);

let person = {};

person.name = "Santiago";
person.surname = "Gomez";

console.log(`${person.name} ${person.surname}`);

let books = [
    {
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        pages: 460
    },
    {
        title: "Programming JavaScript Applications",
        author: "Eric Elliot",
        pages: 254
    },
    {
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        pages: 352
    }
];

books.push({
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
});

console.log(books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);
console.log(books[3].title);

console.log(books.slice(-2));

books.shift();

console.log(books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);

let totalPages = books[0].pages + books[0].pages + books[0].pages;
console.log(`Pages: ${totalPages}`);