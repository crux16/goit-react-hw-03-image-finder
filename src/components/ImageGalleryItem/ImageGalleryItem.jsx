import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import ImageModal from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  static propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };

  state = {
    isOpen: false,
    selectedImage: null,
  };

  handleOpenModal = () => {
    this.setState({
      isOpen:true,
      selectedImage: this.props.largeImageURL,
    });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { selectedImage, isOpen } = this.state;
    const { webformatURL, tags } = this.props;

    return (
      <li className={css.imageGalleryItem} onClick={this.handleOpenModal}>
        <img
          className={css.imageGalleryItemImage}
          src={webformatURL}
          alt={tags}
        />
        { (isOpen)? 
        <ImageModal
          modalClose={this.handleCloseModal}
          isModalOpen={selectedImage !== null}
          image={selectedImage}
          alt={tags}
        />
        
        :""}
      </li>
    );
  }
}
