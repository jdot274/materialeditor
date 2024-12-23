import { Handle, Position } from 'reactflow';
import { HexColorPicker } from 'react-colorful';
import { useState } from 'react';
import { useNodeConnection } from '../../hooks/useNodeConnection';

interface ColorNodeProps {
  id: string;
  data: { color: string };
}

export function ColorNode({ id, data }: ColorNodeProps) {
  const [showPicker, setShowPicker] = useState(false);
  useNodeConnection(id);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="text-sm font-medium mb-2">Color</div>
      <div className="relative">
        <div
          className="w-8 h-8 rounded cursor-pointer border border-gray-300"
          style={{ backgroundColor: data.color }}
          onClick={() => setShowPicker(!showPicker)}
        />
        {showPicker && (
          <div className="absolute z-50 top-full mt-2">
            <HexColorPicker color={data.color} onChange={(color) => data.color = color} />
          </div>
        )}
      </div>
      <Handle type="source" position={Position.Right} id="color" />
    </div>
  );
}