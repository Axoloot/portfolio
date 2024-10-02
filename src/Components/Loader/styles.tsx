import styled from 'styled-components';
import '../../Pages/Contact/toast.css';

export const LoaderWrapper = styled.div`
  display: flex;
  height: 100svh;
  justify-content: center;
  align-items: center;
`;

export const LoaderSpinner = styled.div`
  @keyframes Toastify__spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  width: 3em;
  height: 3em;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${props => props.theme.primary};
  border-right-color: ${props => props.theme.tertiary};
  animation: Toastify__spin 0.65s linear infinite;
`;
