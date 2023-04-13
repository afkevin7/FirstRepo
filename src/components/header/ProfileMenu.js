import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import "./style.css";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div 
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='profile-menu-flex'> 
            <MenuIcon/>
            <AccountCircleRoundedIcon/>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{".MuiPaper-root":{borderRadius:"1rem",minWidth:"200px",boxShadow:"0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)"}}}
      >
        <MenuItem onClick={handleClose} className='menu-items'>Signup</MenuItem>
        <MenuItem onClick={handleClose}>Login</MenuItem>
        <div style={{height:"1px",backgroundColor:"var(--grey)",width:"100%"}}></div>
        <MenuItem onClick={handleClose}>Airbnb Your Home</MenuItem>
        <MenuItem onClick={handleClose}>Host an experience</MenuItem>
        <MenuItem onClick={handleClose}>Help</MenuItem>
      </Menu>
    </div>
  );
}