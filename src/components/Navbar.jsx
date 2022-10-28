import * as React from "react";
import { AppBar, Toolbar, Typography, Container, Button } from "@mui/material/";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

//


const Navbar = (props) => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl" spacing={2}>
        <Toolbar
          variant="dense"
          disableGutters
          sx={{ flex: "display", justifyContent: "space-between" }}
        >
          <div>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="Nav-Bar">
                <img
                  src="https://res.cloudinary.com/dad5dandd/image/upload/v1666935109/pictureUpload/logoFormatted1_idj3ip.png"
                  alt="logo"
                />
              </div>
            </Link>
          </div>

          <div style={{ display: "flex" }}>
            <div style={{ marginLeft: 10 }}>
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button
                  variant="contained"
                  endIcon={<LoginIcon />}
                  disableRipple
                >
                  Sign Up
                </Button>
              </Link>
            </div>
            <div style={{ marginLeft: 10 }}>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button
                  variant="contained"
                  endIcon={<LoginIcon />}
                  disableRipple
                >
                  Log In
                </Button>
              </Link>
            </div>
{/*             <div style={{ marginLeft: 10 }}>
              <Link
                to="/logout"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button
                  variant="contained"
                  endIcon={<LogoutIcon />}
                  disableRipple
                >
                  Sign Up
                </Button>
              </Link>
            </div> */}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
