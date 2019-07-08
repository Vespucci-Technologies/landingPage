 // listen for auth status changes
 auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
    window.location = "https://vespuccianalytics.com/beta/dashboard/";

  } else {
    console.log('user logged out');


  }
})
