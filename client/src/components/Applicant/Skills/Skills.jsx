import React from "react";
import './Skills.scss';

const Skills = (props) => {
    return (
        <section class="skills">
            <div class="container">
                <div class="skills-content">
                    <img src="Images/ApplicantImages/neartextphoto.png" class="skills-img" alt="" />
                    <p class="skills-text">
                        <b>Студенти спеціальності отримують теоретичні та практичні навички роботи з операційними системами (Windows/Linux) і вміння розв’язувати такі завдання:</b><br/>
                        - <span>теорія інформації</span>, що вивчає процеси, пов’язані з передачею, прийомом, перетворенням і зберіганням інформації;<br/>
                        - створення, розробка, супроводження та тестування програмного забезпечення з використанням мов високого рівня (C/C++, C#, Pascal, Java, PHP та інші);<br/>
                        - <span>розробка Web-сторінок</span> на основі технології html;<br/>
                        - створення, управління та ефективне використання електронних баз даних (SQL та інші);<br/>
                        - побудова комп’ютерних мереж, <span>програмування мережевих додатків</span> (принципи підключення комп'ютера до мережі, можливості надання ресурсів і використання мережевих ресурсів у локальній мережі);<br/>
                        - <span>захист інформації в мережах</span> (узагальнення прийомів, розробка методів і засобів захисту даних).<br/>
                        <p class="botton-text"><b>Випускники коледжу за даною спеціальністю отримують атестат про середню освіту, робітничу кваліфікацію за професією “Оператор комп'ютерного набору” та диплом молодшого спеціаліста – техніка-програміста.</b></p>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Skills;