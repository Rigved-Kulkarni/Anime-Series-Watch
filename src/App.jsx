import React from 'react';
import Card from './Card';
import Sdata from "./Sdata";
import Netflix from './Netflix';
import Anime from './Anime';

function nCard(val) {
    return (
        <Card
        imgSrc={val.imgSrc}
        title={val.title}
        link={val.link}
        sName={val.sName}
/>
    )
};

// const fav = "Netflix";
// const FavS = () => {
//     if(fav === "Anime") {
//         return (
//             // <Card
//             //     key={Sdata[0].id}
//             //     imgSrc={Sdata[0].imgSrc}
//             //     title={Sdata[0].title}
//             //     link={Sdata[0].link}
//             //     sName={Sdata[0].sName}
//             // />
//             <Anime/>
//         );
//     }
//     else {
//         return (
//             <Netflix/>
//             // <Card
//             //     key={Sdata[9].id}
//             //     imgSrc={Sdata[9].imgSrc}
//             //     title={Sdata[9].title}
//             //     link={Sdata[9].link}
//             //     sName={Sdata[9].sName}
//             // />
            
           
//         );
//     }
// }

const App = () => (
<>
<h1 className="heading_style">Top Anime Series</h1>
{Sdata.map(nCard)};
{/* {Sdata.map((val, index) => {
    console.log(index)
    return (
        <Card
        imgSrc={val.imgSrc}
        title={val.title}
        link={val.link}
        sName={val.sName}
/>
    );
    
    
})}; */}
{/* <FavS/> */}


{/* <Card
    imgSrc={Sdata[1].imgSrc}
    title={Sdata[1].title}
    link={Sdata[1].link}
    sName={Sdata[1].sName}
/>
<Card
    imgSrc={Sdata[2].imgSrc}
    title={Sdata[2].title}
    link={Sdata[2].link}
    sName={Sdata[2].sName}
/>
<Card
    imgSrc={Sdata[3].imgSrc}
    title={Sdata[3].title}
    link={Sdata[3].link}
    sName={Sdata[3].sName}
/>
<Card
    imgSrc={Sdata[4].imgSrc}
    title={Sdata[4].title}
    link={Sdata[4].link}
    sName={Sdata[4].sName}
/>
<Card
    imgSrc={Sdata[5].imgSrc}
    title={Sdata[5].title}
    link={Sdata[5].link}
    sName={Sdata[5].sName}
/> */}


</>);

export default App;