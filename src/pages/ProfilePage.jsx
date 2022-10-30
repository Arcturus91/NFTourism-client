import * as React from "react";
import { EnhancedTable, UsersList, SimpleMap } from "../components";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import BackpackIcon from "@mui/icons-material/Backpack";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { Link } from "react-router-dom";
import { adminGetUsers } from "../services/admin-ws";
import { useEffect, useState } from "react";

const ProfilePage = (props) => {
  console.log(props.user.role);


  const [users, setUsers] = useState([]);

  useEffect(() => {
    adminGetUsers()
      .then((res) => 
      {setUsers(res.data.user)
      console.log(users)})
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container maxWidth="md" className="profile-page">
      {props.user.role === "Admin" ? (
        <>
          <Stack direction="row" sx={{ justifyContent: "center", m: 5 }}>
            <Avatar
              alt="user"
              src="https://res.cloudinary.com/dad5dandd
/image/upload/w_1000,c_fill,ar_1:1,
g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1664030626/
AlpacaExchange/alpacaUserId2_km8k9e.png"
              sx={{ width: 100, height: 100, mt: 5 }}
            />
          </Stack>

          <Divider />

          <Box sx={{ width: "100%", alignContent: "center", mb: 10 }}>
            <Typography variant="h6" gutterBottom>
              Welcome Admin {props.user.firstName} {props.user.lastName}
              <br />
              ID: {props.user._id}
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
              Admin Wallet Solana address number: {props.user.walletAddress}
            </Typography>
            <Divider />

            <Typography variant="h6" gutterBottom>
              Here is a list of your current users:
              <UsersList users={users}/>
            </Typography>
          </Box>


        </>
      ) : (
        <p>
          <>
            <Stack direction="row" sx={{ justifyContent: "center", m: 5 }}>
              <Avatar
                alt="user"
                src="https://res.cloudinary.com/dad5dandd
/image/upload/w_1000,c_fill,ar_1:1,
g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1664030626/
AlpacaExchange/alpacaUserId2_km8k9e.png"
                sx={{ width: 100, height: 100, mt: 5 }}
              />
            </Stack>

            <Divider />

            <Box sx={{ width: "100%", alignContent: "center", mb: 10 }}>
              <Typography variant="h6" gutterBottom>
                Welcome User {props.user.firstName} {props.user.lastName}
                <br />
                ID: {props.user._id}
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
                User Wallet Solana address number: {props.user.walletAddress}
              </Typography>
              <Divider />
            </Box>

            <Typography variant="h6" gutterBottom>
              <Link
                to="/religiousroute"
                style={{ textDecoration: "none", color: "black", fontSize: 30 }}
              >
                Check the route you wanna try
                <FlightTakeoffIcon />{" "}
              </Link>
            </Typography>

            <EnhancedTable />
          </>
        </p>
      )}
    </Container>
  );
};

export default ProfilePage;

