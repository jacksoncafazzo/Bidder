//Business Logic

function Jobber(firstName, lastName, age, city, state, typesOfJobs, expertise) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.city = city;
  this.state = state;
  this.typesOfJobs = typesOfJobs;
  this.expertise = expertise;
}


//User Logic

$(document).ready(function(){
  $("form#jobber-signUp").submit(function(event) {
    var firstName = $("input#first-name").val();


    $("span#jobber-name").text(firstName);
  event.preventDefault();
  });
});
