import styled from 'styled-components';
import theme from '../../theme';

const Container = styled.aside`
  background-color: ${() => theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export default Container;
