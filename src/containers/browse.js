import React, { useState, useEffect } from "react";
import { SelectProfileContainer } from "./profiles";
import { useAuth } from "../hooks/useAuth";
import  { 
  Loading,
  Header
}  from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";



export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useAuth();
  const  user  = firebase.auth().currentUser || { };
  // const { user } = useAuthListener();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);


  return profile.displayName ? (
    <>
    {loading ? ( 
      <Loading src={user.photoURL} /> 
      ) : ( 
        <Loading.ReleaseBody />
      )} 

      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netphlix" />
            <Header.TextLink>Series</Header.TextLink>
            <Header.TextLink>Films</Header.TextLink>
          </Header.Group>

          <Header.Group>
            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <Header.Profile>
              <Header.Picture src={user.photoURL} />

              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink> {user.displayName}</Header.TextLink>
                </Header.Group>

                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>

            </Header.Profile>

          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Joker</Header.FeatureCallOut>
          <Header.Text>
            Set in 1981, it follows Arthur Fleck, a failed clown and aspiring stand-up comic whose descent into mental illness and nihilism inspires a violent countercultural revolution against the prosperous in a decaying Gotham City. Robert De Niro, Zazie Beetz and Frances Conroy appear in supporting roles.
          </Header.Text>
        </Header.Feature>
      </Header>
    </>
  ) : <SelectProfileContainer user={user} setProfile={setProfile} />;
}