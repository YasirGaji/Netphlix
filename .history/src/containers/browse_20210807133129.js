 import React, { useState, useContext, useEffect } from 'react'
import SelectProfileContainer from './profiles'
import { FirebaseContext } from '../context/firebase'
import { Header, Loading } from '../components'

 export default function BrowseContainer({ slides}) {
   const [profile, setProfile] = useState({});
   const [loading, setLoading] = useState(true);
   const { firebase } = useContext(FirebaseContext);
   const user = firebase.auth().currentUser ||  {};

   useEffect(() => {
     setTimeout(() => {
       setLoading(false);
     }, 3000);
   }, [profile.displayName]);

   return profile.displayName ? ( 
      <>
      loading ? ( <Loading src={user.photoURL} /> ) : <Loading.ReleaseBody />
      <Header src="joker1">
        <h1>yo</h1>
      </Header>
      </>
    ) :  (
    <SelectProfileContainer user={user} setProfile={setProfile} /> 
   )
 }
 