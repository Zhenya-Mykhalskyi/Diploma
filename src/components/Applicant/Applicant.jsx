import React from "react";
import FormSection from "../Main/FormSection/FormSection";
import QuestionsBar from "../Main/QuestionsBar/QuestionsBar";
import './Applicant.scss';
import Reviews from "./Reviews/Reviews";
import Skills from "./Skills/Skills";
import Timetables from "./Timetables/Timetables";



const Applicant =(props) => {
    return (
       <div>
           <Timetables />
           <Reviews />
           <Skills />
           <QuestionsBar />
           <FormSection />
       </div>
    )
}

export default Applicant;