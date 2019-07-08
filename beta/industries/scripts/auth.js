
 // listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
      console.log('user logged in: ', user);
      
    } else {
      console.log('user logged out');

    }
  })

// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  const company = signupForm['signup-company'].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    // close the signup modal & reset form
    signupForm.reset();
    db.collection('details_users').add({
      company: company,
      utilisateur: firebase.auth().currentUser.uid
    }).then(() => {
      window.location = "https://vespuccianalytics.com/beta/industries/";
  
    }).catch(err => {
      console.log(err.message);
      signupForm.querySelector('.error').innerHTML = err.message;

    });

  }).catch(err => {
    console.log(err.message);
    signupForm.querySelector('.error').innerHTML = err.message;

  });
});

//Logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});

