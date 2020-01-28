import { firebaseApp, userRef } from "../firebase";

export default ({ email, password, firstName, lastName }) => {
  if (!firstName || !lastName) {
    return false;
  }

  firebaseApp
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(data => {
      userRef.child(data.user.uid).set({
        firstName,
        lastName,
        email
      });

      return true;
    })
    .catch(err => {
      console.log(err);
      return false;
    });
};
