import styled from 'styled-components';

export const Quote = styled.div`
  margin: 148px auto 0;
  position: relative;
  width: 70%;
  @media (max-width: 768px) {
    width: 96%;
  }
`;
export const QuoteText = styled.div`
  padding: 32px;
  border: 1px solid var(--gray);

  p {
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

    @media (max-width: 768px) {
      padding: 18px;
    }


`;
export const QuoteAuthor = styled.div`
  padding: 16px;
  border: 1px solid var(--gray);
  border-top: none;
  margin-left: auto;
  width: 18%;
  position: relative;

  @media (max-width: 768px) {
    width: 38%;
    padding: 12px;
  }
`;

export const QuoteIconLeft = styled.div`
  position: absolute;
  top: -1rem;
  left: 10px;
`;

export const QuoteIconRight = styled.div`
  position: absolute;
  top: -1rem;
  right: 10px;
`;

