import React, { useState } from 'react';
import ImagePicker from "react-image-picker";
import "react-image-picker/dist/index.css";

import { Button, Modal } from "antd";

//images
import lion from "../../assets/kiwi-or-stoat/aslan.jpg";
import horse from "../../assets/kiwi-or-stoat/at.jpg";
import cheetah from "../../assets/kiwi-or-stoat/çita.jpg";
import elephant from "../../assets/kiwi-or-stoat/fil.jpg";
import tiger from "../../assets/kiwi-or-stoat/kaplan.jpg";
import wolf from "../../assets/kiwi-or-stoat/kurt.jpg";
import crocodile from "../../assets/kiwi-or-stoat/timsah.jpg";
import zebra from "../../assets/kiwi-or-stoat/zebra.jpg";

const imageList = [lion, horse, cheetah, elephant, tiger, wolf, crocodile, zebra];

function countDown(animalName) {
    let secondsToGo = 5;
    const modal = Modal.success({
        title: 'Kiwi or Stoat',
        content: `Seçmiş olduğunuz fotoğraftaki hayvanın, ${animalName} olduğu saptanmıştır.`,
    });
    const timer = setInterval(() => {
        secondsToGo -= 1;
        modal.update({
            content: `Seçmiş olduğunuz fotoğraftaki hayvanın, ${animalName} olduğu saptanmıştır.`,
        });
    }, 1000);
    setTimeout(() => {
        clearInterval(timer);
        modal.destroy();
    }, secondsToGo * 1000);
}

const KiwiOrStoat = () => {
    const [image, setImage] = useState(null);
    const [animalName, setAnimalName] = useState("");

    const onPick = image => {
        console.log(image.value);
        setImage(image.value);
    }

    const handleClick = () => {
        let animal = "";
        // eslint-disable-next-line default-case
        switch (image) {
            case 0:
                animal = "Aslan";
                break;
            case 1:
                animal = "At";
                break;
            case 2:
                animal = "Çita";
                break;
            case 3:
                animal = "Fil";
                break;
            case 4:
                animal = "Kaplan";
                break;
            case 5:
                animal = "Kurt";
                break;
            case 6:
                animal = "Timsah";
                break;
            case 7:
                animal = "Zebra";
                break;
        }
        setAnimalName(animal);
        countDown(animal);
    }
    return (
        <div>
            <ImagePicker
                images={imageList.map((image, i) => ({ src: image, value: i }))}
                onPick={onPick} />
            <br />
            <Button disabled={image ? "" : "true"} type="primary" shape="round" size="large" onClick={handleClick}>
                Onayla
            </Button>
        </div>
    )
}


export default KiwiOrStoat;