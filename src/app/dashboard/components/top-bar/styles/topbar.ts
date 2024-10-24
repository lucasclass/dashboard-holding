import styled from "styled-components";

export const Section = styled.section`
  border-bottom: 1px solid #d1d5db;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  padding-bottom: 1rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
`;

export const TextSpan = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  display: block;
`;

export const TextSpanTwo = styled.span`
  font-size: 0.875rem;
  display: block;
  color: #78716c;
`;

export const DateButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  gap: 0.5rem;
  background-color: #f5f5f4;
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  border: transparent;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #ede9fe;
    color: #6489fa;
  }
`;
