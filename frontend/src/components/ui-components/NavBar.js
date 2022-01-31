import React from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography, Button } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircle from '@mui/icons-material/AccountCircle';

function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box sx={{ display: { md: 'flex' } }}>
                    <IconButton
                        size="large"
                        color="inherit"
                        aria-label="settings"
                    >
                        <SettingsIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        color="inherit"
                        aria-label="notifications"
                    >
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        color="inherit"
                        aria-label="mails"
                    >
                        <EmailIcon />
                    </IconButton>
                </Box>


                <div className="d-md-flex d-block flex-row mx-md-auto mx-0">
                    <img src={"images/logo.png"} width={170} alt={"Logo"} />
                </div>
                <Box sx={{ display: { md: 'flex' } }}>
                    <IconButton
                        disableRipple={true}
                        size="small"
                        edge="start"
                        aria-label="account of current user"
                        color="inherit"
                    >
                        Thisura Thebuwana
                    </IconButton>

                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Box>

            </Toolbar>
        </AppBar>
    )
}

export default NavBar
