
import React from 'react';
import Navbar from './../Navbar/Navbar';
import Header from './Header/Header';
import News from './News/News';
import WhyCs from './WhyCs/WhyCs';
import UrFuture from './UrFuture/UrFuture';
import Capabilities from './Capabilities/Capabilities';
import QuestionsBar from './QuestionsBar/QuestionsBar';
import FormSection from './FormSection/FormSection';
import Footer from './../Footer/Footer';


const Main = (props) => {
    return (
        <div>
            <Navbar />
            <Header />
            <News />
            <WhyCs />
            <UrFuture />
            <Capabilities /> 
            <QuestionsBar />
            <FormSection />
            <Footer /> 
        </div>

    )
}

export default Main;