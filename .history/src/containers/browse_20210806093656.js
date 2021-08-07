 import React, { useState, useContext, useEffect } from 'react'
import SelectProfileContainer from './profiles'
import { FirebaseContext } from '../context/firebase'
 
 export default function BrowseContainer({ slides}) {
   const [profile, setProfile] = useState({});
   const [loading, setLoading] = useState(true);
   const { firebase } = useContext(FirebaseContext);
   const user = firebase.auth().currentUser ||  {};

   useEffect(() => {
     setTimeout(() => {
       
     })
   })

   return (
    <SelectProfileContainer user={user} setProfile={setProfile} /> 
   )
 }
 