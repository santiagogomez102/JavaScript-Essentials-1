"use strict"

let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
];

let newContact = {
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca"
}

contacts.push(newContact);

let newName = prompt("Input the new contact name:", "Name and surname");
let newPhone = prompt("Input the new phone number:", "Phone number");
let newEmail = prompt("Input the new email address:", "Email address");

newContact = {
    name: newName,
    phone: newPhone,
    email: newEmail
}

contacts.push(newContact);

let last = contacts.length - 1;
console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);