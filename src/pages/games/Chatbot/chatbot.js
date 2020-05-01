import React,{useEffect,useState} from 'react';
import './chatbot.css';
import { topics} from './chat-data';
import { topicSelected,renderTopicQuestions,ChatResponse } from './ChatbotLogic';
import Modal from '../../../components/modal/modal';
const Chatbot = () => {
    const [topicVisible,setTopicVisible] = useState(true);
    const [dialogText,setDialogText] = useState('');
    const [topic,setTopic] = useState('');
    const [visible,setVisible] = useState(false);
    const [openModal,setOpenModal] = useState(false);
    const [topicQuestions,setTopicQuestions] = useState({});
    const [inputValue,setInputValue] = useState('');
    const dialogVisible = visible ? 'visible':'unvisible';
    const isTopicsVisible = topicVisible ?'topics-visible':'topics-disappear';
    const isInputVisible = topicVisible ? 'none':'flex'
    const { questions } = topicQuestions;
    

    useEffect(() => {
        setDialogText("Merhaba ben baykal, senin sorularına cevap vermek için buradayım.Aşağıdan bir konu seç ve başlayalım");
        setVisible(true);
    },[])


    const handleKeyDown = (event) => {
       const response= ChatResponse(event.target.value,topic);
       setDialogText(response); 
    }

    const handleDialogFinish = () => {
        setDialogText('Güzel bir sohbet oldu tekrar görüşmek üzere.');
        setTopicVisible(true);
    }
    
    return (
       <div className="wrapper">
            <div className="chat-screen">
                <div className="chatbot">
                    <div className={`dialog-box ${dialogVisible}`}>
                        <p className="dialog-text">{dialogText}</p>
                    </div>
                </div>
                <div className="client">
                <div style={ {display:topicVisible ? 'block':'none'}}><h3>Lütfen bir konu seç</h3></div>
                    <div className={`topics ${isTopicsVisible}`}>
                        
                        {topics.map((topic,index) => (
                            <div onClick={() => {
                                setTopic(topic.text)
                                setTopicVisible(false);
                                setDialogText(topicSelected(topic.text))
                                setTopicQuestions(renderTopicQuestions(topic.text))
                            }} key={index} className="topic">{topic.text}</div>
                        ))}
                    </div>

                    <div style={{display:isInputVisible}} className="topbar">
                    <button className="questions-modal" onClick={() => setOpenModal(true)}  >Soru Listesini gör</button>
                     <button onClick={handleDialogFinish} className="questions-modal">Konuşmayı bitir</button>
                     <div  style={{display:isInputVisible,flexDirection:'column',marginRight:'5px'}}>
                         <label style={{fontSize:'12px',fontWeight:'bold'}}>Konuyu değiştir</label>
                     <select onChange={(e)=>{
                                setTopic(e.target.value)
                                setDialogText(topicSelected(e.target.value))
                                setTopicQuestions(renderTopicQuestions(e.target.value))
                            }} >
                        {topics.map((topic,index) => (
                            <option  key={index} value={topic.text}>{topic.text}</option>
                        ))}
                        
                    </select>
                     </div>
                    </div>
                    <div style={{display:isInputVisible,flexDirection:'column'}} className="input-wrapper">
                        <input value={inputValue} onKeyDown={handleKeyDown} style={{display:isInputVisible}} className="text-input" type="text" placeholder="Sorunu sorabilirsin" />
                        <p style={{margin:0,fontSize:'12px',fontWeight:'bold'}} className="warning">Sorunu sormak için soruyu yazdıktan sonra klavyeden ENTER tuşuna bas</p>
                    </div>
                </div>
            </div>
            <Modal handleClose={() => setOpenModal(false)} show={openModal}>
                    <div>
                    <ul style={{listStyle:'none'}} className="question-list">
                       {questions && questions.map((data,index) => (
                           <li style={{fontSize:'18px',marginBottom:'4px'}} key={index}><span>{data.question}</span><span onClick={() => {
                            setInputValue(data.question);
                            setOpenModal(false);
                           }} className="ask">Sor</span></li>
                       ))} 
                    </ul>
                    </div>
                    <button onClick={() =>setOpenModal(false)}>Kapat</button>
            </Modal>
       </div>
    );
}

export default Chatbot;