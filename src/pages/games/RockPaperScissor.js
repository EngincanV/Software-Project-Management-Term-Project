import React, { useState, useEffect } from 'react';
import { Button, Modal, Descriptions } from "antd";
import { ToastsStore, ToastsContainer } from "react-toasts";

//images
import rockImg from '../../assets/rock.png';
import paperImg from '../../assets/paper.png';
import scissorsImg from '../../assets/scissors.png';

function countDown() {
    let secondsToGo = 5;
    const modal = Modal.success({
        title: 'Rock Paper Scissors',
        content: `Oyuna ${secondsToGo} saniye içinde başlayabilirsiniz.`,
    });
    const timer = setInterval(() => {
        secondsToGo -= 1;
        modal.update({
            content: `Oyuna ${secondsToGo} saniye içinde başlayabilirsiniz.`,
        });
    }, 1000);
    setTimeout(() => {
        clearInterval(timer);
        modal.destroy();
    }, secondsToGo * 1000);
}

const RockPaperScissor = () => {
    const gameOptions = ['taş', 'kağıt', 'makas'];

    const [playerChoice, setPlayerChoice] = useState("");
    const [playerScore, setPlayerScore] = useState(0);
    const [computerChoice, setComputerChoice] = useState("");
    const [computerScore, setComputerScore] = useState(0);
    const [message, setMessage] = useState("");

    useEffect(() => {
        countDown();
    }, []);

    const computerRandomChoice = () => {
        let index = Math.floor(Math.random() * gameOptions.length);
        let randChoice = gameOptions[index];
        setComputerChoice(randChoice);
        return randChoice;
    }

    const checkWinner = (user, computer) => {
        if (user === computer)
            setMessage("Berabere");

        else if ((user === gameOptions[0] && computer === gameOptions[2]) ||
            (user === gameOptions[1] && computer === gameOptions[0]) ||
            (user === gameOptions[2] && computer === gameOptions[1])) {
            setMessage("Oyuncu Kazandı.");
            setPlayerScore(prevScore => ++prevScore);
        }

        else if ((user === gameOptions[2] && computer === gameOptions[0]) ||
            (user === gameOptions[0] && computer === gameOptions[1]) ||
            (user === gameOptions[1] && computer === gameOptions[2])) {
            setMessage("Bilgisayar Kazandı.");
            setComputerScore(prevScore => ++prevScore);
        }
    }

    const handleClick = (e) => {
        const currentChoice = e.currentTarget.getAttribute("title");
        const computerCurrentChoice = computerRandomChoice();
        setPlayerChoice(currentChoice);
        checkWinner(currentChoice, computerCurrentChoice);
    }

    return (
        <div>
            <div className="user-control-panel">
                <Button onClick={handleClick} title={gameOptions[0]} style={{ padding: 0, backgroundColor: "#1AAA9F", width: "12vw", height: "26vh", margin: 10 }} icon={<img src={rockImg} alt="" width="100%" height="100%" style={{ padding: 0, borderRadius: 50 }} />} size="large" />
                <Button onClick={handleClick} title={gameOptions[1]} style={{ padding: 0, backgroundColor: "#E2122C", width: "12vw", height: "26vh", margin: 10 }} icon={<img src={paperImg} alt="" width="100%" height="100%" style={{ padding: 0, borderRadius: 50 }} />} size="large" />
                <Button onClick={handleClick} title={gameOptions[2]} style={{ padding: 0, backgroundColor: "#B3CC33", width: "12vw", height: "26vh", margin: 10 }} icon={<img src={scissorsImg} alt="" width="100%" height="100%" style={{ padding: 0, borderRadius: 50 }} />} size="large" />
            </div>
            <ToastsContainer store={ToastsStore} position="bottom_center" children={ToastsStore.success(message)} />
            <div>
                <Descriptions column={2} bordered size="default" style={{ width: "60vw", marginLeft: "auto", marginRight: "auto", marginTop: "10vh" }} layout="horizontal">
                    <Descriptions.Item style={{ fontWeight: "bold" }} label="Bilgisayar Puan "><b>{computerScore}</b></Descriptions.Item>
                    <Descriptions.Item style={{ fontWeight: "bold" }} label="Oyuncu Puan  "><b>{playerScore}</b></Descriptions.Item>
                    {playerChoice ? <Descriptions.Item label="Seçimler " style={{ fontWeight: "bold" }}><b>{computerChoice + " - " + playerChoice}</b></Descriptions.Item> : null}
                </Descriptions>
            </div>
        </div>
    );
}

export default RockPaperScissor;