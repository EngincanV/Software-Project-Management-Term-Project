import React, { Component } from 'react'
import {Button} from "antd";
import './sortinghat.css'
import Questions from './questions'
import hatImg from '../../../assets/sorting-hat/sortinghat.jpg'

export default class SortingHat extends Component {
    state={
        isVisible: true,
        questions:[
            {  id:1,
                no:0,
              soru:"En bilinen özelliğin nedir?",
              asikki:"Zekam",
              bsikki:"Cesaretim",
              csikki:"Güvenilirliğim",
              dsikki:"Kurnazlığım",
            },
            {  id:2,
                no:1,
                soru:"Hogsmeade'deki en favori alışveriş yerin hangisi?  ",
                asikki:"Kitaplar ve Parşömenler",
                bsikki:"Üç Süpürge",
                csikki:"Balyumruk Şekerci Dükkanı",
                dsikki:"Zonko`nun Şaka Dükkanı",
            },
            {  
                id:3,
                no:2,
                soru:"Hangi yolda yürümek isterdin?",
                asikki:"Tarihi eserlerle dolu bir sokakta",
                bsikki:"Ağaaçlarla ve yapraklarla dolu bir yolda",
                csikki:"Geniş, güneşli ve çimenli bir yolda",
                dsikki:"Fenerlerle aydınlatılmış bir sokakta",    
            },
            { 
              id:4,
              no:3,
              soru:"Hangi süper gücü almak isterdin?",
              asikki:"Zihinleri okumak",
              bsikki:"Görünmez olmak",
              csikki:"Hayvanlarla konuşabilmek",
              dsikki:"Görünüşümü değiştirebilmek",
            },
            {  id:5,
              no:4,
              soru:"Hangi iksiri içerdin?",
              asikki:"Parıltılı gümüş iksiri",
              bsikki:"Işıklar saçan altın iksiri",
              csikki:"Pembe renkte olan değişik iksiri",
              dsikki:"Mürekkebe benzeyen siyah iksiri",
            },
            {  id:6,
                no:5,
                soru:"En sevdiğin koku hangisi?",
                asikki:"Parşömen",
                bsikki:"Ateş",
                csikki:"Ev",
                dsikki:"Deniz",
              },
       
           ]
    }

    onClickEvent=(e)=>{
        this.setState({
            isVisible:!this.state.isVisible
        })
    }
    render() {

        const {isVisible}=this.state
        return (
            <div className="App">
                <header className="App-header">
                {
                    isVisible ? 
                    <div>
                        <img src={hatImg} className="image" alt=""/>
                        <p>
                            <code>Hogwarts büyücülük okuluna Hoşgeldin!</code> 
                        </p>
                        <p>
                            Seçmen şapka hangi gruba gireceğini tahmin edecek! Öncelikle birkaç soru soralım.
                        </p>
                        
                           <Button ghost onClick={this.onClickEvent.bind(this)}>Hadi Başlayalım!</Button>
                    
                    </div>  :  null
                }
                {
                    isVisible ? null :
                    <Questions questions={this.state.questions} />
                }
                </header>
            </div>
        )
    }
}
