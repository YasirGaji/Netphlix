import { useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

const useAuth = () => {
  //return useContext(FirebaseContext);
  const { firebase } = useContext(FirebaseContext);
  return firebase;
}

export default useAuth;