import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import NavBar from './NavBar/NavBar';
import Activity from './Activity/Activity';
import Financial from './Financial/Financial';
import Structure from './Structure/Structure';
import Vacancies from './Vacancies/Vacancies';
import Agreement from './Agreement/Agreement';
import Regulatory from './Regulatory/Regulatory';
import Rates from './Rates/Rates';
import Information from './Information/Information';
import News from './News/News';
import Contacts from './Contacts/Contacts';
import { CircularProgress } from '@mui/material';
import Public from './Public/Public';
import Documents from './Documents/Documents';
import Order from './Order/Order';



function App() {
  return (
    <>
  
      <Suspense fallback={<CircularProgress />}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/activity" element={<Activity />} />

          <Route path="/structure" element={<Structure />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/agreement" element={<Agreement />} />
          <Route path="/regulatory" element={<Regulatory />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/order" element={<Order />} />
          <Route path="/public" element={<Public />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="/information" element={<Information />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
