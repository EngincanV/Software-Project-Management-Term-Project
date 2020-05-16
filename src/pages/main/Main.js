import React from 'react';
import { Card, Tag, Button, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Content } = Layout;
function Main() {
    return (
        <div style={{ padding: '50px' }}>
            <Content className="gameBox">
                <Card className="game" style={{ backgroundColor: 'purple' }}>
                    <div className="title">Tourist Info</div>
                    <p>
                        Create a mobile app in Scratch that recommends tourist attractions
                        based on people's interests. Teach a computer to make
                        recommendations
          </p>
                    <Button ghost>
                        <Link to="tourist-info">Start Game</Link>
                    </Button>
                    <div style={{ marginTop: '20px' }}>
                        {' '}
                        <Tag color="orange">Emülatör</Tag> <Tag color="cyan"> Acemi </Tag>
                    </div>
                </Card>
                <Card className="game" style={{ backgroundColor: 'blue' }}>
                    <div className="title">Make me happy</div>
                    <p>
                        Create a character in Scratch that smiles if you say nice things to
                        it and cries if you say mean things to it. Teach a computer to
                        recognise compliments and insults
          </p>
                    <Button ghost>
                        <Link to="make-me-happy"> Start Game</Link>
                    </Button>
                    <div style={{ marginTop: '20px' }}>
                        {' '}
                        <Tag color="pink"> Simülatör</Tag>{' '}
                        <Tag color="green"> Orta Düzey </Tag>
                    </div>
                </Card>
                <Card className="game" style={{ backgroundColor: 'red' }}>
                    <div className="title">Journey to School!</div>
                    <p>
                        Train the computer to be able to predict how you travel to school in the morning.
                        Teach a computer to make predictions
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
                    <Button ghost> Start Game</Button>
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
                    <Button ghost>
                        <Link to="titanic">Start Game</Link>
                    </Button>
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
                        <Link to="chatbots">Start Game</Link>
                    </Button>
                    <div style={{ marginTop: '20px' }}>
                        {' '}
                        <Tag color="pink"> Emülatör</Tag>{' '}
                        <Tag color="green"> Orta Düzey </Tag>
                    </div>
                </Card>
                <Card className="game" style={{ backgroundColor: 'red' }}>
                    <div className="title">Kiwi or Stoat</div>
                    <p>
                        Train the computer to be able to predict how you travel to school in
                        the morning. Teach a computer to make predictions
          </p>
                    <Button ghost>
                        <Link to="kiwi-or-stoat"> Start Game</Link>
                    </Button>
                    <div style={{ marginTop: '20px' }}>
                        {' '}
                        <Tag color="orange"> Emülatör</Tag>{' '}
                        <Tag color="green"> Orta Düzey </Tag>
                    </div>
                </Card>
                <Card className="game" style={{ backgroundColor: 'green' }}>
                    <div className="title">Rock Paper Scissors</div>
                    <p>
                        Make a Rock, Paper, Scissors game in Scratch that learns to
                        recognise hand shapes. Teach a computer to recognise shapes
          </p>
                    <Button ghost>
                        <Link to="rock-paper-scissors">Start Game</Link>
                    </Button>
                    <div style={{ marginTop: '20px' }}>
                        {' '}
                        <Tag color="orange"> Emülatör</Tag> <Tag color="green"> Acemi </Tag>
                    </div>
                </Card>
                <Card className="game" style={{ backgroundColor: 'gray' }}>
                    <div className="title">Judge a Book</div>
                    <p>
                        Make a game in Scratch to test whether it really is possible to
                        judge a book by its cover.
          </p>
                    <Button ghost>
                        <Link to="judge-a-book">Start Game</Link>
                    </Button>
                    <div style={{ marginTop: '20px' }}>
                        {' '}
                        <Tag color="orange"> Emülatör</Tag> <Tag color="green"> Acemi </Tag>
                    </div>
                </Card>
            </Content>
        </div>
    );
}
export default Main;
