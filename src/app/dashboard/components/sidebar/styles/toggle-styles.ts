import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid #d1d5db;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  padding-bottom: 1rem;
`;

export const Button = styled.button`
  display: flex;
  padding: 2px;
  border: none;
  transition: background-color 0.2s ease;
  position: relative;
  gap: 0.5rem;
  width: 100%;
  align-items: center;

  &:hover {
    background-color: #e5e7eb;
  }
`;

export const TextWrapper = styled.div`
  text-align: start;
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

export const ArrowUp = styled(FiChevronUp)`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(calc(-50% - 4px));
  font-size: 0.75rem;
`;

export const ArrowDown = styled(FiChevronDown)`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(calc(-50% + 4px));
  font-size: 0.75rem;
`;
