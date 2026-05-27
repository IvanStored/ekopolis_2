import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { styled } from '@mui/material/styles';
import BackImg2 from '../../assets/екополісХерсон2.jpg';

const RootBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    height: 'calc(100vh - 152px)',
  },
}));


export default function Activity() {
  return (
    <RootBox
      sx={{
        backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 40%), rgb(0 0 0 / 40%)),url(${BackImg2})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
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
        {/* <div> */}
        <Typography
          variant="h2"
          style={{
            margin: '0',
            fontSize: '48px',
            color: '#060606',
            fontWeight: '300',
            textAlign: 'center',
            background: '#ffffffde',
            padding: '20px',
            borderRadius: '12px',
            marginBottom: '10px',

          
          }}
        >
      Про КП «ЕКОПОЛІС»
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: '18px',
            color: '#030303',
            background: '#ffffffde',
            // width: '100wv',
            padding: '30px',
            // boxShadow: '0px 4px 20px #d0d7de',
            borderRadius: '12px',
            // maxWidth: '700px',
          }}
        >
          КОМУНАЛЬНЕ ПІДПРИЄМСТВО «ЕКОПОЛІС» ХЕРСОНСЬКОЇ МІСЬКОЇ РАДИ засноване
          на комунальній власності Херсонської міської територіальної громади,
          відповідно до Господарського кодексу України, Цивільного кодексу
          України, Закону України «Про місцеве самоврядування в Україні» та
          згідно з іншими нормативно-правовими актами, передбаченими чинним
          законодавством України. Підприємство створено з метою отримання
          прибутку від господарської діяльності, спрямованої на задоволення
          потреб юридичних та фізичних осіб шляхом здійснення господарської
          діяльності у сфері з провадження діяльності з твердими побутовими
          відходами та експлуатації міського звалища (полігону) твердих
          побутових відходів, шляхом надання послуг або виконання робіт,
          відповідно до предмета діяльності Підприємства в установленому чинним
          законодавством порядку.
        </Typography>
        {/* </div> */}
      </Container>
    </RootBox>
  );
}
