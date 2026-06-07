import * as React from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box, Container } from '@mui/material';
import CardStructure from './CardStructure';
import BackImg2 from '../../assets/екополісХерсон1.jpg';
// import { margin } from '@mui/system';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));
function createData(position, name, name2) {
  return { position, name, name2 };
}

const rows = [
  createData('Директор ','Мелашич Сергій','Олександрович')
];

export default function CustomizedTables() {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 40%), rgb(0 0 0 / 40%)),url(${BackImg2})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: 'calc(100vh - 152px)',
        '@media (max-width: 900px)': {
          height: '100vh',
        },
      }}
    >
      <Container
        style={{
          paddingTop: '50px',
          paddingBottom: '50px',
          display: 'flex',

          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ flexGrow: 1, width: '100%' }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 4, md: 8 }}
            sx={{ height: '100vh' }}
            style={{
              justifyContent: 'center',
              margin: '0',
              width: 'auto',
              height: '100%',
            }}
          >
            {rows.map((row, index) => (
              <Grid
                item
                sm={2}
                xs={3}
                md={2.4}
                key={index}
                style={{
                  padding: '10px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {/* <Item> */}
                <CardStructure
                  name={row.name}
                  name2={row.name2}
                  position={row.position}
                />
                {/* </Item> */}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
