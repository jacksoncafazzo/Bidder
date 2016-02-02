// Business Logic

function Jobber(firstName, lastName, zipcode, jobInterests, expertise) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.zipcode = zipcode;
  this.jobInterests = jobInterests;
  this.expertise = expertise;
}


// User Logic

$(document).ready(function(){
  $("form#jobber-signUp").submit(function(event) {
    var firstName = $("input#first-name").val();


    $("span#jobber-name").text(firstName);
  event.preventDefault();
  });
});
