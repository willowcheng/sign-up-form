//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times

//Hide hints
$("form span").hide();

var $password = $("#password");
var $confirmPassword = $("#confirm_password");

function passwordEvent(){
    //Find out if password is valid
    if($password.val().length > 8) {
        //Hide hint if valid
        $password.next().hide();
    } else {
        //else show hint
        $password.next().show();
    }
}

function confirmPasswordEvent() {
    //Find out if password and confirmation match
    if($password.val() === $confirmPassword.val()) {
        //Hide hint if match
        $confirmPassword.next().hide();
    } else {
        //Show hint
        $confirmPassword.next().show();
    }


}

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent);


//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);


