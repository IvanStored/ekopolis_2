import React from 'react';

import { Toolbar, useMediaQuery, useTheme } from '@mui/material';

import DrawerComp from './Drawer';

import TestMenuHover4 from './TestMenuHover4';

const Header = () => {


  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <React.Fragment>
      <Toolbar
        style={{
          background: 'white',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {isMatch ? (
          <>
            <DrawerComp />
          </>
        ) : (
          <TestMenuHover4 />
        )}
      </Toolbar>
    </React.Fragment>
  );
};

export default Header;
