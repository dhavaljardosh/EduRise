import { postRef } from "../firebase";

export default (uid, content) => {
  console.log("into the function");
  try {
    postRef.push({
      createdBy: uid,
      content,
      createdAt: new Date().toLocaleString()
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
