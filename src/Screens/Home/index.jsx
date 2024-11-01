import React from "react";
import Header from "../../Components/Header";
import "./Home.scss"
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";
import Footer from "../Footer";

const Home = (props) =>{

    let first = props.data?.First[0];
    let third = props.data?.Second[0];
    let fourth = props.data?.Fourth[0];
    let fifth = props.data?.Fifth[0];
    
    return(
        <div className="Home">
            <Header/>
            <First data = {first}/>
            <Second />
            <Third data = {third} />
            <Fourth data = {fourth}/>
            <Fifth data = {fifth}/>
            <Footer/>
        </div>
    )
}

export default Home