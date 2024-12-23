import { Handle, Position } from 'reactflow';
import { useMaterialStore } from '../../../store/materialStore';
import { useState } from 'react';

interface MaterialInputProps {
  label: string;
  id: string;
  value: number | null;
  setValue: (value: number | null) => void;
}

export function MaterialInput({ label, id, value, setValue }: MaterialInputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const value = parseFloat(inputValue);
      if (!isNaN(value)) {
        const clampedValue = Math.max(0, Math.min(1, value));
        setValue(clampedValue);
      }
    }
  };

  return (
    <div className="flex items-center">
      <Handle 
        type="target" 
        position={Position.Left} 
        id={id} 
        style={{ left: 8 }}
      />
      <span className="ml-6">{label}</span>
      <div className="ml-auto flex items-center gap-2">
        <input
          type="number"
          min="0"
          max="1"
          step="0.1"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-16 p-1 text-sm border rounded"
          placeholder={value?.toFixed(2) ?? '-'}
        />
      </div>
    </div>
  );
}