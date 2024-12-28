import { useState } from 'react';
import CaseSelector from '../components/CaseSelector';
import SizeSelector from '../components/SizeSelector';
import BandSelector from '../components/BandSelector';
import CollectionSwitcher from '../components/CollectionSwitcher';
import PriceDisplay from '../components/PriceDisplay';
import WatchPreview from '../components/WatchPreview';
import calculatePrice from '../utils/priceCalculator';

export default function Customize() {
  const cases = [...]; // Array of case objects
  const sizes = [42, 46];
  const bands = [...]; // Array of band objects
  const collections = [...]; // Array of collection objects

  const [selectedCase, setSelectedCase] = useState(cases[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedBand, setSelectedBand] = useState(bands[0]);
  const [selectedCollection, setSelectedCollection] = useState(collections[0]);

  const price = calculatePrice(selectedCase, selectedSize, selectedBand);

  return (
    <main>
      <CollectionSwitcher
        collections={collections}
        selectedCollection={selectedCollection}
        onSelectCollection={setSelectedCollection}
      />
      <CaseSelector
        cases={cases}
        selectedCase={selectedCase}
        onSelectCase={setSelectedCase}
      />
      <SizeSelector
        sizes={sizes}
        selectedSize={selectedSize}
        onSelectSize={setSelectedSize}
      />
      <BandSelector
        bands={bands}
        selectedBand={selectedBand}
        onSelectBand={setSelectedBand}
      />
      <WatchPreview
        selectedCase={selectedCase}
        selectedSize={selectedSize}
        selectedBand={selectedBand}
      />
      <PriceDisplay price={price} />
    </main>
  );
}
