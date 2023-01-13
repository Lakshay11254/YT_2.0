import React from 'react'
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from './SearchBar';
// import NotificationsIcon from "@mui/icons-material/Notifications";

import Avatar from "@mui/material/Avatar";

// import SideBar from './SideBar';

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={80} />
    </Link>
    <SearchBar alignItems="center"/>
    {/* <NotificationsIcon/> */}
    <Avatar
          alt="Lakshay Malhotra"
          src="https://www.linkpicture.com/q/mineimage.jpeg"
          sx={{ width: 50, height: 50 }}

        />
  </Stack>
);

export default Navbar;