import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAjIp9kvrHGUKMhRdkVEtC7fKSRHSGhr_g",
  authDomain: "mj-shop-d21a1.firebaseapp.com",
  projectId: "mj-shop-d21a1",
  storageBucket: "mj-shop-d21a1.appspot.com",
  messagingSenderId: "12342903047",
  appId: "1:12342903047:web:021850f3a673b1285245a2"
};

const app = initializeApp(firebaseConfig);

export const getFiresotoreApp = () =>{
    return app
}