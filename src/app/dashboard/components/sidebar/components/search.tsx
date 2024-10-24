import React from "react";
import {
  Command,
  Container,
  Input,
  Magnifier,
  ShortCut,
} from "../styles/search-styles";

export const Search = () => {
  return (
    <Container>
      <Magnifier />
      <Input type="text" placeholder="Search" />
      <ShortCut>
        <Command />K
      </ShortCut>
    </Container>
  );
};
