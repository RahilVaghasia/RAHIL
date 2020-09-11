let person = [
    { 
        name : "rahil",
        age : 21,
        country : "India",
        hobbies : ["yoga","reading","cooking"]
    },
    {
        name : "jhonas",
        age : 23,
        country : "India",
        hobbies : ["singing,","gaming","swimming"]
    },
    {
        name : "jessica",
        age : 31,
        country : "united kingdom",
        hobbies : ["trekking","karoke","tennis"]
    },
    {
        name : "priyanka",
        age : 32,
        country : "united states of america",
        hobbies : ["drawing","dance","cooking"]
    }
];
function age(){
    for(let i=0;i<person.length;i++){
        if(person[i].age < 30){
            console.log( "Name : " + person[i].name );
            console.log("Age : " + person[i].age );
            console.log("Country : " + person[i].country );
         for(let j =0; j< person.length;j++){
            console.log("Hobby is " + person[j].hobbies[j]);
        }
    }
}
}
age();

