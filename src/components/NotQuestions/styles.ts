import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding-top: 1.5rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Img = styled.img`
  max-height: 150px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  user-select: none;
`;

export const Text = styled.p`
  font-size: 14px;
  user-select: none;

  color: ${(props) => props.theme.colors.disabled};

  & + & {
    margin-top: 0.4rem;
  }
`;
