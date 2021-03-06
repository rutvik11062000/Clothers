import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCaGJemf8rW3wh7csFq6lOgy7tnPy66TN0",
  authDomain: "facedetection-8e1c6.firebaseapp.com",
  databaseURL: "https://facedetection-8e1c6.firebaseio.com",
  projectId: "facedetection-8e1c6",
  storageBucket: "facedetection-8e1c6.appspot.com",
  messagingSenderId: "386641174640",
  appId: "1:386641174640:web:6bd5db67fdba7fd503d4b5",
  measurementId: "G-KT60W0NS3L",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error occured", error);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
