//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times

var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//Hide hints
$("form span").hide();

function arePasswordMatching() {
    return $password.val() === $confirmPassword.val();
}

function isPasswordValid() {
    return $password.val().length > 8;
}

function canSubmit() {
    return isPasswordValid() && arePasswordMatching();
}

function passwordEvent(){
    //Find out if password is valid
    if(isPasswordValid()) {
        //Hide hint if valid
        $password.next().hide();
    } else {
        //else show hint
        $password.next().show();
    }
}

function confirmPasswordEvent() {
    //Find out if password and confirmation match
    if(arePasswordMatching()) {
        //Hide hint if match
        $confirmPassword.next().hide();
    } else {
        //Show hint
        $confirmPassword.next().show();
    }
}

function enableSubmitEvent() {
    $("#submit").prop("disabled", !canSubmit());
}

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent());


//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent());

enableSubmitEvent();


