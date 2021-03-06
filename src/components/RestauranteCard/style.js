import styled from 'styled-components';
import theme from '../../theme';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 10px;
  background-color: #fff;
  border-left: 5px solid transparent;

  :hover {
    background-color: ${() => theme.colors.background};
    border-left-color: ${() => theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-family: ${() => theme.fonts.regular};
  color: ${() => theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin-bottom: 10px;
`;

export const Address = styled.span`
  font-family: ${() => theme.fonts.regular};
  color: ${() => theme.colors.text};
  font-size: 16px;
  line-height: 29px;
  margin-bottom: 10px;
  margin-top: 15px;
`;

export const RestaurantPhoto = styled.img`
  display: ${(props) => (props.imageLoaded ? 'block' : 'none')};
  width: 100px;
  height: 100px;
  border-radius: 6px;
  object-fit: cover;
  margin-left: 1px;
`;
