import { Handle, Position } from 'reactflow';
import { MaterialValue } from './MaterialValue';
import { useMaterialStore } from '../../../store/materialStore';

interface MaterialInputProps {
  id: string;
  label: string;
}

export function MaterialInputGroup({ id, label }: MaterialInputProps) {
  const store = useMaterialStore();
  const value = store[id as keyof typeof store];
  const isColor = id === 'baseColor' || id === 'emissiveColor' || id === 'frontMaterial';

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <Handle type="target" position={Position.Left} id={id} />
        <span className="ml-6">{label}</span>
      </div>
      <MaterialValue value={value} type={isColor ? 'color' : 'number'} />
    </div>
  );
}