import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  alight-items: center;
  background-color: #000;
`;

export const List = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Item = styled.li`
  align-self: flex-start;
  list-style: none;
  width: 100%;
  padding: 10px 5px;
  text-align: center;
  color: #fff;
  cursor: pointer;
`;

export const ActivItem = styled(Item)`
  background: #fff;
  color: #000;
  border-radius: 10px;
`;
