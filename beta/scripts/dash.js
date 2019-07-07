const guideList = document.querySelector('.features-header ');

auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
    setupUI(user);

  } else {
    console.log('user logged out');

  }
})
const setupUI = (user) => {
  if (user) {
    const string = user.email.substring(0,user.email.indexOf("@"));

    guideList.innerHTML = `
    <div class="container-sm">
								<h2 class="section-title mt-0">Thank you so much </br> ${string} !</h2>
                <p class="section-paragraph mb-0">We are working incredibly hard to refine the latest features of Vespucci. Based on our progress and your position in the queue we hope to deliver our solution to you by:</br></br></p>
                <h2 class="section-title mt-0">September 2019</h2>

							</div>
              `;

  } else {

  }
};
//Logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});