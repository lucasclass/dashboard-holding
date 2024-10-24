import styled from "styled-components";

export const Container = styled.div`
  grid-column: span 4;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #d1d5db;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Title = styled.h3`
  color: #6b7280;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
`;

export const Value = styled.p`
  font-size: 1.875rem;
  font-weight: 600;
`;

export const TrendBadge = styled.span<{ trend: string }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  background-color: ${({ trend }) => (trend === "up" ? "#d1fae5" : "#fee2e2")};
  color: ${({ trend }) => (trend === "up" ? "#047857" : "#b91c1c")};
`;

export const Period = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
`;
