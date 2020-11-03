var mName;
var mEmail;
var mPassword;
var mRepeat;
var mAge;
var mPhone;
var mAddress;
var mCity;
var mCode;
var mId;

window.onload = function() {
    var btn = document.getElementById("submit");
    var name = document.getElementById("fname");
    var email = document.getElementById("email");
    var pass = document.getElementById("password");
    var repeat = document.getElementById("repeat-pass");
    var age = document.getElementById("age");
    var phone = document.getElementById("phone");
    var address = document.getElementById("address");
    var city = document.getElementById("city");
    var zcode = document.getElementById("zcode");
    var idNumber = document.getElementById("id");
    var title = document.getElementById("title")


    /*Title with name*/
    name.addEventListener('focus', function() {
        name.addEventListener('keydown', function() {
            val = name.value;
            title.innerHTML = val;
        })

    });

    /*Validate full name onblur event. i: case sensitive*/
    name.addEventListener('blur', function() {
        if (!(/^(?:[-A-Z]+ )+[-A-Z]+$/i.test(name.value))) {
            mName = document.getElementById("lname").innerHTML = "The full name must be longer than 6 characters long and must contain at least one white space" + '\n';

        } else {
            mName = "Full Name: " + name.value + '\n';
        }
    });


    /*Validate email onblur event*/
    email.addEventListener('blur', function() {
        if (!(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email.value))) {
            mEmail = document.getElementById("lemail").innerHTML = "The email address is invalid" + '\n';

        } else {
            mEmail = "Email: " + email.value + '\n';
        }
    });

    /*Validate password onblur event*/
    pass.addEventListener('blur', function() {
        if (!(/^[a-z0-9]{6,}$/.test(pass.value))) {
            mPassword = document.getElementById("lpassword").innerHTML = "The password must consist of letters and numbers" + '\n';

        } else {
            mPassword = "Password: " + password.value + '\n';
        }
    });


    /*Validate repeat password onblur event*/
    repeat.addEventListener('blur', function() {
        if (!(pass.value === repeat.value)) {
            mRepeat = document.getElementById("lrepeat").innerHTML = "Passwords don't match" + '\n';

        } else {
            mRepeat = "Repeat Password: " + repeat.value + '\n';
        }
    });

    /*Validate age onblur event*/
    age.addEventListener('blur', function() {
        if (!((age.value % 1 === 0) && (age.value >= 18))) {
            mAge = document.getElementById("lage").innerHTML = "Age must be an integer number and greater than 18" + '\n';

        } else {
            mAge = "Age: " + age.value + '\n';
        }
    });

    /*Validate phone onblur event*/
    phone.addEventListener('blur', function() {

        if (!(/^\d{7,}$/.test(phone.value))) {
            mPhone = document.getElementById("lphone").innerHTML = "The number must be at least 7 digits, do not accept spaces, hyphens, or parentheses" + '\n';

        } else {
            mPhone = "Phone: " + phone.value + '\n';
        }
    });

    /*Validate address onblur event*/
    address.addEventListener('blur', function() {
        if (!(/^(?:[-A-Z]+ )+[-A-Z\s0-9]+$/i.test(address.value))) {
            mAddress = document.getElementById("laddress").innerHTML = "The address must be at least 5 characters long, with letters, numbers, and a space in between"
        } else { mAddress = address.value + '\n'; }
    });


    /*Validate city onlur event*/
    city.addEventListener('blur', function() {
        if (!(/^[A-Za-z]{3,}$/).test(city.value)) {
            mCity = document.getElementById("lcity").innerHTML = "The city must be at least 3 characters long and no number";
        } else { mCity = city.value + '\n'; }
    });

    /*Validate Zip Code onblur event*/
    zcode.addEventListener('blur', function() {
        if (!(/^[A-Za-z0-9]{3,}$/).test(zcode.value)) {
            mCode = document.getElementById("lcode").innerHTML = "The Zip Code must be at least 3 characters";
        } else { mCode = code.value + '\n'; }
    });

    /*Validate ID Number onblur event*/
    idNumber.addEventListener('blur', function() {
        if (!(/^\d{7,8}$/).test(idNumber.value)) {
            mId = document.getElementById("lid").innerHTML = "The ID number must be a 7- or 8-digit number";
        } else { mId = idNumber.value + '\n'; }
    });

    /*For full name: Clean message onfocus event */
    name.addEventListener('focus', function() {
        mName = document.getElementById("lname").innerHTML = "";
    });

    /*For email: Clean message onfocus event */
    email.addEventListener('focus', function() {
        mEmail = document.getElementById("lemail").innerHTML = "";
    });

    /*For password: Clean message onfocus event */
    pass.addEventListener('focus', function() {
        mPassword = document.getElementById("lpassword").innerHTML = "";
    });

    /*For repeat password: Clean message onfocus event */
    repeat.addEventListener('focus', function() {
        mRepeat = document.getElementById("lrepeat").innerHTML = "";
    });

    /*For age: Clean message onfocus event */
    age.addEventListener('focus', function() {
        mAge = document.getElementById("lage").innerHTML = "";
    });

    /*For phone: Clean message onfocus event */
    phone.addEventListener('focus', function() {
        mPhone = document.getElementById("lphone").innerHTML = "";
    });

    /*For address: Clean message onfocus event */
    address.addEventListener('focus', function() {
        mAddress = document.getElementById("laddress").innerHTML = "";
    });

    /*For city: Clean message onfocus event */
    city.addEventListener('focus', function() {
        mCity = document.getElementById("lcity").innerHTML = "";
    });

    /*For zcode: Clean message onfocus event */
    zcode.addEventListener('focus', function() {
        mCode = document.getElementById("lcode").innerHTML = "";
    });

    /*For id number: Clean message onfocus event */
    idNumber.addEventListener('focus', function() {
        mId = document.getElementById("lid").innerHTML = "";
    });

    btn.addEventListener('click', function() {
        alert(mName + mEmail + mPassword + mRepeat + mAge + mPhone + mAddress + mCity + mCode + mId);
    });
}