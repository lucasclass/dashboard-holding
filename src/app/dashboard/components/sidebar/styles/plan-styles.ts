import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  position: sticky;
  top: calc(100vh - 48px - 16px);
  flex-direction: column;
  height: 3rem;
  border-top: 1px solid #d1d5db;
  padding: 0 0.5rem;
  justify-content: flex-end;
  font-size: 0.75rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextTitle = styled.p`
  font-weight: 700;
`;

export const TextSub = styled.p`
  color: #78716c;
`;

export const LogOutButton = styled.button`
  padding: 0.375rem 0.5rem;
  font-weight: 500;
  background-color: #e7e5e4;
  border: none;
  border-radius: 0.375rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #d6d3d1;
  }
`;
