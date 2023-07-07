import React from "react";

function Card(props) {
    return(
      <div className="cards">
        <div className="card">
          <img src={props.imgSrc} alt="mySeries" className="card_img" width="266px" height="400px"/>
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">{props.sName}</h3>
            <a href={props.link} target= "#">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    );
  }


  export default Card;
  