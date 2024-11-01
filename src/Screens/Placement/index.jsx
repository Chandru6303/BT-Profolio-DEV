import React from "react";
import Header from '../../Components/Header'
import { AboutIllustration } from "../../Assets";
import PlaceCard from "./PlaceCard";
import { PlacementGraph,Bubble_bg } from "../../Assets";
import Footer from "../Footer";
import "./Placement.scss"

const Placement = (props) =>{
    let data = props?.data?.StudentReviews || [];
    
    let statistics = props?.data;

    return(
        <div className="Placement">
            <div className="Head_wrap">
                <Header/>
            </div>
            <div className="Placement_banner" style={{backgroundImage:`url(${Bubble_bg})`,backgroundRepeat:'no-repeat',backgroundSize:"cover",backgroundAttachment:"fixed"}}>
                <div className="banner_left">
                    <h1>Fostering a <br /> Better Tomorrow <br />through the power of learning in action</h1>
                </div>
                <div className="banner_right">
                    <div className="bubble first">
                        <p><span>{statistics.studentsPlaced}+</span> <br />Student Placed</p>
                    </div>
                    <div className="bubble sec">
                        <p><span>{statistics.highestPackage}</span> <br />Highest Package</p>
                    </div>
                    <div className="bubble third">
                        <p><span>{statistics.hiringCompanies}+</span> <br />Hiring Companies</p>
                    </div>
                    <div className="bubble four">
                        <p><span>{statistics.productOffers}+</span> <br />Product Offers</p>
                    </div>
                </div>
            </div>
            <h1>Our top 100+ Hiring Companies, <br />Where you can find a high-paying jobs</h1>
            <img src={PlacementGraph} alt="graph" />
            <h1>Real Stories, Real Results: <br />Our Students Success Stories</h1>
            <div className="PlaceCard_container">
                {
                    (data).map((item)=>
                        <PlaceCard item={item}/>
                    )
                }
            </div>
            <h1>What student says about our training</h1>
            <p>At Better Tomorrow, we assist in developing practical skills with hands-on expertise and enhance your learning ability to excel in your preferred domain. The feedback below is genuine, without a single letter altered.</p>
            <div className="training">
                <div className="training_box" style={{backgroundColor:"#FFC727"}}>
                Before attending this program, my knowledge of MERN was limited to a basic understanding of its components. However, after completing the training, I feel much more confident and equipped with the necessary skills to delve deeper into MERN development. I have gained a more comprehensive understanding of the architecture, tools, and best practices involved in MERN stack development. This newfound knowledge has boosted my confidence and motivation to further explore and master MERN.                
                </div>
                <div className="training_box" style={{backgroundColor:"#FF8383"}}>
                At all times the trainer keep everyone's attention on the listing(i,e) out of 70/70 members. 1st time i didn't sleep for a sec in whole 8 hrs in these 9 days. Your teaching and lab sections were more intractive to me. The main thing that you have teached is how to understand and learn by own(i,e) by searching. In each concepts you had compared the java lang with other languages that Why java is more preferable and special and unique thing in java so i like java more than before. In each problems you told everything                 
                </div>
                <div className="training_box" style={{backgroundColor:"#7ABCFF"}}>
                I haven't really learnt Java from any training like this, because everyone just teaches the basic outline and no one solves us any problem and explain each and every words and logic. But here sir repeated the concepts whenever we ask without hesitating and also asked us what concepts we want. The way of teaching and dedication is the unique thing in this training session.                
                </div>
                <div className="training_box" style={{backgroundColor:"#FF8383"}}>
                Being a student from biology background in both school and college I was not much interested in computer related things even after the completion of few trainings in our college itself. At the start of this dream fit I thought I would think the same way after completing this. But to be honest it helped me explore new things and I started liking developing web. The way the team lead the session interactive and friendly was an ease for me to cope up with a completely new set of skill.                </div>
                <div className="training_box" style={{backgroundColor:"#7ABCFF"}}>
                This training was very useful for me as I know java only the syntax and basics even with that I am not clear. I know the theory and how to implement it but I didn't know why we are going for that particular concept and I forgot those concepts when days goes by. But now I am having a clarity that how to approach a concept and how to learn the data structures step by step and this was the first time I'd done the programs in home and approach any prgrams from the scratch..                </div>
                <div className="training_box" style={{backgroundColor:"#F7C651"}}>
                The way of explaining the topics makes your training unique and also the way of approaching, the efforts you take to make every single one of us understand the concepts is really great and also the way you explain a problem statement and giving us time to approach the problem from different perspectives and at last sharing your point of view in solving the problem is really good.                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Placement