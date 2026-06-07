import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
import { Box, Container, Typography } from '@mui/material';
// import BackImg2 from '../../assets/kherson.jpg';
import BackImg2 from '../../assets/екополісХерсон2.jpg';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.grey,
    color: theme.palette.common.white,
    border: '1px solid #000',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    // width: '54px',
    border: '1px solid #000',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

}));



const wasteData = [
  {
    category: 'Змішані побутові відходи',
    rows: [
      { code: '20 03 01', nationalName: 'Змішані побутові відходи', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '124,00' },
    ],
  },
  {
    category: 'Великогабаритні відходи',
    rows: [
      { code: '20 03 07', nationalName: 'Великогабаритні відходи', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '124,00' },
    ],
  },
  {
    category: 'Ремонтні відходи',
    rows: [
      { code: '20 03 99', nationalName: 'Інші побутові відходи цієї підгрупи', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '124,00' },
    ],
  },
  {
    category: 'Роздільно зібрані відходи',
    rows: [
      { code: '20 01', nationalName: 'Окремо зібрані фракції (крім зазначених за кодом 15 01)', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '124,00' },
      { code: '20 01 01', nationalName: 'Папір і картон', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '124,00' },
      { code: '20 01 02', nationalName: 'Скло', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '124,00' },
      { code: '20 01 40', nationalName: 'Метал', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '124,00' },
      { code: '20 01 39', nationalName: 'Пластмаса', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '124,00' },
    ],
  },
  {
    category: 'Відходи зелених насаджень, від домогосподарств населення',
    rows: [
      { code: '20 02 01', nationalName: 'Відходи, що піддаються біологічному розкладу', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '124,00' },
    ],
  },
  {
    category: 'Вуличний змет',
    rows: [
      { code: '20 03 03', nationalName: 'Змет від прибирання вулиць', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '124,00' },
    ],
  },
  {
    category: 'Садові та паркові відходи',
    rows: [
      { code: '20 02', nationalName: 'Садові та паркові відходи (включаючи відходи кладовищ)', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '124,00' },
    ],
  },
  {
    category: 'Одяг',
    rows: [
      { code: '20 01 10', nationalName: 'Одяг', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '124,00' },
    ],
  },
  {
    category: 'Текстиль',
    rows: [
      { code: '20 01 11', nationalName: 'Текстиль', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '124,00' },
    ],
  },
  {
    category: 'Тирса, деревина, відходи деревини',
    rows: [
      { code: '03 01 05', nationalName: 'Тирса, стружка, обрізки, деревина, ДСП і шпон інші, ніж зазначені за кодом 03 01 04', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '124,00' },
    ],
  },
  {
    category: 'Відходи виробництва та переробки зернових',
    rows: [
      { code: '02 03 99', nationalName: 'Інші відходи цієї підгрупи', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '140,00' },
    ],
  },
  {
    category: 'Некондиційні харчові продукти',
    rows: [
      { code: '02 03 04', nationalName: 'Сировина та продукти, що не придатні для споживання або переробки', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '124,00' },
    ],
  },
  {
    category: 'Мулові відходи очисних споруд, шлам, пісковий осад',
    rows: [
      { code: '19 08 05', nationalName: 'Шлами від оброблення міських стічних вод', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '200,00' },
      { code: '19 08 02', nationalName: 'Відходи від знепісочування', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '200,00' },
    ],
  },
  {
    category: 'Відходи будівництва та знесення',
    rows: [
      { code: '17 01', nationalName: 'Бетон, цегла, облицювальна плитка та кераміка', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '124,00' },
      { code: '17 02', nationalName: 'Деревина, скло та пластмаси', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '124,00' },
      { code: '17 09 04', nationalName: 'Змішані відходи будівництва і знесення будівель інші, ніж зазначені за кодами 17 09 01, 17 09 02, 17 09 03', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '124,00' },
    ],
  },
  {
    category: 'Матеріали пакувальні змішані, зіпсовані, відпрацьовані',
    rows: [
      { code: '15 01', nationalName: 'Упаковка (включаючи роздільно зібрану упаковку з побутових відходів)', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '190,00' },
      { code: '15 01 01', nationalName: 'Паперова та картонна упаковка', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '190,00' },
      { code: '15 01 02', nationalName: 'Пластмасова упаковка', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '190,00' },
      { code: '15 01 03', nationalName: `Дерев'яна упаковка`, operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '190,00' },
      { code: '15 01 05', nationalName: 'Комбінована (композитна) упаковка', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '190,00' },
      { code: '15 01 06', nationalName: 'Змішана упаковка', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '190,00' },
      { code: '15 01 07', nationalName: 'Скляна тара (упаковка)', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '190,00' },
      { code: '15 01 09', nationalName: 'Текстильна упаковка', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '190,00' },
    ],
  },
  {
    category: 'Ґрунт та каміння',
    rows: [
      { code: '17 05 04', nationalName: 'Ґрунт та каміння інші, ніж зазначені за кодом 17 05 03', operation: 'D1 РОЗМІЩЕННЯ НА ПОВЕРХНІ ЧИ В ЗЕМЛІ, У ТОМУ ЧИСЛІ ЗАХОРОНЕННЯ', price: '124,00' },
    ],
  },
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
        <Typography
          variant="body2"
          sx={{
            fontSize: '28px',
            color: '#030303',
            background: '#ffffffde',
            maxWidth: '700px',
            padding: '10px 20px',
            // boxShadow: '0px 4px 20px #d0d7de',
            borderRadius: '12px',
            marginBottom: '20px',
          }}
        >
          ТАРИФ
        </Typography>
        <TableContainer component={Paper} sx={{ maxWidth: 900 }}>
          <Table  sx={{ maxWidth: 900 }} aria-label="customized table">
            <TableHead>
              <TableRow style={{ backgroundColor: 'grey' }}>
                <StyledTableCell>Назва відходів</StyledTableCell>
                <StyledTableCell>
                  Код згідно національного переліку
                </StyledTableCell>
                <StyledTableCell>
                  Назва відходів згідно національного переліку
                </StyledTableCell>
                <StyledTableCell>
                  Перелік операцій з видалення відходів
                </StyledTableCell>
                <StyledTableCell >
                  Вартість послуги з ПДВ (грн/т)
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {wasteData.map((category, index) => (
                category.rows.map((row, rowIndex) => (
                  <StyledTableRow key={`${index}-${rowIndex}`}>
                    {rowIndex === 0 && (
                      <StyledTableCell rowSpan={category.rows.length} sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                        {category.category}
                      </StyledTableCell>
                    )}
                    <StyledTableCell>{row.code}</StyledTableCell>
                    <StyledTableCell>{row.nationalName}</StyledTableCell>
                    <StyledTableCell>{row.operation}</StyledTableCell>
                    <StyledTableCell align="center">{row.price}</StyledTableCell>
                  </StyledTableRow>
                ))
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      
      </Container>
    </Box>
  );
}
