console.log('firebase------->',firebase)
getUser()
getCompany()
function getUser()
{
    const userId = localStorage.getItem('userId')
    

    firebase.firestore().collection('users').doc(userId).get()
    .then(function(name){
       
        document.getElementById('user').innerHTML = name.data().name
    })
    .catch(function(error){
        console.log(error)
    })
}

function getCompany()
{
    const userId = localStorage.getItem('userId')
    

    firebase.firestore().collection('users').doc(userId).get()
    .then(function(name){
        
        document.getElementById('company_name').innerHTML = name.data().company
    })
    .catch(function(error){
        console.log(error)
    })
}