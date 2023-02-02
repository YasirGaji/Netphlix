import React from "react";
import { SelectProfileContainer } from "./profiles";
import { useAuth } from "../hooks/useAuth";


export function BrowseContainer({ slides }) {
  const { firebase } = useAuth();
  const user  = firebase.auth().currentUser || {};


  return <SelectProfileContainer user={user} />;
}