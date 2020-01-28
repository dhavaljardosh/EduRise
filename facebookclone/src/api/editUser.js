import { userRef } from "../firebase";

export default ({ uid, firstName, lastName }) => {
  console.log(uid);
  userRef.child(uid).set({
    firstName,
    lastName
  });
};
