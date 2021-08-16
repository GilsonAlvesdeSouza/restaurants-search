import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import restaurante from '../../assets/restaurante-fake.png';

import { Address, Restaurant, RestaurantInfo, RestaurantPhoto, Title } from './style';
import { Skeleton } from '../index';

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars isHalf size={20} activeColor="#e7711c" edit={false} value={restaurant.rating} />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestaurantPhoto
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
        title="Imagem do Restaurante"
        onLoad={() => setImageLoaded(true)}
      />
      {!imageLoaded && <Skeleton width={100} height={100} />}
    </Restaurant>
  );
};

export default RestaurantCard;
