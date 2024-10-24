import { FiCommand, FiSearch } from "react-icons/fi";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #e5e5e5;
  margin-bottom: 1rem;
  position: relative;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  padding: 0.375rem 0.5rem;
  font-size: 0.875rem;
`;

export const Magnifier = styled(FiSearch)`
  margin-right: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  color: #a8a29e;
  border: none;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
  }
`;

export const ShortCut = styled.span`
  padding: 0.25rem;
  font-size: 0.75rem;
  gap: 0.125rem;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  background-color: #f9fafb;
  border-radius: 0.375rem;
  position: absolute;
  right: 0.375rem;
  top: 50%;
  transform: translateY(-50%);
`;

export const Command = styled(FiCommand)`
  width: 1rem;
`;
