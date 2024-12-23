import { Handle, Position } from 'reactflow';
import { useMaterialStore } from '../../store/materialStore';
import { useEffect, useState } from 'react';

export function TransparencyNode({ data, id }: { data: { value: number }, id: string }) {
  const { setTransparency } = useMaterialStore();
  const [inputValue, setInputValue] = useState('0');

  const updateValue = (newValue: number) => {
    const clampedValue = Math.max(0, Math.min(1, newValue));
    data.value = clampedValue;
    setTransparency(clampedValue);
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      const newValue = parseFloat(inputValue);
      if (!isNaN(newValue)) {
        updateValue(newValue);
      }
    }
  };

  useEffect(() => {
    const onConnect = (e: CustomEvent) => {
      const { source } = e.detail;
      if (source === id) {
        updateValue(parseFloat(inputValue));
      }
    };

    const onEdgeRemove = (e: CustomEvent) => {
      const { source } = e.detail;
      if (source === id) {
        setTransparency(null);
      }
    };

    document.addEventListener('reactflow:edge-update', onConnect as EventListener);
    document.addEventListener('reactflow:connect', onConnect as EventListener);
    document.addEventListener('reactflow:edge-remove', onEdgeRemove as EventListener);

    return () => {
      document.removeEventListener('reactflow:edge-update', onConnect as EventListener);
      document.removeEventListener('reactflow:connect', onConnect as EventListener);
      document.removeEventListener('reactflow:edge-remove', onEdgeRemove as EventListener);
    };
  }, [id, inputValue, setTransparency]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="text-sm font-medium mb-2">Transparency</div>
      <input
        type="number"
        step="0.1"
        min="0"
        max="1"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="w-20 p-1 border rounded"
      />
      <Handle type="source" position={Position.Right} id="value" />
    </div>
  );
}