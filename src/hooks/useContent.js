import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';

 export const useContent = (target) => {
  const [content, setContent] = useState([]);
  const { firebase } = useAuth();

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
    }, [firebase, target])
  
  return { [target]: content };
  }

