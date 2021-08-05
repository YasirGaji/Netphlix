import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function UseContent(target) {
  const [content, setContent] = useState([]);
  const firebase = useContext(FirebaseContext);
  useEffect(() => {
    firebase
    .firestore()
    .collection(target)
    .get()
    .then((snapshot) => {
      const allContent = snapshot.docs.map((contentObj) > ({
        content: contentObj.data().content,
      }));
    })
  }, []);

  return content;
}