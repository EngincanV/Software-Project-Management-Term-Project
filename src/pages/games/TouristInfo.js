import React, { useState, useEffect } from 'react';
import ImagePicker from "react-image-picker";
import "react-image-picker/dist/index.css";

import { Button, Modal } from "antd"
//images
import avm from "../../assets/tourist-info/avm.jpg";
import eglence from "../../assets/tourist-info/eglence.jpg";
import muze from "../../assets/tourist-info/muze.jpg";
import park from "../../assets/tourist-info/park.jpg";
import sahil from "../../assets/tourist-info/sahil.jpg";
import avmMap from "../../assets/tourist-info/0.jpg";
import eglenceMap from "../../assets/tourist-info/1.jpg";
import muzeMap from "../../assets/tourist-info/2.jpg";
import parkMap from "../../assets/tourist-info/3.jpg";
import sahilMap from "../../assets/tourist-info/4.jpg";


const imageList = [avm, eglence, muze, park, sahil];


function TouristInfo(){
    const [image, setImage] = useState(null);
    const [btnText, setBtnText] = useState(null);


    const onPick = image => {
        setImage(image.value);
    }

    useEffect(() => {
        changeText();
    },[image])

    const changeText = () => {
        console.log(image)
        switch(image){
            case 0:
                setBtnText("En yakın AVM yi")
                break
            case 1:
                setBtnText("En yakın Eğlence Merkezini")
                break
            case 2:
                setBtnText("En yakın Müzeyi ")
                break
            case 3:
                setBtnText("En yakın Parkı ")
                break
            case 4:
                setBtnText("En yakın Sahil ")
                break
        }
    }
    const modalContentRender = () => {
        switch(image){
            case 0:
                return(<div className="modalContent"> <p> {btnText} görüntülüyorsunuz, </p><img src={avmMap} /> </div>)

                break
            case 1:    
                return(<div className="modalContent"> <p> {btnText} görüntülüyorsunuz, </p><img src={eglenceMap} /> </div>)

                break
            case 2:
                return(<div className="modalContent"> <p> {btnText} görüntülüyorsunuz, </p><img src={muzeMap} /> </div>)
                break
            case 3:
                return(<div className="modalContent"> <p> {btnText} görüntülüyorsunuz, </p><img src={parkMap} /> </div>)
                break
            case 4:
                return(<div className="modalContent"> <p> {btnText} görüntülüyorsunuz, </p><img src={sahilMap} /> </div>)
                break
        }
    }
    const handleClick = () => {
        Modal.success({
            title: 'Tourist Info',
            content: modalContentRender(),
            width:"50%"
        });
    }
    return(
        <div style={{marginTop:"50px"}}>
            <h1>En yakınınınzdaki turistlik alanı bulmak için lütfen aşağıdaki resimlerden birini seçiniz.</h1>
            <ImagePicker
                images={imageList.map((image, i) => ({ src: image, value: i }))}
                onPick={onPick} />

            <Button disabled={image !== null ? "" : "true"} type="primary" shape="round" size="large" onClick={handleClick}>
                {btnText !== null ? btnText+" bulun" : "Lütfen bulmak istediğiniz resmi seçin"}
            </Button>
        </div>
    );
}

export default TouristInfo