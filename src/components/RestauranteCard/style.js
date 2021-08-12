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
