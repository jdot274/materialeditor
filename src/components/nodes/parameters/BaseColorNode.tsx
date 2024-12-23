import { Handle, Position } from 'reactflow';
import { HexColorPicker } from 'react-colorful';
import { useState } from 'react';
import { useNodeConnection } from '../../../hooks/useNodeConnection';

export function BaseColorNode({ id }: { id: string }) {
  const [color, setColor] = useState('#ffffff');
  const [showPicker, setShowPicker] = useState(false);
  useNodeConnection(id);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="text-sm font-medium mb-2">Base Color</div>
      <div className="relative">
        <div
          className="w-8 h-8 rounded cursor-pointer border border-gray-300"
          style={{ backgroundColor: color }}
          onClick={() => setShowPicker(!showPicker)}
        />
        {showPicker && (
          <div className="absolute z-50 top-full mt-2">
            <HexColorPicker color={color} onChange={setColor} />
          </div>
        )}
      </div>
      <Handle type="source" position={Position.Right} id="baseColor" />
    </div>
  );
}