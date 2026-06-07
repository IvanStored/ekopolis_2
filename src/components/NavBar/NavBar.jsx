import * as React from 'react';
import { AppBar, Typography, styled, Container, Box } from '@mui/material';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
// import TelegramIcon from '@mui/icons-material/Telegram';
// import FacebookIcon from '@mui/icons-material/Facebook';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import { ImgClose } from './NavBar.styled';

import wind from '../../assets/logo5.jpg';
import wind1 from '../../assets/logo4.png';

import Header from './NavDetail/Header';

export default function NavBar() {
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: '64px',
    color: '#000336',
    fontWeight: 'bold',
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px',
    },
  }));
  const DisBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
    },
  }));
  return (
    <>
      <AppBar
        color="transparent"
        style={{
          boxShadow: 'none',
          position: 'static',
          backgroundColor: '#EFF0EC',
          boxSizing: 'inherit'
        }}
      >
        <Container
          style={{
            display: 'flex',
            paddingTop: '10px',
            paddingBottom: '10px',
            justifyContent: 'space-between',
          }}
        >
          <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',      // вертикальное выравнивание лого и текста
            gap: '10px',               // отступ между лого и текстом
            textDecorationLine: 'none',
          }}
        >
          {/* Отдельный блок для фонового изображения */}
          <div
            style={{
              width: '50px',
              height: '47px',
              backgroundImage: `url(${wind})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              flexShrink: 0,           // чтобы лого не сжималось
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Title
              variant="h1"
              style={{
                margin: '0',
                fontSize: '40px',
                color: '#060606',
                fontWeight: '300',
              }}
            >
              Екополіс
            </Title>
            <Title
              variant="h2"
              style={{
                margin: '0',
                fontSize: '10px',
                color: '#060606',
                fontWeight: '300',
              }}
            >
              КОМУНАЛЬНЕ ПІДПРИЄМСТВО
            </Title>
          </div>
          </Link>
          <DisBox>
            <div style={{marginRight:'10px'}}>
            <Link
              to="https://wa.me/380988320518"
              style={{ textDecoration: 'none' }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: '18px',
                  color: '#030303',
                  padding: '5px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <WhatsAppIcon style={{ marginRight: '10px' }} />
                +380988320518
              </Typography>
            </Link>
            <Link to="tel:+380689451256" style={{ textDecoration: 'none' }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: '18px',
                  color: '#030303',

                  padding: '5px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <LocalPhoneTwoToneIcon style={{ marginRight: '10px' }} />
                +380689451256
              </Typography>
            </Link>
            </div>
            <div style={{marginRight:'10px'}}>
            <Link
              to="mailto:kpekopolis@gmail.com"
              style={{
                textDecoration: 'none',
                fontSize: '18px',
                color: '#030303',
                padding: '5px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <EmailTwoToneIcon
                style={{ marginRight: '10px', color: '#030303' }}
              />
              kpekopolis@gmail.com
            </Link>

            <Link
              to="https://www.facebook.com/profile.php?id=61554152976488"
              style={{ textDecoration: 'none' }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: '18px',
                  color: '#030303',
                  padding: '5px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <FacebookIcon style={{ marginRight: '10px' }} />
                Facebook
              </Typography>
            </Link>
            </div>
            <Link
              to="https://miskrada.kherson.ua/"
              style={{
                display: 'flex',

                background:
                  'linear-gradient(to bottom, #042EFF 0%, #FFFFff 50%, #FFFF09 100%)',

                backgroundRepeat: 'no-repeat',

                backgroundPosition: 'center',
                backgroundSize: 'contain',
                textDecorationLine: 'none',
              }}
            >
              <ImgClose src={wind1} alt="" />
              {/* <img
              sx={{ xs: { display: 'none' } }}
              src={`${wind1}`}
              alt=""
              width="130px"
              height="50px"
            /> */}
            </Link>
          </DisBox>
        </Container>

        <Header />
        {/* <NavMenu /> */}
      </AppBar>
    </>
  );
}
