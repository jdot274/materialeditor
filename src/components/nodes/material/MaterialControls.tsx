import { useMaterialStore } from '../../../store/materialStore';

export function MaterialControls() {
  const { roughness, metallic, transparency } = useMaterialStore();

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span>Roughness</span>
        <span className="text-sm text-gray-500">{roughness?.toFixed(2) ?? '-'}</span>
      </div>
      <div className="flex items-center justify-between">
        <span>Metallic</span>
        <span className="text-sm text-gray-500">{metallic?.toFixed(2) ?? '-'}</span>
      </div>
      <div className="flex items-center justify-between">
        <span>Transparency</span>
        <span className="text-sm text-gray-500">{transparency?.toFixed(2) ?? '-'}</span>
      </div>
    </div>
  );
}