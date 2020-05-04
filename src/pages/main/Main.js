import React from 'react'
import { Card, Tag, Button, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Content } = Layout;
function Main() {
    return (
        <div style={{ padding: "50px" }}>
            <Content className="gameBox">
                <Card className="game" style={{ backgroundColor: "purple" }} >
                    <div className="title">Tourist Info</div>
                    <p>Create a mobile app in Scratch that recommends tourist attractions based on people's interests. Teach a computer to make recommendations</p>
                    <Button ghost> <Link to="tourist-info"> Start Game </Link> </Button>
                    <div style={{ marginTop: "20px" }}> <Tag color="orange">Emülatör</Tag> <Tag color="cyan"> Acemi </Tag></div>
                </Card>
                <Card className="game" style={{ backgroundColor: "blue" }} >
                    <div className="title">Make me happy</div>
                    <p>Create a character in Scratch that smiles if you say nice things to it and cries if you say mean things to it. Teach a computer to recognise compliments and insults</p>
                    <Button ghost><Link to="make-me-happy"> Start Game</Link></Button>
                    <div style={{ marginTop: "20px" }}> <Tag color="pink"> Simülatör</Tag> <Tag color="green"> Orta Düzey </Tag></div>

                </Card>
                <Card className="game" style={{ backgroundColor: "red" }} >
                    <div className="title">Snap!</div>
                    <p>Make a card game in Scratch that learns to recognise pictures of your card. Teach a computer to recognise what icons look like</p>
                    <Button ghost> Start Game</Button>
                    <div style={{ marginTop: "20px" }}> <Tag color="pink"> Simülatör</Tag> <Tag color="green"> Orta Düzey </Tag></div>
                </Card>
                <Card className="game" style={{ backgroundColor: "green" }} >
                    <div className="title">Chameleon</div>
                    <p>Make a chameleon in Scratch that changes colour to match its background. Teach a computer to recognise colours</p>
                    <Button ghost> Start Game</Button>
                    <div style={{ marginTop: "20px" }}> <Tag color="pink"> Simülatör</Tag> <Tag color="red"> İleri Düzey </Tag></div>

                </Card>
                <Card className="game" style={{ backgroundColor: "orange" }} >
                    <div className="title">Titanic</div>
                    <p>Create a Python program that can predict who survived the sinking of the Titanic. Teach a computer to predict outcomes</p>
                    <Button ghost> Start Game</Button>
                    <div style={{ marginTop: "20px" }}> <Tag color="orange"> Emülatör</Tag> <Tag color="green"> Orta Düzey </Tag></div>

                </Card>
                <Card className="game" style={{ backgroundColor: "Brown" }} >
                    <div className="title">Mailman Max </div>
                    <p>Make a postal sorting office in Scratch that can recognise handwritten postcodes on envelopes. Teach a computer to recognise handwriting</p>
                    <Button ghost> Start Game</Button>
                    <div style={{ marginTop: "20px" }}> <Tag color="pink"> Simülatör</Tag> <Tag color="green"> Orta Düzey </Tag></div>

                </Card>
                <Card className="game" style={{ backgroundColor: "purple" }} >
                    <div className="title">Car or cup</div>
                    <p>Train the computer to be able to sort photos into groups. Teach a computer to recognise pictures of objects</p>
                    <Button ghost> Start Game</Button>
                    <div style={{ marginTop: "20px" }}> <Tag color="pink"> Simülatör</Tag> <Tag color="green"> Acemi </Tag></div>

                </Card>
                <Card className="game" style={{ backgroundColor: "blue" }} >
                    <div className="title">Chatbots</div>
                    <p>Create a chatbot that can answer questions about a topic of your choice.</p>
                    <Button ghost><Link to="chatbots">Start Game</Link></Button>
                    <div style={{ marginTop: "20px" }}> <Tag color="pink"> Emülatör</Tag> <Tag color="green"> Orta Düzey </Tag></div>

                </Card>
                <Card className="game" style={{ backgroundColor: "red" }} >
                    <div className="title">Kiwi or Stoat</div>
                    <p>Train the computer to be able to predict how you travel to school in the morning. Teach a computer to make predictions</p>
                    <Button ghost><Link to="kiwi-or-stoat"> Start Game</Link></Button>
                    <div style={{ marginTop: "20px" }}> <Tag color="orange"> Emülatör</Tag> <Tag color="green"> Orta Düzey </Tag></div>
                </Card>
                <Card className="game" style={{ backgroundColor: "green" }} >
                    <div className="title">Rock Paper Scissors</div>
                    <p>Make a Rock, Paper, Scissors game in Scratch that learns to recognise hand shapes.
                    Teach a computer to recognise shapes</p>
                    <Button ghost><Link to="rock-paper-scissors">Start Game</Link></Button>
                    <div style={{ marginTop: "20px" }}> <Tag color="orange"> Emülatör</Tag> <Tag color="green"> Acemi </Tag></div>

                </Card>

            </Content>
        </div>
    )
}
export default Main;