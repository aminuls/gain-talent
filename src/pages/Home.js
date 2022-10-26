import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../components/Cards';
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
         <Cards classes={classes}></Cards>
      </div>
   );
};

export default Home;