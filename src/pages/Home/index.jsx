import React, {useState} from 'react';
import TextField, {Input} from '@material/react-text-field';
import {Container, Search, Logo, Wrapper, Map} from './styles';
import logo from '../../assets/logo.svg';
import MaterialIcon from '@material/react-material-icon';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="logo do restaurante"/>
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role={"button"} icon={"search "}/>}
          >
            <Input value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value)}/>
          </TextField>
        </Search>
      </Container>
      <Map>

      </Map>
    </Wrapper>
  );
};

export default Home;
