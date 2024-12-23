import { Handle, Position } from 'reactflow';
import { useState } from 'react';
import { useNodeConnection } from '../../hooks/useNodeConnection';

interface NumberNodeProps {
  id: string;
  data: { value: number };
}

export function NumberNode({ id, data }: NumberNodeProps) {
  const [value, setValue] = useState(data.value.toString());
  useNodeConnection(id);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = evt.target.value;
    setValue(newValue);
    const parsed = parseFloat(newValue);
    if (!isNaN(parsed)) {
      data.value = Math.max(0, Math.min(1, parsed));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="text-sm font-medium mb-2">Number</div>
      <input
        type="number"
        step="0.1"
        min="0"
        max="1"
        value={value}
        onChange={handleChange}
        className="w-20 p-1 border rounded"
      />
      <Handle type="source" position={Position.Right} id="value" />
    </div>
  );
}