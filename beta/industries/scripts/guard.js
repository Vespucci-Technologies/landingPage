 // listen for auth status changes
 auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);

  } else {
    console.log('user logged out');
    window.location = "https://vespuccianalytics.com/beta/";


  }
})
