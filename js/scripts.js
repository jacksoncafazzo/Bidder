//Business Logic

function Jobber(firstName, lastName, age, city, state, jobInterests, expertise) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.city = city;
  this.state = state;
  this.jobInterests = jobInterests;
  this.expertise = expertise;
}


//User Logic

$(document).ready(function(){
  $("form#jobber-signUp").submit(function(event) {
    var firstName = $("input#first-name").val();


  event.preventDefaul();
  });
});
