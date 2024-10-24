import styled from "styled-components";

interface ButtonNavProps {
  selected: boolean;
}

export const Container = styled.div`
  & > * + * {
    margin-top: 0.25rem;
  }
`;

export const ButtonNav = styled.button<ButtonNavProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  width: 100%;
  border-radius: 0.375rem;
  border: transparent;
  padding: 0.375rem 0.5rem;
  font-size: 0.875rem;
  transition: box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease;
  background-color: ${({ selected }) => (selected ? "white" : "transparent")};
  color: ${({ selected }) => (selected ? "#3f3f46" : "#6b7280")};
  box-shadow: ${({ selected }) =>
    selected ? "0 1px 2px rgba(0, 0, 0, 0.1)" : "none"};

  &:hover {
    background-color: ${({ selected }) => (selected ? "white" : "#e5e7eb")};
  }
`;

export const IconNav = styled.div<{ selected: boolean }>`
  color: ${({ selected }) =>
    selected ? "#6489fa" : "inherit"}; /* text-violet-500 */
`;
