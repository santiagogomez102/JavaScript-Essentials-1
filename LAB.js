"use strict"

let showContact = function(list, index) {
    if (list instanceof Array && list[index]) {
        alert(`${list[index].name} / ${list[index].phone} / ${list[index].email}`);
    }
}
let showAllContacts = function(list) {
    if (list instanceof Array) {
        for (let contact of list) {
            alert(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    }
}
let addNewContact = function(list, name, phone, email) {
    if (list instanceof Array && name && phone && email) {
        list.push({
            name: name,
            phone: phone,
            email: email
        })
    }
}
let sortBy = function(list, type) {
    if (list instanceof Array && type) {
        switch (type) {
            case "1":
                list.sort((n1, n2) => (n1.name < n2.name) ? -1 : (n1.name > n2.name) ? 1 : 0);
                break;
            case "2":
                list.sort((n1, n2) => (n1.phone < n2.phone) ? -1 : (n1.name > n2.phone) ? 1 : 0);
                break;
            case "3":
                list.sort((n1, n2) => (n1.email < n2.email) ? -1 : (n1.email > n2.email) ? 1 : 0);
                break;
            default: alert("Error with option input");
        }
    }
}

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

while (true) {

    let last = contacts.length - 1;

    let option = prompt("Select an action: 1. Show a contact 2. Show all contacts 3. Add new contact 4. Sort contacts 5. Exit program", "1, 2, 3, 4, 5");
    if (option === "5"){
        break;
    }
    switch (option) {
        case "1":
            let secOption = prompt(`Input index from 0 to ${last}`);
            showContact(contacts, secOption);
            break;
        case "2":
            showAllContacts(contacts);
            break;
        case "3": 
            let newName = prompt("Input the new contact name:", "Name and surname");
            newName = newName ? newName : "NaN";
            let newPhone = prompt("Input the new phone number:", "Phone number");
            newPhone = newPhone ? newPhone : "NaN";
            let newEmail = prompt("Input the new email address:", "Email address");
            newEmail = newEmail ? newEmail : "NaN";
            if (newName == "NaN" || newPhone == "NaN" || newEmail == "NaN"){
                alert("Contact not added");
            } else {
                addNewContact(contacts, newName, newPhone, newEmail)
                last = contacts.length - 1;
                alert(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
            }
            break;
        case "4":
            let sortType = prompt("Sort by: 1. Name 2. Phone 3. Email", "1, 2, 3");
            sortBy(contacts, sortType);
            break;
        default: alert("Error with option input");
    }
}