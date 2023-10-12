var user = "vijay";
var hero = "Ironman";
var firstname = "Tony";
var lastname = "Stark";
var city = "New York";

class FirstClass{
    // property
    saymyname = "Vijay";
    constructor(){
        // empty
    }
    // methods
}

// console.log(user);

if(user == 'vijay'){
    // console.log("true");
};

// named export 
/* 
module.exports.user = user;
module.exports.hero = hero;
module.exports.firstname = firstname;
module.exports.lastname = lastname;
module.exports.city = city; 
*/


// default export 
/*
module.exports = {
    user : user,
    hero : hero,
    firstname : firstname,
    lastname : lastname,
    city : city
}
*/

// default export destructured values
module.exports = { user, hero, firstname, lastname, city, FirstClass }