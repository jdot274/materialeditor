import { useState } from 'react';
import { useMaterialStore } from '../../../store/materialStore';
import { ColorPicker } from './ColorPicker';

interface ColorInputProps {
  label: string;
  color: string | null;
  setColor: (color: string | null) => void;
}

function ColorInput({ label, color, setColor }: ColorInputProps) {
  const [showPicker, setShowPicker] = useState(false);
  
  return (
    <div className="flex items-center justify-between">
      <span>{label}</span>
      <ColorPicker
        color={color ?? '#ffffff'}
        onChange={setColor}
        showPicker={showPicker}
        setShowPicker={setShowPicker}
      />
    </div>
  );
}

export function ColorInputs() {
  const { 
    color, setColor,
    emissiveColor, setEmissiveColor,
    fuzzColor, setFuzzColor
  } = useMaterialStore();

  return (
    <div className="space-y-4">
      <ColorInput label="Base Color" color={color} setColor={setColor} />
      <ColorInput label="Emissive Color" color={emissiveColor} setColor={setEmissiveColor} />
      <ColorInput label="Fuzz Color" color={fuzzColor} setColor={setFuzzColor} />
    </div>
  );
}