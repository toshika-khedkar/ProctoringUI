
import  { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography, 
    styled,
    ListItemButton,
    ListItemText,
    IconButton,
    
    Menu,
    MenuItem
} from '@mui/material';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import { Link } from 'react-router-dom';

const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")] : {
        display: "flex",
    },
}));

// Routes
const itemList = [
    {
      text: "Home",
      to: "/" 
    },
    {
      text: "About",
      to: "/about"
    }
];

const Navbar = ({userName}) => { 
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
// console.log(userEmail);
    return (
        <AppBar 
            component="nav" 
            position="sticky"
            sx={{ 
                backgroundColor: 'blue', 
            }}
            elevation={0}
        >
            <StyledToolbar>
                <Typography variant="h4" component="h2">
                    <b>Proctor</b>
                    <IconButton onClick={handleClick}>
                        <VisibilityTwoToneIcon style={{ color: "white" }} fontSize="large" />
                    </IconButton>
                </Typography>
                <Box sx={{display: { xs: 'block', sm: 'none' } }}>
                    {/* DrawerItem component */}
                </Box>
                <ListMenu>
                    {itemList.map((item) => (
                        <ListItem key={item.text}>
                            <ListItemButton component={Link} to={item.to}
                                sx={{
                                    color: '#fff',
                                    "&:hover": {
                                        backgroundColor: 'transparent',
                                        color: '#1e2a5a',
                                    }
                                }}
                            >
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem>
                        <ListItemButton
                            aria-controls="register-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                            sx={{
                                color: '#fff',
                                "&:hover": {
                                    backgroundColor: 'transparent',
                                    color: '#1e2a5a',
                                }
                            }}
                        >
                            {userName ? userName : "Register"} 
                            
                        </ListItemButton>
                        <Menu
                            id="register-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            getContentAnchorEl={null}
                        >   
                            <MenuItem onClick={handleClose} component={Link} to="/Register">Register/SignIn</MenuItem>
                            <MenuItem onClick={handleClose} component={Link} to="/profile">Profile</MenuItem>
                            <MenuItem onClick={handleClose} component={Link} to="/exam">Exam</MenuItem>
                            <MenuItem onClick={handleClose} component={Link} to="/progress">Progress</MenuItem>
                            <MenuItem onClick={handleClose} component={Link} to="/sign-out">Sign-out</MenuItem>
                        </Menu>
                    </ListItem>
                </ListMenu>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;
