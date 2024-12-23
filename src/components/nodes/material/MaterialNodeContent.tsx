import { MaterialInputGroup } from './MaterialInputGroup';

const MATERIAL_INPUTS = [
  { id: 'baseColor', label: 'Base Color' },
  { id: 'metallic', label: 'Metallic' },
  { id: 'specular', label: 'Specular' },
  { id: 'roughness', label: 'Roughness' },
  { id: 'anisotropy', label: 'Anisotropy' },
  { id: 'emissiveColor', label: 'Emissive Color' },
  { id: 'opacity', label: 'Opacity' },
  { id: 'opacityMask', label: 'Opacity Mask' },
  { id: 'normal', label: 'Normal' },
  { id: 'tangent', label: 'Tangent' },
  { id: 'worldPositionOffset', label: 'World Position Offset' },
  { id: 'ambientOcclusion', label: 'Ambient Occlusion' },
  { id: 'ior', label: 'IOR' },
  { id: 'surfaceThickness', label: 'Surface Thickness' },
  { id: 'frontMaterial', label: 'Front Material' },
  { id: 'pixelDepthOffset', label: 'Pixel Depth Offset' },
] as const;

export function MaterialNodeContent() {
  return (
    <div className="space-y-4">
      {MATERIAL_INPUTS.map((input) => (
        <MaterialInputGroup key={input.id} {...input} />
      ))}
    </div>
  );
}