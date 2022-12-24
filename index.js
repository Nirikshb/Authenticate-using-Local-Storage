//creating a random token
// npm i @supercharge/strings
// const Str = require('@supercharge/strings')

// const random = Str.random() 
(document.getElementById('ind'));

const formm = document.getElementById('form')
    formm.addEventListener('submit',(event) =>{
    event.preventDefault()
    // console.log("Hi");

var fname = document.getElementById("fname").value;
var email = document.getElementById("email").value;
var pass = document.getElementById("password");
var cpass = document.getElementById("cpassword");
// console.log(fname);
// console.log(email);checking

var user = {
    fname : fname,
    email : email,
    pass : pass,
};
 
//strigify-- rules of local storage to be able to access/read data
var json = JSON.stringify(user);
localStorage.setItem("user", json)//to set data in local storage
// var name = user.name.

    // console.log(obj);
    // fname.innerHTML = 
    // console.log(obj.fname)
// console.log("works??");to check

//getting item in application
const user1 = localStorage.getItem('user')
console.log(user1);

// var user = localStorage.getItem(user);

var data = JSON.parse(user);

//print data on profile page
var fname = document.getElementById('name')
var email = document.getElementById('mail')
var pass = document.getElementById('passwrd')
})
//entering the said data of user
// console.log(document.querySelector('#ind'))
console.log(data.fname);
console.log(user1.fname);
// name.innerHTML = data.fname
// console.log(name);
document.getElementById('ind').innerHTML = data.fname;
//logout function
// function logout(){
//     logout.addEventListener(click, () =>{
//         localStorage.clear()
//         console.log("clear");
//     })
// }

function renderData(){
    // event.preventDefault()
    // console.log("work");
    //retrieves items in the localStorage
        console.log("retrieve records");
       
    }

// setToken (token : string) :  void {
//     return  localStorage.setItem('token', token)
// }

// getToken() :  string {
//    return localStorage.getItem('token');
// }

// if(user == null)
// {
//     result.innerHTML = "Error : All fields are mandatory";
// }
// else if (fname == data.fname && password == data.password)
// {
//     result.innerHTML = "Successfully Signed Up!";
// }