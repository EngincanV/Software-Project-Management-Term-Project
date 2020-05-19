import React, { useEffect, useState } from 'react';
import { Card, Tag, Button, Layout } from 'antd';
import { Link } from 'react-router-dom';
import axios from "axios";

const backgroundColors = ["purple", "blue", "red", "green", "orange", "grey"];

const { Content } = Layout;
function Main() {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get("http://softwaremanagementdatabase.herokuapp.com/GetGames", { headers: { 'Access-Control-Allow-Origin': "*" } })
            .then(data => setList(data.data.results))
            .catch(err => console.log("err"))
    }, []);

    const gameList = () => {
        // eslint-disable-next-line no-unused-expressions
        list ? list.map(game => {
            return (
                <Card className="game" style={{ backgroundColor: backgroundColors[Math.floor(Math.random() * backgroundColors.length)] }}>
                    <div className="title">{game.GameName}</div>
                    <p>
                        {game.GameDescription}
                    </p>

                    <Button ghost> Start Game</Button>
                    <div style={{ marginTop: '20px' }}>
                        {' '}
                        <Tag color="pink"> Simülatör</Tag>{' '}
                        <Tag color="green"> Orta Düzey </Tag>
                    </div>
                </Card>
                <Card className="game" style={{ backgroundColor: 'green' }}>
                    <div className="title">Chameleon</div>
                    <p>
                        Make a chameleon in Scratch that changes colour to match its
                        background. Teach a computer to recognise colours
                     </p>
                     <Button chameleon>
                        <Link to="chameleon">Start Game</Link>
                    </Button>
                    <div style={{ marginTop: '20px' }}>
                        {' '}
                        <Tag color="pink"> Simülatör</Tag>{' '}
                        <Tag color="red"> İleri Düzey </Tag>
                    </div>
                </Card>
                <Card className="game" style={{ backgroundColor: 'orange' }}>
                    <div className="title">Titanic</div>
                    <p>
                        Create a Python program that can predict who survived the sinking of
                        the Titanic. Teach a computer to predict outcomes
          </p>
                    <Button ghost> Start Game</Button>
                    <div style={{ marginTop: '20px' }}>
                        {' '}
                        <Tag color="orange"> Emülatör</Tag>{' '}
                        <Tag color="green"> Orta Düzey </Tag>
                    </div>
                </Card>
                <Card className="game" style={{ backgroundColor: 'purple' }}>
                    <div className="title">Sorting Hat</div>
                    <p>
                        Create a Sorting Hat like in Harry Potter, that puts you in a school
                        House based on what you say.
          </p>
                    <Button ghost>
                        <Link to="sorting-hat">Start Game</Link>
                    </Button>
                    <div style={{ marginTop: '20px' }}>
                        {' '}
                        <Tag color="pink"> Simülatör</Tag> <Tag color="green"> Acemi </Tag>
                    </div>
                </Card>
                <Card className="game" style={{ backgroundColor: 'blue' }}>
                    <div className="title">Chatbots</div>
                    <p>
                        Create a chatbot that can answer questions about a topic of your
                        choice.
          </p>

                    <Button ghost>
                        <Link to={game.GameName.toString().replace(" ", "-")}>Start Game</Link>
                    </Button>
                    <div style={{ marginTop: '20px' }}>
                        {' '}
                        <Tag color={game.GameType === "Simülatör" ? "pink" : "orange"}>{game.GameType}</Tag> <Tag color={game.GameLevel === "Acemi" ? "cyan" : game.GameLevel === "Orta Düzey" ? "green" : "red"}> {game.GameLevel} </Tag>
                    </div>
                </Card>
            )
        }) : <p>Loading ...</p>
    }
    return (
        <div style={{ padding: '50px' }}>
            <Content className="gameBox">
                {
                    list.length >= 1 ? list.map(game => {
                        console.log(game.GameName.toString().toLowerCase().split)
                        return (
                            <Card className="game" style={{ backgroundColor: backgroundColors[Math.floor(Math.random() * backgroundColors.length)] }}>
                                <div className="title">{game.GameName}</div>
                                <p>
                                    {game.GameDescription}
                                </p>
                                <Button ghost>
                                    <Link to={game.GameName.toString().toLowerCase().split(" ").join("-")}>Start Game</Link>
                                </Button>
                                <div style={{ marginTop: '20px' }}>
                                    {' '}
                                    <Tag color={game.GameType === "Simülatör" ? "pink" : "orange"}>{game.GameType}</Tag> <Tag color={game.GameLevel === "Acemi" ? "cyan" : game.GameLevel === "Orta Düzey" ? "green" : "red"}> {game.GameLevel} </Tag>
                                </div>
                            </Card>
                        )
                    }) : <p>Oyunlar veri tabanından getiriliyor...</p>
                }
            </Content>
        </div>
    );
}
export default Main;
