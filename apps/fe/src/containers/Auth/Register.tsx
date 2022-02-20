import { atoms, auth } from 'common';
import {
  ButtonRow,
  Header,
  Wrapper,
  Button,
  TextInput,
  InputRow,
  AuthWrapper, LinkRow
} from './styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

export default function Register() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    options: {
      userData: {
        first_name: '',
        last_name: '',
      },
    },
  });
  const [authScreen, setAuthScreen] = useRecoilState(atoms.authScreen)


  return (
    <>
      <AuthWrapper>
        <Wrapper style={{padding: '3rem'}}>
          <Header>Register</Header>
          <InputRow>
            <TextInput
              required
              value={credentials.options.userData.first_name}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  options: {
                    userData: {
                      ...credentials.options.userData,
                      first_name: e.target.value,
                    },
                  },
                })
              }
              id="Name"
              placeholder="Name *"
            />
            <TextInput
              required
              value={credentials.options.userData.last_name}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  options: {
                    userData: {
                      ...credentials.options.userData,
                      last_name: e.target.value,
                    },
                  },
                })
              }
              id="Surname"
              placeholder="Surname *"
            />
          </InputRow>
          <InputRow>
            <TextInput
              required
              value={credentials.email}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  email: e.target.value,
                })
              }
              id="Email"
              placeholder="Email *"
            />
            <TextInput
              required
              value={credentials.password}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  password: e.target.value,
                })
              }
              type="password"
              id="Password"
              placeholder="Password *"
            />
          </InputRow>
          <ButtonRow>
            <Button
              onClick={() =>{
                console.log(credentials);

                auth
                  .register({
                    email: credentials.email,
                    password: credentials.password,
                  })
                  .then((response:any) => {
                    console.log('Registered')
                  })
                  .catch((err:any) => {
                    console.log(
                      err?.response?.data?.message?.replaceAll('"', '') ||
                        err.message
                    );
                  });
              }}
            >
              Register
            </Button>
          </ButtonRow>
          <LinkRow>
            <div />
            <a href="#" onClick={()=>setAuthScreen('login')}>Login</a>
          </LinkRow>
        </Wrapper>
      </AuthWrapper>
    </>
  );
}
