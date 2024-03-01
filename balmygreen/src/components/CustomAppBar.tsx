import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import mainLogo from '../assets/mainLogo.png'

import styles from '../css/mainNavBar.module.css'

const pages = ['ABOUT US', 'PROJECT', 'CONTACT', 'Q&A'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className={styles.navBar}>
      <Container maxWidth="xl" sx={{mt:2, mb:2}} className={styles.inside}>
        <Toolbar disableGutters>
          <img src={mainLogo} alt='Logo' className={styles.logo}/>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end'} }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ 
                  my: 2, color: 'black', display: 'block', padding: '0 20px',
                  fontSize: '14px',
                  letterSpacing: '2px',
                  fontWeight: 'inherit',
                  fontStyle: 'normal',
                  verticalAlign: 'middle',
                  
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;