import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWith);
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--medGrey);
  border-radius: 20px;
  margin: 0 20px;
  flex: 1;

  @media screen and (max-width: 768px) {
    margin: 20px;

    :first-child {
      margin-bottom: 0;
    }

    :last-child {
      margin-top: 0;
    }
  }
`;
