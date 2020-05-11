import React, { useState } from "react"
import { Button, Modal } from "antd"

//images
import titanic from "../../assets/titanic/1.jpg";
function Titanic(){
    const [TClass, setTClass] = useState("")
    const [TAge, setTAge] = useState("")
    const [TCount, setTCount] = useState("")
    const [TParent, setTParent] = useState("")
    const [TCost, setTCost] = useState("")


    const handleClick = () => {
        if(TClass !== "" && TAge !== "" && TCount !== "" && TParent !== "" && TCost !== "") {
            var rand = Math.floor(Math.random() * Math.floor(2));
            if(rand == 1)
                Modal.success({
                    title: 'Titanik',
                    content: "Belirttiğiniz Yolcu Modelin Tahminine Göre Hayatta Kalmıştır.",
                });
            else
                Modal.warning({
                    title: 'Titanik',
                    content: "Belirttiğiniz Yolcu Modelin Tahminine Göre Hayatını Kaybetmiştir.",
                });
        }else{
            Modal.error({
                title: 'HATA !',
                content: "Lütfen Formdaki tüm alanları doldurun",
            });
        }
     
    }
    return (
        <div style={{marginTop:"50px"}} >
            <h1>Aşağıdaki bilgileri doldurun ve yolcunun titanik kazasında hayatta kalıp kalmayacağını kontrol edin.</h1>
            <div> <img src={titanic} /></div>
            <div style={{marginTop:25}}>
                <input placeholder="Bilet Sınıfı" style={{marginRight:10}} value={TClass} onChange={e => setTClass(e.target.value)}/>
                <select style={{marginRight:10}} >
                    <option> Lütfen Yolcunun Cinsiyetini Seçiniz</option>
                    <option> Kadın </option>
                    <option> Erkek </option>
                </select>
                <input placeholder="Yolcu Yaşı" style={{marginRight:10}}  value={TAge} onChange={e => setTAge(e.target.value)}/>
                <input placeholder="Yolculuğa Kaç Kişi Katıldı" style={{marginRight:10}} value={TCount} onChange={e => setTCount(e.target.value)}/>
                <input placeholder="Yolcunun Ebeveyn yada çocuk sayısı" style={{marginRight:10}} value={TParent} onChange={e => setTParent(e.target.value)}/>
                <input placeholder="Bilet Ücreti" style={{marginRight:10}} value={TCost} onChange={e => setTCost(e.target.value)}/>
                <select style={{marginRight:10}} >
                    <option> Lütfen Yolcunun Biniş Yerini Seçiniz</option>
                    <option> Cherbourg </option>
                    <option> Southampton </option>
                    <option> Queenstown </option>
                </select>
            </div>
            <Button type="primary" shape="round" size="large" onClick={handleClick} style={{marginTop:15}}>
                Bilgilerini girdiğiniz yolcunun hayatta kalıp kalmadığı ile ilgili tahmin sonucunu görün
            </Button>
        </div>
    )
}

export default Titanic;