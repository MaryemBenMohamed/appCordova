
  var firebaseConfig = {
    apiKey: "AIzaSyDEpDavxrIgnhWoLMnSASW_gafHIcIZNPQ",
    authDomain: "crossplatform-182d0.firebaseapp.com",
    projectId: "crossplatform-182d0",
    storageBucket: "crossplatform-182d0.appspot.com",
    messagingSenderId: "126973651703",
    appId: "1:126973651703:web:75c94220ddcea9a15b01f2",
    measurementId: "G-6DN0Z3BKXE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const auth = firebase.auth();

  function signUp(){

  		var email = document.getElementById("userEmail");
  		var password = document.getElementById("userPassword");

  		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  		promise.catch(e => alert(e.message));

  		alert("You are now a member ,Go and sign in"+ email.value);

  	}


	function signIn(){

		var email = document.getElementById("Email");
		var password = document.getElementById("Password");
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		window.open("Home.html");

	}


