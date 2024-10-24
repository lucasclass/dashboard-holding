import styled from "styled-components";

export const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 0.25rem;
  flex-shrink: 0; /* shrink-0 */
  background-color: #6489fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const AvatarComp = () => {
  const avatarUrl = "https://api.dicebear.com/9.x/open-peeps/svg?seed=Eliza";
  return <Avatar src={avatarUrl} alt="Avatar" />;
};
