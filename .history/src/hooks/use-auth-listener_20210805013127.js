import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function UseAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('authUser'))
  );
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        localStorage.setItem('authUser', JSON.stringify(authUser));
      }
      ));
  }, []);

  return auth;
}