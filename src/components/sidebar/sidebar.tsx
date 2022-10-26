import { SidebarContainer, List, Item, ActivItem } from "@/styles";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <List>
        <ActivItem>inicio</ActivItem>
        <Item>sobre nosotros</Item>
        <Item>Contactanos</Item>
      </List>
    </SidebarContainer>
  );
};
