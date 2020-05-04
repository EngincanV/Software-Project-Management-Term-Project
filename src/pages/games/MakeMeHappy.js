import React from "react";
import { Card, Modal } from "antd";

//images
import sad1 from "../../assets/make-me-happy/sad1.png";
import sad2 from "../../assets/make-me-happy/sad2.png";
import sad3 from "../../assets/make-me-happy/sad3.png";
import sad4 from "../../assets/make-me-happy/sad4.png";
import smile1 from "../../assets/make-me-happy/smile2.jpg";
import smile2 from "../../assets/make-me-happy/smile3.jpg";
import smile3 from "../../assets/make-me-happy/smile4.png";
import smile4 from "../../assets/make-me-happy/smile5.webp";

function countDown(imageType) {
    let secondsToGo = 5;
    const modal = Modal.success({
        title: 'Make Me Smile',
        content: `Seçmiş olduğunuz fotoğraftaki emojinin, ${imageType} surat olduğu saptanmıştır.`,
    });
    const timer = setInterval(() => {
        secondsToGo -= 1;
        modal.update({
            content: `Seçmiş olduğunuz fotoğraftaki emojinin, ${imageType} surat olduğu saptanmıştır.`,
        });
    }, 1000);
    setTimeout(() => {
        clearInterval(timer);
        modal.destroy();
    }, secondsToGo * 1000);
}

const imageList = [
    { type: "üzgün", src: sad1 },
    { type: "üzgün", src: sad2 },
    { type: "üzgün", src: sad3 },
    { type: "üzgün", src: sad4 },
    { type: "gülen", src: smile1 },
    { type: "gülen", src: smile2 },
    { type: "gülen", src: smile3 },
    { type: "gülen", src: smile4 },
];

const MakeMeHappy = () => {
    const drop = ev => {
        ev.preventDefault();
        document.getElementById("drag-text").innerHTML = "";
        const data = ev.dataTransfer.getData("text");
        const imageType = ev.dataTransfer.getData("imageType");
        countDown(imageType);
        ev.target.appendChild(document.getElementById(data));
    }
    const drag = (ev, imageType) => {
        ev.dataTransfer.setData("text", ev.target.id);
        ev.dataTransfer.setData("imageType", imageType);
    }
    const allowDrop = ev => {
        ev.preventDefault();
    }
    return (
        <div style={{ height: "60vh", margin: "5%" }}>
            <div className="header" style={{ marginLeft: "10%", marginRight: "10%" }}>
                <Card title="Emojileri aşağıda gösterilen yere sürükleyiniz.">
                    <div style={{ height: "20%", paddingTop: "5vh" }}>
                        <div onDrop={e => drop(e)} onDragOver={e => allowDrop(e)} id="drop-section" style={{ borderWidth: 1, borderStyle: "dashed", textAlign: "center",padding: 20, borderRadius: 10 }}><span id="drag-text">Buraya sürükleyiniz</span></div>
                    </div>
                </Card>
            </div>
            <br/>
            <div className="body">
                {
                    imageList.map(image => (
                        <div style={{ display: "inline-block", padding: 10, borderColor: "gray", borderWidth: 1, borderStyle: "solid", borderRadius: "5px", margin: 10 }} id={image.src} key={image.src} onDrop={(e) => drop(e)} >
                            <img id={image.src} src={image.src} draggable="true" onDragStart={e => drag(e, image.type)} width="100" height="100" alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MakeMeHappy;