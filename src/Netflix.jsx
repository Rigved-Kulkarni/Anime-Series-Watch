import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
const Netflix = () => {
    return(
        <Card
            key={Sdata[9].id}
            imgSrc={Sdata[9].imgSrc}
            title={Sdata[9].title}
            link={Sdata[9].link}
            sName={Sdata[9].sName}
        />
    );
}

export default Netflix;