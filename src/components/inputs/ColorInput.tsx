import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

interface ColorInputProps {
  label: string;
  value: string | null;
  onChange: (color: string | null) => void;
}

export function ColorInput({ label, value, onChange }: ColorInputProps) {
  const [showPicker, setShowPicker] = useState(false);
  
  return (
    <div className="flex items-center justify-between">
      <span>{label}</span>
      <div className="relative">
        <div
          className="w-6 h-6 rounded cursor-pointer border border-gray-300"
          style={{ backgroundColor: value ?? '#ffffff' }}
          onClick={() => setShowPicker(!showPicker)}
        />
        {showPicker && (
          <div className="absolute z-50 top-8 right-0">
            <HexColorPicker 
              color={value ?? '#ffffff'} 
              onChange={(color) => onChange(color)} 
            />
          </div>
        )}
      </div>
    </div>
  );
}