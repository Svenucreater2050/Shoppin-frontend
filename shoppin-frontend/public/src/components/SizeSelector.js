import styles from '../styles/customize.module.css';

export default function SizeSelector({ sizes, selectedSize, onSelectSize }) {
  return (
    <div className={styles.sizeSelector}>
      <h3>Select Size</h3>
      <div className={styles.toggle}>
        {sizes.map((size) => (
          <button
            key={size}
            className={selectedSize === size ? styles.selected : ''}
            onClick={() => onSelectSize(size)}
          >
            {size}mm
          </button>
        ))}
      </div>
    </div>
  );
}
