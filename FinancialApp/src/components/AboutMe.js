import React from 'react'
import { Link } from 'react-router-dom';
import kanny from '../assets/imgs/kanny.jpg';
import {Img,ChartDivImg } from './Styles'




const AboutMe = () => {

  return (
        <>
    <ChartDivImg >
    <div className="container-fluid">
        <div className="row mt-5">
            <div className="offset-1 col-5">
                <div className="card">
                    <div>  
                        <Img src={kanny} alt="BigCo Inc. logo"/>
                    </div>
                </div>
            </div>
            <div className=" col-6">
                <h2>Kanny Mohamad</h2>
                <p className="title">Full-stack Developer</p>
                <a  href={"https://github.com/kannyg87"} target="_blank">Github </a>&nbsp;    
                <a  href={"https://www.linkedin.com/in/kannymohamad/"} target="_blank">LinkedIn</a>
                <p>kanny.ghafour87@gmail.com</p>
                <Link className= "badge badge-warning w-50 h-90 text-center" target="_blank" to="http://kanny.us/"> <h3>Portfolio</h3></Link>
                
            </div>
        </div>
    </div> 
                
    </ChartDivImg>
        </>
    )
    } 

export default AboutMe;
