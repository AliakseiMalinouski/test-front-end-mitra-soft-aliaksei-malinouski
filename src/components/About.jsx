import React, { memo } from "react";
import classes from './About.module.css';

export const About = memo(() => {
    return (
        <div className={classes.About}>
           <img src="https://i.ibb.co/zmWSvn5/1706-oooo-plus.png" alt="Me"/> 
           <p>
           Hi! My name is Alexei, I'm 20 years old. I am a part-time student in Poland at the Faculty of Logistics. I've been doing Frontend development for about a year and a half. I was trained on IT-Academy courses, which took 10 months. After that I worked as a freelancer for 2 months. Then I realized that I can't develop as a specialist this way, so I am looking for a permanent job in a company with an interesting product. I continue my daily development training, keeping up with trends in the field. In the future I plan to move to FullStack developer. 
           </p>
        </div>
    )
})