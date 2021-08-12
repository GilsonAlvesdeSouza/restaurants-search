import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const Card = styled.div`
  display: flex;
  justify-content: center;
  padding: 6px;
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${({ photo }) => photo});
  background-size: cover;
`;

const Title = styled.p`
  font-family: ${() => theme.fonts.regular};
  color: #fff;
  font-size: 16px;
`;

const ImageCard = ({ photo, title }) => {
  return (
    <Card photo={photo}>
      <Title>{title}</Title>
    </Card>
  );
};

export default ImageCard;
