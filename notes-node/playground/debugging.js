const person = { name: 'Andrew' };

person.age = 25;

//  nodemon --inspect-brk ./app.js read --title secret2
debugger;

person.name = 'Mike';

console.log(JSON.stringify(person));
