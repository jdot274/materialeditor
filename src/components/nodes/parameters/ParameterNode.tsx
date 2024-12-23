import { Handle, Position } from 'reactflow';
import { useState } from 'react';
import { useNodeConnection } from '../../../hooks/useNodeConnection';

interface ParameterNodeProps {
  id: string;
  label: string;
  paramId: string;
  min?: number;
  max?: number;
  step?: number;
}

export function ParameterNode({ id, label, paramId, min = 0, max = 1, step = 0.1 }: ParameterNodeProps) {
  const [value, setValue] = useState('0');
  useNodeConnection(id);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="text-sm font-medium mb-2">{label}</div>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        min={min}
        max={max}
        step={step}
        className="w-20 p-1 border rounded"
      />
      <Handle type="source" position={Position.Right} id={paramId} />
    </div>
  );
}