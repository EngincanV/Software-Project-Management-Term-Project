import React, { useState } from "react"
import { Button, Modal } from "antd"
import axios from 'axios'
//images
import titanic from "../../assets/titanic/1.jpg";
function Titanic(){
    const [TClass, setTClass] = useState("")
    const [TAge, setTAge] = useState("")

    const deadorAlive = (data) => {
        return axios.post('https://machinelearningdeploy.herokuapp.com/predict',  data )
        .then( (response) =>  {
          console.log(response.data)
          return response.data
        }).catch(function (error) {
            console.log(error)
    
       });
    }
    const handleClick = () => {
        if(TClass !== "" && TAge !== "") {
            var bodyFormData = new FormData();
            bodyFormData.set('Age', TAge);
            deadorAlive(bodyFormData).then(result => {
                if(result === "Live"){
                    Modal.success({
                        title: 'Titanik',
                        content: "Belirttiğiniz Yolcu Modelin Tahminine Göre Hayatta Kalmıştır.",
                    });
                }else{
                    Modal.warning({
                        title: 'Titanik',
                        content: "Belirttiğiniz Yolcu Modelin Tahminine Göre Hayatını Kaybetmiştir.",
                    });
                }       
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
                <select onChange={e => setTClass(e.target.value)} name="" id="" style={{marginRight:10}}>
                    <option disabled>Lütfen yolcunun bilet sınıfını seçiniz</option>
                    <option>Birinci Sınıf</option>
                    <option>İkinci Sınıf</option>
                    <option>Üçüncü Sınıf</option>
                </select>
                <select style={{marginRight:10}} >
                    <option disabled> Lütfen Yolcunun Cinsiyetini Seçiniz</option>
                    <option> Kadın </option>
                    <option> Erkek </option>
                </select>
                <input type="number" placeholder="Yolcu Yaşı" style={{marginRight:10}}  value={TAge} onChange={e => setTAge(e.target.value)}/>
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