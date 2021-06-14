import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

const customStyles = {
  content: {
    top: '48%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
//Modal.setAppElement("#modelContainer");

const PrevewModel = (props) => {
  const [ modalIsOpen, setIsOpen ] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {props.buttonRenderer ? (
        props.buttonRenderer(openModal)
      ) : (
        <button onClick={openModal}>Open</button>
      )}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
            }}
          >
            <h2>Document Preview</h2>
            <span>
              <FontAwesomeIcon
                icon={faWindowClose}
                color="black"
                size="lg"
                onClick={closeModal}
              />
            </span>
          </div>
          <div>
            {props.contentRenderer ? (
              props.contentRenderer()
            ) : (
              <h1>Mock Contents</h1>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PrevewModel;
