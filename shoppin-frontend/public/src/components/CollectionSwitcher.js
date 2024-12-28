import styles from '../styles/customize.module.css';

export default function CollectionSwitcher({ collections, selectedCollection, onSelectCollection }) {
  return (
    <div className={styles.collectionSwitcher}>
      <h3>Select Collection</h3>
      <select
        value={selectedCollection}
        onChange={(e) => onSelectCollection(e.target.value)}
      >
        {collections.map((collection) => (
          <option key={collection.id} value={collection.id}>
            {collection.name}
          </option>
        ))}
      </select>
    </div>
  );
}
