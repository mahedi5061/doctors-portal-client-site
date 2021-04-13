import React from 'react';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import ExceptionalDental from '../ExceptionalDental/ExceptionalDental';
 import Footer from './../../SharedComponent/Footer/Footer'
import Header from '../Header/Header/Header';
import HomePageBlog from '../HomePageBlog/HomePageBlog';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
         <>
              <Header></Header>
              <Services></Services>
              <ExceptionalDental></ExceptionalDental>
              <MakeAppointment></MakeAppointment>
              <Testimonials></Testimonials>
              <HomePageBlog></HomePageBlog>
              <Doctors></Doctors>
              <Contact></Contact>
              <Footer></Footer>
         </>
    );
};

export default Home;