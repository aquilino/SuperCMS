function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
        break;
        }
    }
    }

function check(form)/*function to check userid & password*/
    {
        /*the following code checkes whether the entered userid and password are matching*/
        if(form.username.value == "user" && form.password.value == "pass")
        {
            alert("welcome Admin",)/*displays success*/
            sleep(20000);
            window.open('index.html')/*opens the target page while Id & password matches*/
        }
        else
        {
        alert("Error Password or Username")/*displays error message*/
        }
    }