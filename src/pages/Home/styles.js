import styled from 'styled-components';
import Slider from 'react-slick';
import theme from '../../theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: ${() => theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  padding: 15px;
`;

export const Logo = styled.img`
  margin-bottom: 15px;
`;

export const Map = styled.div`
  background-color: rebeccapurple;
  width: calc(100% - 360px);
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 30px;
  }
`;

export const CarouselTitle = styled.h1`
  font-family: ${() => theme.fonts.regular};
  color: ${() => theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 10px 0;
`;

export const ModalTitle = styled.p`
  margin-bottom: 10px;
  letter-spacing: 0.11px;
  font-family: ${() => theme.fonts.regular};
  color: ${() => theme.colors.text};
  text-transform: none;
  line-height: 29px;
  font-size: 24px;
  font-weight: bold;
`;

export const ModalContent = styled.p`
  margin-bottom: 10px;
  font-family: ${() => theme.fonts.regular};
  color: ${() => theme.colors.text};
  font-weight: normal;
  line-height: 19px;
  font-size: 16px;
`;
