import { Handle, Position } from 'reactflow';
import { useMaterialStore } from '../../../store/materialStore';

export function MaterialOutputs() {
  const { roughness, metallic, transparency } = useMaterialStore();

  return (
    <div className="space-y-4">
      <Handle 
        type="source" 
        position={Position.Right} 
        id="roughness" 
        className="!bg-blue-500"
        data-value={roughness}
      />
      <Handle 
        type="source" 
        position={Position.Right} 
        id="metallic"
        className="!bg-green-500"
        data-value={metallic}
      />
      <Handle 
        type="source" 
        position={Position.Right} 
        id="transparency"
        className="!bg-purple-500"
        data-value={transparency}
      />
    </div>
  );
}