import React from 'react';
import SlideCaro from '../components/SlideCaro';
import SvgGen from '../components/SvgGen';
import TechCard from '../components/TechCard';

const Home = () => {
   return (
      <div>
         <SlideCaro></SlideCaro>
         <SvgGen></SvgGen>
         <TechCard></TechCard>
      </div>
   );
};

export default Home;