import React, { useState, useEffect } from "react";
import { SelectProfileContainer } from "./profiles";
import { useAuth } from "../hooks/useAuth";
import  { 
  Loading,
  Header,
  Card,
  Player
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
  const [category, setCategory] = useState("series");
  const [slideRows, setSlideRows] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);


  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

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
            <Header.TextLink 
              active={category === 'series' ? 'true' : 'false'}
              onClick={() => setCategory('series')}
            >
              Series
            </Header.TextLink>

            <Header.TextLink
              active={category === 'films' ? 'true' : 'false'}
              onClick={() => setCategory('films')}
            >
              Films
            </Header.TextLink>
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

          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
                
              {/* <Player>
                <Player.Button />
                <Player.Video src="/videos/thanks.mp4" />
              </Player> */}
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    </>
  ) : <SelectProfileContainer user={user} setProfile={setProfile} />;
}