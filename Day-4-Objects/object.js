const details = {
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  }
//   console.log(details.name)
//   console.log(details.address.street)
//   console.log(details.company.name)
//  console.log(Object.keys(details));
//  console.log(Object.values(details));

let objectArray  = Object.keys(details)
for(i=0; i<Object.keys(details).length; i++){
    console.log(details);
}
