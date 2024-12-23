import { MaterialNodeContent } from './material/MaterialNodeContent';

export function MaterialNode() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 min-w-[300px]">
      <div className="text-lg font-bold mb-4">Material</div>
      <MaterialNodeContent />
    </div>
  );
}