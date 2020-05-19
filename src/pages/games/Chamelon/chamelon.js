import React,{useState, useEffect,useRef} from 'react'
import "./chamelon.css";
import leftArrow from '../../../assets/left-arrow.svg';
import rightArrow from '../../../assets/right-arrow.svg';
import Desert from '../../../assets/desert.jpg';
import RedTrees from '../../../assets/redtrees.jpg';
import Dal from '../../../assets/dal.jpg';
import ChameleonImage from './chameleonImage';
import Alps from '../../../assets/alps.jpg';
import Bank from '../../../assets/bank.jpg';

const Chamelon = () => {
    const [index,setIndex] = useState(2);
    const backgroundRef = useRef(null);
    const svg = document.getElementById('chameleon-svg');
    console.log(svg);
    const imageGallery = [
        {
            id:1,
            image:`url(${Dal})`,
            fillColor:'green',
            top:'58px'
        },
        {
            id:2,
            image:`url(${Desert})`,
            fillColor:'#E49135',
            top:'216px'
        },
        {
            id:3,
            image:`url(${RedTrees})`,
            fillColor:'red',
            top:'200px'
        },
        {
            id:5,
            image:`url(${Alps})`,
            fillColor:'#b77954',
            top:'310px'
        },
        {
            id:5,
            image:`url(${Bank})`,
            fillColor:'#a4ac83',
            top:'310px'
        },
       
    ]

    useEffect(() => {
       if(backgroundRef.current) {
          if(index > imageGallery.length-1) {
              setIndex(0);
          }
          backgroundRef.current.style.backgroundImage = imageGallery[index] &&imageGallery[index].image;
          
       }
       
        
    },[index,imageGallery]);
    
    return (
        <div className="chamelon-wrapper">
           
            <div ref={backgroundRef} className="inner-frame">
                <ChameleonImage fillColor={imageGallery[index] && imageGallery[index].fillColor} top={imageGallery[index] && imageGallery[index].top} />
            </div>
            <div className="play-bar">
				<div className="left-arrow-wrapper">
					<img onClick={() => {
                        setIndex(index-1);
                    }} src={leftArrow} alt=""/>
				</div>
                <div>
                    <p>Sağa ve sola giderek ortam değiştir</p>
                </div>
				<div className="right-arrow-wrapper">
				    <img onClick={() => {
                        setIndex(index+1);
                    }} src={rightArrow} alt=""/>
				</div>
            </div>
        </div>
    )
}

export default Chamelon;
