import styled from '@emotion/styled';

const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 6px;
  color: ${({ theme }) => theme.palette.text.secondary};
  text-transform: uppercase;
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  outline: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.palette.background.paper};
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export default Button;
