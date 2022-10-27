import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../components/Cards';
import Packages from '../components/Packages';
import SlideCaro from '../components/SlideCaro';
import SvgGen from '../components/SvgGen';
import TechCard from '../components/TechCard';

const Home = () => {
   const classes = useLoaderData();
   // console.log(classes);
   return (
      <div>
         <SlideCaro></SlideCaro>
         <SvgGen></SvgGen>
         <TechCard></TechCard>
         <div className='container'><Cards classes={classes} title="Popular Classes"></Cards></div>
         <Packages></Packages>
      </div>
   );
};

export default Home;