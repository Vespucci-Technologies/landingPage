const choix_1 = document.querySelector('#ondemand');
choix_1.addEventListener('click', (e) => {
  e.preventDefault();
  db.collection('details_users').add({
    industrie: 'on_demand',
    utilisateur: firebase.auth().currentUser.uid
  }).then(() => {
    window.location = "https://vespuccianalytics.com/beta/dashboard/";

  }).catch(err => {
    console.log(err.message);
  });
});

const choix_2 = document.querySelector('#ecommerce');
choix_2.addEventListener('click', (e) => {
  e.preventDefault();
  db.collection('details_users').add({
    industrie: 'ecommerce',
    utilisateur: firebase.auth().currentUser.uid
  }).then(() => {
    window.location = "https://vespuccianalytics.com/beta/dashboard/";

  }).catch(err => {
    console.log(err.message);
  });
});

const choix_3 = document.querySelector('#news');
choix_3.addEventListener('click', (e) => {
  e.preventDefault();
  db.collection('details_users').add({
    industrie: 'news',
    utilisateur: firebase.auth().currentUser.uid
  }).then(() => {
    window.location = "https://vespuccianalytics.com/beta/dashboard/";

  }).catch(err => {
    console.log(err.message);
  });
});

const choix_4 = document.querySelector('#other');
choix_4.addEventListener('click', (e) => {
  e.preventDefault();
  db.collection('details_users').add({
    industrie: 'other',
    utilisateur: firebase.auth().currentUser.uid
  }).then(() => {
    window.location = "https://vespuccianalytics.com/beta/dashboard/";

  }).catch(err => {
    console.log(err.message);
  });
});