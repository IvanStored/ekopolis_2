import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Box } from '@mui/material';
import BackImg2 from '../../assets/екополіс.webp';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
}));

export default function About() {
  const [expanded, setExpanded] = React.useState({});

  const handleExpandClick = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const vacancies = [
    {
      id: 1,
      title: '🗄 Посада/професія: Бухгалтер',
      requirements: '📋 Вимоги: вища освіта, досвід роботи.',
      responsibilities:
        '📜 Обов’язки: ведення бухгалтерського обліку за допомогою програми "1С бухгалтерія", здійснення нарахування заробітної плати та грошового забезпечення, складання звітності ЕСВ, проведення інвентаризації матеріальних засобів, облік основних засобів та палива.',
      conditions: 'Умови роботи: 5 денний режим роботи.',
      contact: 'Більш детальна інформація: ☎ 098 832 0518',
    },
    {
      id: 2,
      title: '🗄 Посада/професія: Сортувальник відходів',
      requirements: '📋 Вимоги: середня освіта, впорядковані військові документи.',
      responsibilities:
        '📜 Обов’язки: Збирання та сортування вторинної сировини. Приймання, зважування, розсортовування, розкладання, пакування в тару вторинної сировини.',
      conditions: 'Умови роботи: 5 денний режим роботи.',
      contact: 'Більш детальна інформація: ☎ 098 832 0518',
    },
    {
      id: 3,
      title: '🗄 Посада/професія: Водій автотранспортних засобів (вантажний)',
      requirements:
        '📋 Вимоги: наявність відкритих категорій «В» «C» «С1» «СЕ», впорядковані військові документи.',
      responsibilities:
        '📜 Обов’язки: керування автомобілями, які призначені для перевезення вантажів, за різних дорожніх умов; ведення шляхових листів, відзначаючи маршрути слідування, пройдений кілометраж, витрати палива; збір вторинної сировини з м. Херсон; забезпечення коректного професійного водіння автомобіля, що максимально гарантує збереження вантажів та технічно справний стан автомобіля.',
      conditions: 'Умови роботи: 5 денний режим роботи.',
      contact: 'Більш детальна інформація: ☎ 098 832 0518',
    },
  ];
  return (
    <Box
      sx={{
        // backgroundImage: `url(${BackImg2})`,
        backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 40%), rgb(0 0 0 / 40%)),url(${BackImg2})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: 'calc(100vh - 152px)',

        // backgroundColor: ' rgba(242, 249, 242, 0.73)',
        // backdropFilter: 'blur(6px)',
        animation: 'change 10s infinite ease-in-out',
      }}
    >
    
          <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '70px',
          gap: 3,
        }}
      >
        {vacancies.map((vacancy) => (
          <Card key={vacancy.id} sx={{ maxWidth: 600, width: '100%' }}>
            <CardHeader
              title={<Typography variant="h5">{vacancy.title}</Typography>}
              subheader={vacancy.conditions}
              action={
                <ExpandMore
                  expand={expanded[vacancy.id] || false}
                  onClick={() => handleExpandClick(vacancy.id)}
                  aria-expanded={expanded[vacancy.id] || false}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              }
            />
            <Collapse in={expanded[vacancy.id]} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="body1">{vacancy.requirements}</Typography>
                <Typography variant="body1">{vacancy.responsibilities}</Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {vacancy.contact}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </Container>
    </Box>
  );
}
