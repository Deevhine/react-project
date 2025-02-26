import React from "react";
import woman from "../assets/photo-1438761681033-6461ffad8d80.jpeg";
import girl from "../assets/angelica_dass_image27-85.webp";
import man from "../assets/pexels-photo-614810.jpeg";
import baby from "../assets/images.jpeg";
import group  from "../assets/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"

const FirstPage =(props)=>{
    const pop = [
        {
          name:"Divine",
          age:20,
          img: woman,
          status:"lorem ipsum dolor sit amet, consectetur"
        },
        {
          name:"Rebecca",
          age:35,
          img: girl,
          status:"lorem dolor sit amet dolor sit amet conssshum dolor"
        },
        {
          name:"Pertusalr",
          age:30,
          img: man,
          status:"brief description consectetur people are wicked"
        },
        {
          name:"Provindence",
          age:20,
          img: baby,
          status:"Roses are read voilet are blue i kill for a living"
        },
        {
          name:"John Mark",
          age:25,
          img: group,
          status:"lorem ipsum dolor sit amet, consectetur"
        }
      ] ; 
    return(
        <>
            <div className="container">
                {pop.map((char, index) => (
                    <div key={index} className="card">
                        <div className="img-container">
                            <img src={char.img} alt={char.name} />
                        </div>
                        <div className="content">
                            <h2>{char.name}</h2>
                            <p>{char.age} years old</p>
                            <h4>{char.status}</h4>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}



export default FirstPage;