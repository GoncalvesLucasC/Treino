import React, { useState } from 'react'

import { Container, Container2, Title, Inputs, Button } from "../../css/Pages/pageStyles"

import GlobalStyle from "../../css/globalStyles"

import { Cadastro } from '../../components/cardCreds';

function PageFunctions() {
  const [registerName, setRegisterName] = useState('');
  const [registerLastName, setRegisterLastName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPhone, setRegisterPhone] = useState('');
  const [registerGithub, setRegisterGithub] = useState('');
  // const [registerAvatar, setRegisterAvatar] = useState('');
  const [user, setUser] = useState([])


  function registerAdd() {
    const newRegister = {
      // avatar: registerAvatar,
      name: registerName,
      lastName: registerLastName,
      email: registerEmail,
      phone: registerPhone,
      github: registerGithub,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setUser(prevState => [...prevState, newRegister]);
  }


  console.log(user)
  // useEffect(() => {
  //   fetch('https://api.github.com/users/mojombo')
  //     .then(response => response.json())
  //     .then(data => {
  //       setRegisterAvatar({justify-content
  //         avatar: data.avatar_url
  //       })
  //     })Container
  // }, []);


  return (
    <>

      <Container>
        <header>
          <Title>Cadastro</Title>
        </header>

        <Container2>
          <Inputs type="Cardtext" placeholder='Nome' onChange={e => setRegisterName(e.target.value)} />

          <Inputs type="text" placeholder='Sobrenome' onChange={e => setRegisterLastName(e.target.value)} />

          <Inputs type="text" placeholder='Email' onChange={e => setRegisterEmail(e.target.value)} />

          <Inputs type="text" placeholder='Phone' onChange={e => setRegisterPhone(e.target.value)} />

          <Inputs type="text" placeholder='Github' onChange={e => setRegisterGithub(e.target.value)} />

          <Button onClick={registerAdd}>Adicionar</Button>
        </Container2>
        <div>
          {
            user.map(user => (
              <Cadastro
                key={user.time}
                name={user.name}
                lastName={user.lastName}
                email={user.email}
                phone={user.phone}
                github={user.github}
                time={user.time}
              />
            ))
          }
        </div>
      </Container>
      <GlobalStyle />
    </>
  )
}

export default PageFunctions;

