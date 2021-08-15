import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { Carousel, CarouselTitle, Container, Logo, Search, Wrapper } from './styles';
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, Map, Modal, RestaurantCard } from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(true);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPess(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="logo do restaurante" />
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search " />}>
            <Input
              value={inputValue}
              onKeyPress={handleKeyPess}
              onChange={(e) => setInputValue(e.currentTarget.value)}
            />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurante} title="imagem padrão" />
            <Card photo={restaurante} title="imagem padrão" />
            <Card photo={restaurante} title="imagem padrão" />
            <Card photo={restaurante} title="imagem padrão" />
            <Card photo={restaurante} title="imagem padrão" />
            <Card photo={restaurante} title="imagem padrão" />
            <Card photo={restaurante} title="imagem padrão" />
          </Carousel>
        </Search>
        <RestaurantCard />
      </Container>
      <Map query={query} />
      {/* <Modal open={modalOpened} onclose={() => setModalOpened(!modalOpened)} /> */}
    </Wrapper>
  );
};

export default Home;
