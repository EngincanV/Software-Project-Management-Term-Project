import React from 'react';
import './modal.css';

export default function Modal({ handleClose, show, children, type }) {
  const showHideClassName = show ? 'modal-wrapper block' : 'modal-wrapper none';
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="children">{children}</div>
        {type ? (
          <div className="buttons">
            <input type="submit" className="cancel-btn" onClick={handleClose} value="Cancel" />
            <input className="done-btn" type="submit" value="Done" />
          </div>
        ) : null}
      </section>
    </div>
  );
}
