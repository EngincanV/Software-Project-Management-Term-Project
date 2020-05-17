import React, { useState } from "react";
import { Modal, Form, Input, Button, Card } from "antd";
import axios from "axios";

const { Meta } = Card;

function countDown(message, setDescription) {
    setDescription(message);

    let secondsToGo = 5;
    const modal = Modal.success({
        title: 'Journey To School',
        content: message
    });
    const timer = setInterval(() => {
        secondsToGo -= 1;
        modal.update({
            content: message
        });
    }, 1000);
    setTimeout(() => {
        clearInterval(timer);
        modal.destroy();
    }, secondsToGo * 1000);
}

const JourneyToSchool = () => {
    const [age, setAge] = useState('');
    const [distance, setDistance] = useState('');
    const [message, setMessage] = useState("");

    const handleChange = e => {
        const targetName = e.target.name;
        const value = e.target.value;

        if (targetName === "age") {
            setAge(value);
        }
        else if (targetName === "distance") {
            setDistance(value);
        }
    }

    const predict = () => {
        let bodyFormData = new FormData();
        bodyFormData.set("Age", age);
        bodyFormData.set("Distance", distance);

        return axios({
            method: "post",
            url: "https://pacific-depths-47787.herokuapp.com/predict",
            data: bodyFormData,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(data => data);
    }

    const handleClick = e => {
        e.preventDefault();

        predict()
            .then(data => {
                let messageDesc = "";
                if (data === "Okulara bisikletle gitmeniz uygun")
                    messageDesc = `Yaşı: ${age}, Okula mesafesi: ${distance}m olan öğrenci okula bisiklet ile gidebilir.`;
                else if (data === "Okulara arabayle gitmeniz uygun")
                    messageDesc = `Yaşı: ${age}, Okula mesafesi: ${distance}m olan öğrenci okula arabayla gidebilir.`;
                else
                    messageDesc = `Yaşı: ${age}, Okula mesafesi: ${distance}m olan öğrenci okula yürüyerek gidebilir.`;

                countDown(messageDesc, setMessage);
            });
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", margin: 40 }}>
            <Form
                style={{ margin: "auto", padding: 50 }}
                name="customized_form_controls"
                layout="inline"
            >
                <Form.Item
                    name="age"
                    label="Yaş"
                >
                    <Input
                        type="number"
                        placeholder="Yaş"
                        style={{
                        }}
                        required
                        onChange={handleChange}
                        name="age"
                    />
                </Form.Item>
                <Form.Item
                    name="distance"
                    label="Mesafe"
                >
                    <Input
                        type="number"
                        placeholder="Mesafe"
                        style={{
                        }}
                        required
                        name="distance"
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item
                    name="friendcount"
                    label="Arkadaş Sayısı"
                >
                    <Input
                        type="number"
                        placeholder="Arkadaş Sayısı"
                        style={{
                        }}
                        required
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={handleClick}>
                        Onayla
                    </Button>
                </Form.Item>
            </Form>
            <div>
                <Card
                    hoverable
                    style={{ width: "40vw", display: "inline-block", margin: 20 }}
                    cover={<img alt="example" src="https://i.pinimg.com/originals/a7/d7/7b/a7d77bc9b4e0ce9520dcd97c71b03dda.png" height="300vh" />}
                >
                    <Meta title="Journey To School" description={message ? message : "Lütfen gerekli bilgileri giriniz!"} />
                </Card>
            </div>
        </div>
    );
};

export default JourneyToSchool;