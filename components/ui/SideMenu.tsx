import { useContext, useState } from "react";
import { useRouter } from "next/router";

import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import {
  AccountCircleOutlined,
  AdminPanelSettings,
  CategoryOutlined,
  ConfirmationNumberOutlined,
  EscalatorWarningOutlined,
  FemaleOutlined,
  LoginOutlined,
  MaleOutlined,
  SearchOutlined,
  VpnKeyOutlined,
} from "@mui/icons-material";

import { UiContext } from "@/context";

export const SideMenu = () => {
  const { isMenuOpen, toggleSideMenu } = useContext(UiContext);
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");

  const onSearchHandler = () => {
    if (searchTerm.trim().length === 0) return;

    toggleSideMenu();
    router.push(`/search/${searchTerm}`);
  };

  const naviagateTo = (url: string) => {
    router.replace(`/category/${url}`);
    toggleSideMenu();
  };

  return (
    <Drawer
      open={isMenuOpen}
      onClose={toggleSideMenu}
      anchor="right"
      sx={{ backdropFilter: "blur(4px)", transition: "all 0.5s ease-out" }}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
          <ListItem>
            <Input
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => (e.key === "Enter" ? onSearchHandler() : null)}
              type="text"
              placeholder="Search..."
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={onSearchHandler}
                  >
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <AccountCircleOutlined />
            </ListItemIcon>
            <ListItemText primary={"Profile"} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <ConfirmationNumberOutlined />
            </ListItemIcon>
            <ListItemText primary={"My Orders"} />
          </ListItem>

          <ListItem
            onClick={() => naviagateTo("men")}
            sx={{ display: { xs: "", sm: "none" } }}
          >
            <ListItemIcon>
              <MaleOutlined />
            </ListItemIcon>
            <ListItemText primary={"Men"} />
          </ListItem>

          <ListItem
            onClick={() => naviagateTo("women")}
            sx={{ display: { xs: "", sm: "none" } }}
          >
            <ListItemIcon>
              <FemaleOutlined />
            </ListItemIcon>
            <ListItemText primary={"Women"} />
          </ListItem>

          <ListItem
            onClick={() => naviagateTo("children")}
            sx={{ display: { xs: "", sm: "none" } }}
          >
            <ListItemIcon>
              <EscalatorWarningOutlined />
            </ListItemIcon>
            <ListItemText primary={"Kids"} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <VpnKeyOutlined />
            </ListItemIcon>
            <ListItemText primary={"Log in"} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <LoginOutlined />
            </ListItemIcon>
            <ListItemText primary={"Log out"} />
          </ListItem>

          {/* Admin */}
          <Divider />
          <ListSubheader>Admin Panel</ListSubheader>

          <ListItem>
            <ListItemIcon>
              <CategoryOutlined />
            </ListItemIcon>
            <ListItemText primary={"Products"} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ConfirmationNumberOutlined />
            </ListItemIcon>
            <ListItemText primary={"Orders"} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <AdminPanelSettings />
            </ListItemIcon>
            <ListItemText primary={"Users"} />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};
