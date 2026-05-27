import React from 'react';
import { useEffect, useState, useRef } from 'react';
import Typed from 'typed.js';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import images from './data';



const Hero = () => {
  const elm = useRef(null);
  const [curentState, setCurentState] = useState(0);
  useEffect(() => {
    const typed = new Typed(elm.current, {
      strings: ['Вас Вітає КП"Екополіс"', 'ХЕРСОН - ЦЕ УКРАЇНА!'],
      typeSpeed: 100,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  // const [curentState, setCurentState] = useState(0);
  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ['ХЕРСОН - ЦЕ УКРАЇНА!'],
  //     // strings: ['Вас Вітає КП"Екополіс"'],
  //     typeSpeed: 100,
  //     showCursor: false,
  //   });

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (curentState === 2) {
        setCurentState(0);
      } else {
        setCurentState(curentState + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [curentState]);

 

  return (
    <Box
      sx={{
        backgroundImage: `url(${images[curentState].url})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: 'calc(100vh - 152px)',

        transition: '1500ms all ease-in-out',
      }}
    >
      <Container
        style={{
          paddingTop: '50px',
        }}
      >
        <Box
          sx={{ flex: '1' }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2px',
          }}
        >
          <Typography
            ref={elm}
            variant="h1"
            sx={{
              fontSize: '50px',
              color: '#060606',
              fontWeight: '500',
              backgroundColor: '   rgb(244 253 86 / 73%)',
              backdropFilter: 'blur(6px)',
              width: 'fit-content',
              padding: '5px',
              borderRadius: '12px',
              marginBottom: '10px',
            }}
          ></Typography>
          {/* <Typography
            ref={el}
            variant="h2"
            sx={{
              fontSize: '48px',
              color: '#060606',
              fontWeight: '500',
              backgroundColor: ' rgb(86 174 253 / 73%)',
              backdropFilter: 'blur(6px)',
              width: 'fit-content',
              padding: '5px',
              borderRadius: '12px',
            }}
          ></Typography> */}
          {/* <ImgBack src={flag} alt="" /> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
