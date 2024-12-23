import { useMaterialStore } from '../store/materialStore';
import { ColorInput } from './inputs/ColorInput';
import { MaterialInput } from './inputs/MaterialInput';

export function MaterialEditor() {
  const store = useMaterialStore();

  return (
    <div className="h-full bg-white">
      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Base Properties</h2>
          <ColorInput 
            label="Base Color" 
            value={store.baseColor} 
            onChange={store.setBaseColor} 
          />
          <MaterialInput 
            label="Metallic" 
            value={store.metallic} 
            onChange={store.setMetallic} 
          />
          <MaterialInput 
            label="Roughness" 
            value={store.roughness} 
            onChange={store.setRoughness} 
          />
          <MaterialInput 
            label="Specular" 
            value={store.specular} 
            onChange={store.setSpecular} 
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Emissive</h2>
          <ColorInput 
            label="Emissive Color" 
            value={store.emissiveColor} 
            onChange={store.setEmissiveColor} 
          />
          <MaterialInput 
            label="Emissive Strength" 
            value={store.emissiveStrength} 
            onChange={store.setEmissiveStrength}
            max={10}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Sheen</h2>
          <ColorInput 
            label="Sheen Color" 
            value={store.sheenColor} 
            onChange={store.setSheenColor} 
          />
          <MaterialInput 
            label="Sheen Roughness" 
            value={store.sheenRoughness} 
            onChange={store.setSheenRoughness} 
          />
          <MaterialInput 
            label="Sheen Strength" 
            value={store.sheenStrength} 
            onChange={store.setSheenStrength}
            step={0.01}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Transparency</h2>
          <MaterialInput 
            label="Opacity" 
            value={store.opacity} 
            onChange={store.setOpacity} 
          />
          <MaterialInput 
            label="Opacity Mask" 
            value={store.opacityMask} 
            onChange={store.setOpacityMask} 
          />
          <MaterialInput 
            label="Refraction" 
            value={store.refraction} 
            onChange={store.setRefraction} 
          />
          <MaterialInput 
            label="IOR" 
            value={store.ior} 
            onChange={store.setIor}
            min={1}
            max={3}
            step={0.01}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Surface</h2>
          <ColorInput 
            label="Subsurface Color" 
            value={store.subsurfaceColor} 
            onChange={store.setSubsurfaceColor} 
          />
          <MaterialInput 
            label="Surface Thickness" 
            value={store.surfaceThickness} 
            onChange={store.setSurfaceThickness}
            max={10}
          />
        </div>
      </div>
    </div>
  );
}