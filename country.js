let person = [
    { 
        name : "rahil",
        age : 21,
        country : "India",
        hobbies : ["yoga","reading","cooking"]
    },
    {
        name : "rohit",
        age : 23,
        country : "India",
        hobbies : ["singing,","gaming","swimming"]
    },
    {
        name : "jessica",
        age : 21,
        country : "United Kingdom",
        hobbies : ["trekking","karoke","tennis"]
    },
    {
        name : "jhonas",
        age : 28,
        country : "United States Of America",
        hobbies : ["football","gaming","travelling"]
    }
];
function state(){
    for(let i=0;i<person.length;i++){
        if(person[i].country == "India"){
            console.log( "Name : " + person[i].name );
            console.log("Age : " + person[i].age );
            console.log("Country : " + person[i].country );
         for(let j =0; j< person.length;j++){
            console.log("Hobby is " + person[j].hobbies[j]);

        }
    }
}
}
state();
