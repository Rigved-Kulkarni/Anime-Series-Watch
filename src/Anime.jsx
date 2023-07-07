import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
const Anime = () => {
    return(
        <Card
            key={Sdata[0].id}
            imgSrc={Sdata[0].imgSrc}
            title={Sdata[0].title}
            link={Sdata[0].link}
            sName={Sdata[0].sName}
        />
    );
}

export default Anime;