import ReactModal from 'react-modal';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

ReactModal.setAppElement('#root');

const ImageModal = ({ modalClose, isModalOpen, image, alt}) => {
  return (
    <ReactModal
      onRequestClose={modalClose}
      isOpen={isModalOpen}
      contentLabel="Image Modal"
      className={css.overlay}
    >
      <div className={css.modal}>
        <img src={image} alt={alt} />
      </div>
    </ReactModal>
  );
};

ImageModal.propTypes = {
  modalClose: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};
export default ImageModal;
