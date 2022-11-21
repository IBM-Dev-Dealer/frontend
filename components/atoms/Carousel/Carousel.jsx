import { useState } from 'react';
import styles from './Carousel.module.scss';

const Carousel = ({ elements }) => {
  const [selected, setSelected] = useState(elements.length > 0 ? elements[0] : null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelectionChange = (direction) => {
    switch (direction) {
      case 'forward':
        if (elements.length - 1 > selectedIndex) {
          setSelected(elements[selectedIndex + 1]);
          setSelectedIndex((prev) => prev + 1);
        } else {
          setSelected(elements[0]);
          setSelectedIndex(0);
        }
        break;
      case 'backward':
        if (selectedIndex - 1 >= 0) {
          setSelected(elements[selectedIndex - 1]);
          setSelectedIndex((prev) => prev - 1);
        } else {
          setSelected(elements[elements.length - 1]);
          setSelectedIndex(elements.length - 1);
        }
        break;
    }
  };

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselItem}
        style={{
          backgroundImage: selected.image ? `url(${selected.image})` : 'none',
        }}
      >
        <div
          className={styles.button}
          onClick={() => handleSelectionChange('backward')}
          role='presentation'
        >
          {'<'}
        </div>

        <div className={styles.title}>{selected.title}</div>

        <div
          className={styles.button}
          onClick={() => handleSelectionChange('forward')}
          role='presentation'
        >
          {'>'}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
