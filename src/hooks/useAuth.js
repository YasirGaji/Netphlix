import { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../context/firebase';

export const useAuth = () => {
  //return useContext(FirebaseContext);
  const { firebase } = useContext(FirebaseContext);
  return firebase;
}

export const useAuthListener = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('authUser'))
  );

  const { firebase } = useAuth();

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => listener();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user };

}


