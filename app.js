window.onload =()=>{
  firebase.auth().onAuthStateChanged((user)=>{
    if (user){
      //estamos logueados
      loggedOut.style.display="none";
      loggedIn.style.display="block";
      console.log("User>"+JSON.stringify(user));

    }else{
      //no estamos logueados
      loggedOut.style.display="block";
      loggedIn.style.display="none";
    }
  });
}
function register(){
  const emailValue = email.value;
  const passwordValue =password.value
  //promesa
  firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
  .then(()=>{
    console.log();
  })
  .catch(()=>{
    console.log("Error de firebase >" +error.code);
    console.log("Error de firebase , mensaje>"+error.message);
    
  });
}

function login(){
  const emailValue= email.value;
  const passwordValue = password.value;
  firebase.auth().signInWithEmailAndPassword(emailValue,passwordValue)
  .then(()=>{
    console-log("usuario exitoso")
  })
  .catch((error)=>{
    console.log("error de firebase >"+ error.code);
    console.log("error de firebase, mensaje >"+ error.mensaje);
  });
}
function logout(){
  firebase.auth().signOut()
  .then(()=>{
    console.log("chao");
  })
  .catch();
}