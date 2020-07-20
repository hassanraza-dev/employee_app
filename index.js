console.log('firebase.......>',firebase);


function login()
{
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(userResponse) {
        const userId = userResponse.user.uid
        localStorage.setItem('userId', userId)
        swal({
            title: "Successfully Login!",
            text: "You clicked the button!",
            icon: "success",
            button: "OK!",
          });
        location.replace('src/Employees/employees.html')
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      })
}