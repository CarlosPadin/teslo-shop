import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  CloseOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Input,
  InputAdornment,
} from "@mui/material";
import { UiContext } from "@/context";

export const Navbar = () => {
  const { pathname, push } = useRouter();
  const { toggleSideMenu } = useContext(UiContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const onSearchHandler = () => {
    if (searchTerm.trim().length === 0) return;

    toggleSideMenu();
    push(`/search/${searchTerm}`);
  };

  return (
    <AppBar>
      <Toolbar>
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "black",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Teslo | </Typography>
          <Typography sx={{ ml: 0.5 }}>Shop</Typography>
        </Link>

        <Box flex={1} />

        <Box
          className="fadeIn"
          sx={{ display: isVisible ? "none" : { xs: "none", sm: "block" } }}
        >
          <Link href="/category/men">
            <Button color={pathname === "/category/men" ? "primary" : "info"}>
              Men
            </Button>
          </Link>
          <Link href="/category/women">
            <Button color={pathname === "/category/women" ? "primary" : "info"}>
              Women
            </Button>
          </Link>
          <Link href="/category/children">
            <Button
              color={pathname === "/category/children" ? "primary" : "info"}
            >
              Children
            </Button>
          </Link>
        </Box>

        <Box flex={1} />

        {/* Pantallas pequenas */}
          <IconButton
            onClick={toggleSideMenu}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <SearchOutlined />
          </IconButton>

        {/* Pantallas grandes */}
        {isVisible ? (
          <Input
            sx={{ display: { xs: "none", sm: "flex" } }}
            className="fadeIn"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => (e.key === "Enter" ? onSearchHandler() : null)}
            type="text"
            placeholder="Search..."
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setIsVisible(false)}>
                  <CloseOutlined />
                </IconButton>
              </InputAdornment>
            }
          />
        ) : (
          <IconButton
            className="fadeIn"
            onClick={() => setIsVisible(true)}
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            <SearchOutlined />
          </IconButton>
        )}

        <Link href="/cart">
          <IconButton>
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </Link>

        <Button onClick={toggleSideMenu}>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};
