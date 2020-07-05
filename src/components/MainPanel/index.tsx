import React from 'react';

import vectorImg from '../../assets/vector.svg';

import { Title } from './styles';
// import api from './services/api';

// interface List {
//   name: string;
//   description: string;
//   prices: {
//     monthly: number;
//     yearly: number;
//   };
//   features: [string];
//   attendant: {
//     cost: number;
//   };
// }

const MainPanel: React.FC = () => {
  return (
    <>
      <Title>
        <div>
          <img src={vectorImg} alt="peçaZap" />
          <h1>Plano 1.0</h1>
        </div>
        <p>Perfeito para experimentar o peçaZap</p>
      </Title>
    </>
  );
};

export default MainPanel;
