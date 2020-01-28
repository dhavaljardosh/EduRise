import { firebaseApp, userRef } from "../firebase";

export default ({ email, password }) => {
  console.log("into the function");
  firebaseApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(data => {
      console.log(data.user);
      userRef.child(data.user.uid).once("value", snapshot => {
        console.log(snapshot.val());
        return snapshot.val();
      });
    })
    .catch(err => {
      console.log(err.message);
      console.log("User Not Found and not Signed In");
      return err.message;
    });
};
