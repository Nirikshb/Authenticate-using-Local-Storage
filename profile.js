// //getting item in application
// const user1 = localStorage.getItem('user')
// console.log(user1);

// var data = JSON.parse(user1);

// var name = document.getElementById('ind').innerText = "Full Name : " + data?.fname
// var mail = document.getElementById('mail').innerHTML = "Email : " + data.email
// var mail = document.getElementById('profilepass').innerHTML = "Password : " + data.pass
const nameSpan = document.getElementById('name');
const emailSpan = document.getElementById('email');
const logoutBtn = document.getElementById('logout-btn');

// Check if user is logged in
const user = JSON.parse(localStorage.getItem('user'));
if (user && user.accessToken) {
  nameSpan.innerText = user.name;
  emailSpan.innerText = user.email;
} else {
  // Redirect to signup page
  window.location.href = '/signup';
}

logoutBtn.addEventListener('click', () => {
  // Clear local storage and redirect to signup page
  localStorage.removeItem('user');
  window.location.href = '/signup';
});
