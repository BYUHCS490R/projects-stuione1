document.getElementById("myform").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pass").value.trim();
    const age = document.getElementById("age").value;

   
    if (!fullname) {
        alert("Full name is required.");
        return;
    }
    if (!email) {
        alert("Email is required.");
        return;
    }
    if (!password) {
        alert("Password is required.");
        return;
    }

   
    if (age < 18 || age > 80) {
        alert("Age must be between 18 and 80.");
        return;
    }

    
    const formData = {
        name: fullname,
        email: email,
        password: password,
        age: age
    };

    console.log(formData); 

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true); 

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerText = response.message;

        
            document.getElementById("myform").reset();
            document.getElementById("myform").style.opacity = "0.5";
        }
    };

    xhr.send();
});
