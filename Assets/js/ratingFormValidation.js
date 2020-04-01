 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDbLZGox2ft1_SyVWiEaDRRv5sBrs6uZU4",
    authDomain: "rating-form.firebaseapp.com",
    databaseURL: "https://rating-form.firebaseio.com",
    projectId: "rating-form",
    storageBucket: "rating-form.appspot.com",
    messagingSenderId: "755218624301",
    appId: "1:755218624301:web:39dc73a494e0a41a1b2da4",
    measurementId: "G-YPCCXCMNFL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // Reference Message Collection
  var messageRef = firebase.database().ref('messages');

$(document).ready(function(e){
    $("#js-review-submit").click(function(e){
        // Initializing Variables With form element values
        var firstName = $("#reviewFirstName").val();
         if(firstName == "") {
            $("#nameError").show();
            $("#nameError").text("Please enter your first name.");
            $("#reviewFirstName").focus();
            e.preventDefault();
         } else if($(".rating input[type=radio]:checked").length == 0) {
            $("#starRatingError").show();
            $("#starRatingError").text("Please choose a rating");
            $(".rating").focus(); 
            e.preventDefault();
         } else {
            $("#nameError").hide();
            $("#starRatingError").hide();
            console.log("Form Submitted");
            var firname = $("#reviewFirstName").val();
            var lasname = $("#reviewLastName").val();
            var ratingInput = $(".rating input[type=radio]:checked").val();
            var reviewField = $("#reviewTextArea").val();
            console.log(firname);
            console.log(lasname);  
            console.log(ratingInput);
            console.log(reviewField);
            saveMessage(firname, lasname, ratingInput, reviewField);
         }
    });
});

// Function to save message to firebase
    function saveMessage(firname, lasname, ratingInput, reviewField) {
        var newMessageRef = messageRef.push();
        newMessageRef.set({
            firname: firname,
            lasname: lasname,
            ratingInput: ratingInput,
            reviewField: reviewField,
        });
    }