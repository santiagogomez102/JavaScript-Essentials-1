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

while (true) {

    let last = contacts.length - 1;

    let option = prompt("Select an action: 1. Show a contact 2. Show all contacts 3. Add new contact 4. Exit program", "1, 2, 3, 4");
    if (option === "4"){
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
        default: alert("Error with option input");
    }

}

function showContact(list, index) {
    if(list instanceof Array) {
        alert(`${list[index].name} / ${list[index].phone} / ${list[index].email}`);
    } else {
        alert(`Parameter error`);
    }
}

function showAllContacts(list) {
    if(list instanceof Array) {
        for (let i = 0; i <= (list.length - 1) ; i++){
            alert(`${list[i].name} / ${list[i].phone} / ${list[i].email}`);
        }
    } else {
        alert(`Parameter error`);
    }
}

function addNewContact(list, name, phone, email) {
    let newContact = {
        name: name,
        phone: phone,
        email: email
    }
    list.push(newContact);
}