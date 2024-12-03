document.getElementById('form1').addEventListener("submit", function(event) {
    event.preventDefault()

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const bday = document.getElementById('bday').value;
    const email = document.getElementById('email').value;

    const pang = document.getElementById('pang').checked;
    const choc = document.getElementById('choc').checked;
    const tar = document.getElementById('tar').checked;

    const hotelRad = document.getElementsByName('hotel');
    var hotel = null;
    for (var i = 0; i < hotelRad.length; i++) {
        if (hotelRad[i].checked) {
            hotel = hotelRad[i].value;
            break
        }
    }

    const formData = {
        firstName: fname,
        lastName: lname,
        birthday: bday,
        userEmail: email,

        panglao: pang,
        chocolateHils: choc,
        tarsier: tar,

        accomodation: hotel
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
})