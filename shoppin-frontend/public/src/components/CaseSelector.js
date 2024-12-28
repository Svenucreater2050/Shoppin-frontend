import styles from '../styles/customize.module.css';

export default function CaseSelector({ cases, selectedCase, onSelectCase }) {
  return (
    <div className={styles.caseSelector}>
      <h3>Select Case</h3>
      <div className={styles.grid}>
        {cases.map((item) => (
          <button
            key={item.id}
            className={selectedCase === item.id ? styles.selected : ''}
            onClick={() => onSelectCase(item.id)}
          >
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
