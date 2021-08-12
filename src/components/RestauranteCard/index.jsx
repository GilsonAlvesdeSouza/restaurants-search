import React from 'react';
import ReactStars from 'react-rating-stars-component';
import restaurant from '../../assets/restaurante-fake.png';

import { Address, Restaurant, RestaurantInfo, RestaurantPhoto, Title } from './style';

const RestaurantCard = () => {
  return (
    <Restaurant>
      <RestaurantInfo>
        <Title>Nome do Restaurante</Title>
        <ReactStars isHalf size={20} activeColor="#e7711c" edit={false} value={3.5} />
        <Address>Rua 13 Qd 20a Lt 15 B. Boa Vista Anapolis-GO</Address>
      </RestaurantInfo>
      <RestaurantPhoto src={restaurant} title="Imagem do Restaurante" />
    </Restaurant>
  );
};

export default RestaurantCard;
