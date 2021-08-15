import React from 'react';
import ReactStars from 'react-rating-stars-component';
import restaurante from '../../assets/restaurante-fake.png';

import { Address, Restaurant, RestaurantInfo, RestaurantPhoto, Title } from './style';

const RestaurantCard = ({ restaurant }) => {
  return (
    <Restaurant>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars isHalf size={20} activeColor="#e7711c" edit={false} value={restaurant.rating} />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestaurantPhoto
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
        title="Imagem do Restaurante"
      />
    </Restaurant>
  );
};

export default RestaurantCard;
