import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Switch,
  Menu,
  MenuItem,
  Box,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import {
  Menu as MenuIcon,
  DarkMode,
  LightMode,
  AutoAwesome,
  Business,
  Cases,
  Info,
  Close,
} from '@mui/icons-material';
import { logo } from '../assets';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [solutionsAnchorEl, setSolutionsAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleSolutionsClick = (event) => {
    setSolutionsAnchorEl(event.currentTarget);
  };

  const handleSolutionsClose = () => {
    setSolutionsAnchorEl(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleSolutionsClose();
    setMobileMenuOpen(false);
  };

  const navItems = [
    {
      label: 'Solutions',
      onClick: handleSolutionsClick,
      icon: <Business />,
      dropdownItems: [
        { label: 'Logo Generator', path: '/logo-generator' },
        { label: 'SEO Research', path: '/seo-research' },
        { label: 'Task Manager CRM', path: '/task-manager' },
        { label: 'Ideas Generator', path: '/ideas-generator' },
      ],
    },
    {
      label: 'Case Studies',
      path: '/case-studies',
      icon: <Cases />,
    },
    {
      label: 'About',
      path: '/about',
      icon: <Info />,
    },
  ];

  const renderMobileMenu = () => (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
      PaperProps={{
        sx: {
          width: 240,
          backgroundColor: darkMode ? '#121212' : '#ffffff',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <IconButton
          onClick={() => setMobileMenuOpen(false)}
          sx={{ mb: 2 }}
        >
          <Close />
        </IconButton>
        <List>
          {navItems.map((item) => (
            <React.Fragment key={item.label}>
              {item.dropdownItems ? (
                <>
                  <ListItem>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItem>
                  <List component="div" disablePadding>
                    {item.dropdownItems.map((dropdownItem) => (
                      <ListItem
                        button
                        key={dropdownItem.label}
                        onClick={() => handleNavigate(dropdownItem.path)}
                        sx={{ pl: 4 }}
                      >
                        <ListItemText primary={dropdownItem.label} />
                      </ListItem>
                    ))}
                  </List>
                </>
              ) : (
                <ListItem
                  button
                  onClick={() => handleNavigate(item.path)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItem>
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: darkMode ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box
          onClick={() => navigate('/')}
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <AutoAwesome sx={{ mr: 1 }} />
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              height: { xs: 45, sm: 60, md: 75 },
              display: 'flex',
              mr: 3,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
        </Box>

        {isMobile ? (
          <IconButton
            color="inherit"
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {navItems.map((item) => (
              <React.Fragment key={item.label}>
                {item.dropdownItems ? (
                  <>
                    <Button
                      color="inherit"
                      onClick={item.onClick}
                    >
                      {item.label}
                    </Button>
                    <Menu
                      anchorEl={solutionsAnchorEl}
                      open={Boolean(solutionsAnchorEl)}
                      onClose={handleSolutionsClose}
                      MenuListProps={{
                        sx: {
                          backgroundColor: darkMode ? '#121212' : '#ffffff',
                          border: '1px solid',
                          borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                        },
                      }}
                    >
                      {item.dropdownItems.map((dropdownItem) => (
                        <MenuItem
                          key={dropdownItem.label}
                          onClick={() => handleNavigate(dropdownItem.path)}
                        >
                          {dropdownItem.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                ) : (
                  <Button
                    color="inherit"
                    onClick={() => handleNavigate(item.path)}
                  >
                    {item.label}
                  </Button>
                )}
              </React.Fragment>
            ))}
            <Button
              variant="contained"
              onClick={() => navigate('/create-post')}
              sx={{
                ml: 2,
                backgroundColor: darkMode ? '#fff' : '#000',
                color: darkMode ? '#000' : '#fff',
                '&:hover': {
                  backgroundColor: darkMode ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)',
                },
              }}
            >
              Create
            </Button>
            <IconButton
              onClick={() => setDarkMode(!darkMode)}
              color="inherit"
              sx={{ ml: 1 }}
            >
              {darkMode ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Box>
        )}
      </Toolbar>
      {renderMobileMenu()}
    </AppBar>
  );
};

export default Navbar; 