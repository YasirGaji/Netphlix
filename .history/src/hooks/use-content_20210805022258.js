import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function UseContent(target) {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const firebase = useContext(FirebaseContext);
    firebase.on("content", data => {
      setContent(data);
    });
  }, []);

  return content;
}