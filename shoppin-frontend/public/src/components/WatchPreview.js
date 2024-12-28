import styles from '../styles/customize.module.css';

export default function WatchPreview({ selectedCase, selectedSize, selectedBand }) {
  return (
    <div className={styles.watchPreview}>
      <h3>Preview</h3>
      <img src={selectedCase.image} alt="Selected Watch Case" />
      <p>{selectedCase.name} - {selectedSize}mm</p>
      <img src={selectedBand.image} alt="Selected Watch Band" />
      <p>{selectedBand.name}</p>
    </div>
  );
}
