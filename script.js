document.getElementById("loginform").addEventListener('submit',function(event){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const emailError = document.getElementById('emailError');

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const passwordError = document.getElementById('passwordError');

    let valid = true;

                if (!emailPattern.test(email)){
                    emailError.textContent = "Please enter a valid email address";
                    valid = false;
                    emailError.style.display = 'flex';
                }
                else {
                    emailError.style.display = 'none';
                }

                if (!passwordPattern.test(password)){
                    passwordError.textContent = "Password must contain atleast an uppercase letter, three digits, a special character(@, #, $ etc) and be atleast 8 characters long";
                    passwordError.style.display = 'flex';
                    valid = false;
                }else {
                    passwordError.style.display = 'none';
                }

                if(!valid){
                    event.preventDefault();
                }

});


  
