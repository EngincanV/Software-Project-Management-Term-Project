import React, { useState } from 'react';
import ImagePicker from 'react-image-picker';
import 'react-image-picker/dist/index.css';

import { Button, Modal } from 'antd';

//images
import biromur from '../../assets/judge-a-book/birömür.jpg';
import cehennem from '../../assets/judge-a-book/cehennem.jpg';
import dunyasizlar from '../../assets/judge-a-book/dunyasizlar.jpg';
import hayvanciftligi from '../../assets/judge-a-book/hayvanciftligi.jpg';
import herseyinkokeni from '../../assets/judge-a-book/herseyinkokeni.jpg';
import istanbulhatirasi from '../../assets/judge-a-book/istanbulhatırası.jpg';
import otostopcu from '../../assets/judge-a-book/otostopcu.jpg';

const imageList = [
  biromur,
  cehennem,
  dunyasizlar,
  hayvanciftligi,
  herseyinkokeni,
  istanbulhatirasi,
  otostopcu,
];

function countDown(judgeBook) {
  let secondsToGo = 5;
  const modal = Modal.success({
    title: 'Judge a Book',
    content: `Seçmiş olduğunuz kitabın kapağına göre, ${judgeBook} olduğu düşünülüyor  .`,
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `Seçmiş olduğunuz kitabın kapağına göre , ${judgeBook} olduğu düşünülüyor.`,
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
}

const JudgeBook = () => {
  const [image, setImage] = useState(null);
  const [judgeBook, setJudgeBook] = useState('');

  const onPick = (image) => {
    console.log(image.value);
    setImage(image.value);
  };

  const handleClick = () => {
    let book = '';
    // eslint-disable-next-line default-case
    switch (image) {
      case 0:
        book = 'kötü';
        break;
      case 1:
        book = 'çok güzel';
        break;
      case 2:
        book = 'güzel';
        break;
      case 3:
        book = 'kötü';
        break;
      case 4:
        book = 'güzel';
        break;
      case 5:
        book = 'idare eder';
        break;
      case 6:
        book = 'fena değil';
        break;
    }
    setJudgeBook(book);
    countDown(book);
  };
  return (
    <div>
      <ImagePicker
        images={imageList.map((image, i) => ({ src: image, value: i }))}
        onPick={onPick}
      />
      <br />
      <Button
        disabled={image !== null ? '' : 'true'}
        type="primary"
        shape="round"
        size="large"
        onClick={handleClick}
      >
        Onayla
      </Button>
    </div>
  );
};

export default JudgeBook;
