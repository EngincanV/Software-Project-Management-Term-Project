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
