document.getElementById('form1').addEventListener('submit', function(event) {
    event.preventDefault();
    // alert("Hello");
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;

    const formData = {
        firstName: fname,
        lastName: lname,
        password: document.getElementById('pass').value,
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // alert('Form submitted successfully.');
            const response = JSON.parse(xhr.response);
            document.getElementById('message').innerHTML = response.message;
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));

    console.log(formData);
})