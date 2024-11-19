document.getElementById('form1').addEventListener("submit", function(event) {
    event.preventDefault()

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const bday = document.getElementById('bday').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const genderRad = document.getElementsByName('gender');
    var gender = null;
    for (var i = 0; i < genderRad.length; i++) {
        if (genderRad[i].checked) {
            gender = genderRad[i].value;
            break
        }
    }

    const country = document.getElementById('country').value;
    const bio = document.getElementById('bio').value;

    const uname = document.getElementById('username').value;
    const pass = document.getElementById('pass').value;
    const confPass = document.getElementById('pass2').value;

    const termsAndCond = document.getElementById('tac').checked;
    const texts = document.getElementById('texts').checked;
    const emails = document.getElementById('emails').checked;

    var allowSend = true;

    if (pass.length < 8){
        alert('Password must be 8 or more characters!');
        allowSend = false;
    } else if (pass != confPass) {
        alert('Passwords do not match!')
        allowSend = false;
    }

    if (fname == "") {
        alert('Please fill out your first name.')
        allowSend = false;
    }
    if (lname == "") {
        alert('Please fill out your last name.')
        allowSend = false;
    }
    if (uname == "") {
        alert('Please provide a username.')
        allowSend = false;
    }

    if (allowSend) {
        const formData = {
            firstName: fname,
            lastName: lname,
            birthday: bday,
            phoneNumber: phone,
            userEmail: email,
            userGender: gender,
            userCountry: country,
            userBio: bio,
            
            username: uname,
            password: pass,
            confPassword: confPass,

            agreed: termsAndCond,
            allowTexts: texts,
            allowEmails: emails
        };

        const xhr = new XMLHttpRequest();
        xhr.open("GET", "submit.json", true);
        xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.response);
                document.getElementById('headmessage').innerHTML = response.message;
                document.getElementById('form1').innerHTML = "";
            } else if (xhr.readyState === 4) {
                alert('Error submitting form.');
            }
        };
        xhr.send(JSON.stringify(formData));

        console.log(formData);
    }
})