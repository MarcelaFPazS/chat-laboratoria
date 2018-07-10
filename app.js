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