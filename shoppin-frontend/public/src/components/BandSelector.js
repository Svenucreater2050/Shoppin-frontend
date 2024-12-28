import styles from '../styles/customize.module.css';

export default function BandSelector({ bands, selectedBand, onSelectBand }) {
  return (
    <div className={styles.bandSelector}>
      <h3>Select Band</h3>
      <div className={styles.carousel}>
        {bands.map((band) => (
          <button
            key={band.id}
            className={selectedBand === band.id ? styles.selected : ''}
            onClick={() => onSelectBand(band.id)}
          >
            <img src={band.image} alt={band.name} />
            <p>{band.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
