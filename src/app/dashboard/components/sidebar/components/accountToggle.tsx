import { AvatarComp } from "./avatarComponents";
import {
  ArrowDown,
  ArrowUp,
  Button,
  Container,
  TextSpan,
  TextSpanTwo,
  TextWrapper,
} from "../styles/toggle-styles";

export const AccountToggle = () => {
  return (
    <Container>
      <Button>
        <AvatarComp />
        <TextWrapper>
          <TextSpan>Lucas is Writing</TextSpan>
          <TextSpanTwo>lucas@test.com</TextSpanTwo>
        </TextWrapper>
        <ArrowDown />
        <ArrowUp />
      </Button>
    </Container>
  );
};
