import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css'
import PaTodos from './components/modes/paTodos/PaTodos';
import ClassicHome from './components/modes/paTodos/classicCards/ClassicHome';
import VerdadShotHome from './components/modes/paTodos/verdadoShot/VerdadShotHome';
import YoNuncaNunca from './components/modes/paTodos/yoNuncaNunca/YoNuncaNunca';

import RompeAmistades from './components/modes/rompeAmistades/RompeAmistades';
import RandomRompeAmistadesHome from './components/modes/rompeAmistades/randomCardsRompeAmistades/RandomRompeAmistadesHome'
import VerdadShotRompeAmistades from './components/modes/rompeAmistades/verdadoShotRompeAmistades/VerdadShotRompeAmistadesHome'
import YoNuncaNuncaRompeAmistades from './components/modes/rompeAmistades/yoNuncaNuncaRompeAmistades/YoNuncaNuncaRompeAmistades';

import Hidratacion from './components/modes/hidratacion/Hidratacion'
import VerdadShotHidratacion from './components/modes/hidratacion/verdadShotHidratacion/VerdadShotHidratacion'
import YoNuncaNuncaHidratacion from './components/modes/hidratacion/yoNuncaNunca/YoNuncaNuncaHidratacion'
import MinutoHidratacion from './components/modes/hidratacion/minutoHidratacion/MinutoHidratacion';
import Hut from './components/modes/hut/Hut';
import NadaDebe from './components/modes/hut/nadaDebe/NadaDebe';
import VerdadShotHut from './components/modes/hut/verdadShot/VerdadShotHut';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/paTodos/*" element={<PaTodos />}/>
        <Route path="/paTodos/classic" element={<ClassicHome />} />
        <Route path="/paTodos/verdadoshot" element={<VerdadShotHome />} />
        <Route path="/paTodos/yonuncanunca" element={<YoNuncaNunca />} />

        <Route path="/rompeAmistades/*" element={<RompeAmistades />} />
        <Route path="/rompeAmistades/random" element={<RandomRompeAmistadesHome/>}/>
        <Route path="/rompeAmistades/verdadoshot" element={<VerdadShotRompeAmistades/>}/>
        <Route path="/rompeAmistades/yonuncanunca" element={<YoNuncaNuncaRompeAmistades/>}/>

        <Route path="/hidratacion/*" element={<Hidratacion />} />
        <Route path="/hidratacion/verdadoshot" element={<VerdadShotHidratacion/>}/>
        <Route path="/hidratacion/yonuncanunca" element={<YoNuncaNuncaHidratacion/>}/>
        <Route path="/hidratacion/minutoHidratacion" element={<MinutoHidratacion/>}/>

        <Route path="/hut/*" element={<Hut />} />
        <Route path='/hut/nadaDebe' element={<NadaDebe/>}/>
        <Route path='/hut/verdadShot' element={<VerdadShotHut/>}/>



      </Routes>
    </Router>
  </React.StrictMode>
);
