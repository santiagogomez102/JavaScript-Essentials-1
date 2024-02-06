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

    let option = prompt("Select an action: 1. Show first contact 2. Show last contact 3. Show all contacts 4. Add new contact 5. Exit program", "1, 2, 3, 4, 5");
    if (option === "5"){
        break;
    }
    switch (option) {
        case "1": alert(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`); break;
        case "2": alert(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`); break;
        case "3": 
            for (let i = 0; i <= (contacts.length - 1) ; i++){
                alert(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
            }
            break;
        case "4":
            let newName = prompt("Input the new contact name:", "Name and surname");
            newName = newName ? newName : "NaN";
            let newPhone = prompt("Input the new phone number:", "Phone number");
            newPhone = newPhone ? newPhone : "NaN";
            let newEmail = prompt("Input the new email address:", "Email address");
            newEmail = newEmail ? newEmail : "NaN";
            if (newName == "NaN" || newPhone == "NaN" || newEmail == "NaN"){
                alert("Contact not added");
            } else {
                let newContact = {
                    name: newName,
                    phone: newPhone,
                    email: newEmail
                }
                contacts.push(newContact);
                last = contacts.length - 1;
                alert(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
            }
            break;
        default: alert("Error with option input");
    }

}