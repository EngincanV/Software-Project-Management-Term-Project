import {topics} from './chat-data';

export const ChatResponse = (question,topic) => {
    const response = topics.filter(data => data.text === topic );
    const data = response[0].questions && response[0].questions.filter(element => {
        return element.question.trim() === question.trim() ? element :'';
    });
    
    return data[0] && data[0].answer;
}

export const topicSelected = (topic) => {
    let data = '';
    if(topic === 'Coğrafya') {
        data= topic;
    }else if(topic === 'Hayvanlar') {
        data = topic;
    }
    else {
        data=topic;
    }

    return `Evet görünüşe bakılırsa ${data} konusunu seçtin,hadi bakalım bu konu ile ilgili sorularını sor`;
}

export const renderTopicQuestions = (topic) => {
    if(topic === 'Coğrafya'){
        return topics[0];
    }else if(topic === 'Hayvanlar') {
        return topics[1];
    }else {
        return topics[2];
    }
}