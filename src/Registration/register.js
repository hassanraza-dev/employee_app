
console.log(firebase)

function signup()
{
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const company = document.getElementById('company').value
    const password = document.getElementById('password').value
    const cpassword = document.getElementById('c-password').value

    // console.log(name,email,company,password)

    if(cpassword == password){ 

        localStorage.setItem('username' , name)

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function (userResponse){
        const userId = userResponse.user.uid
   

    // firebase.firestore().collection('users').add({
    firebase.firestore().collection('users').doc(userId).set({
        name,
        email,
        company

        
        
    }).then(function() {
        
        swal({
            title: "Successfully Registered!",
            text: "You clicked the button!",
            icon: "success",
            button: "OK!",
          });
    }).catch(function(error) {
        var errorMessage = error.message;
        console.log(error)
        alert(errorMessage)
    })
})
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert(errorMessage)
      });
    
    
}
else{
    alert('Password is not same')
}
}