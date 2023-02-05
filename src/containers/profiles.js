import React from "react";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import { Header, Profiles } from "../components";
import { Form }  from "../components";



export function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netphlix" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
            <Form.Text>
            Don't have an account? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          </Profiles.User>
          
        </Profiles.List>
      </Profiles>

    </>
  )
}