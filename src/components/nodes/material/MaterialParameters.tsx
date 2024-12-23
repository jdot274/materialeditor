import { Handle, Position } from 'reactflow';
import { MaterialInput } from './MaterialInput';
import { useMaterialStore } from '../../../store/materialStore';

export function MaterialParameters() {
  const store = useMaterialStore();

  const parameters = [
    { label: 'Diffuse Albedo', id: 'diffuseAlbedo', value: store.diffuseAlbedo, setter: store.setDiffuseAlbedo },
    { label: 'F0', id: 'f0', value: store.f0, setter: store.setF0 },
    { label: 'F90', id: 'f90', value: store.f90, setter: store.setF90 },
    { label: 'Roughness', id: 'roughness', value: store.roughness, setter: store.setRoughness },
    { label: 'Anisotropy', id: 'anisotropy', value: store.anisotropy, setter: store.setAnisotropy },
    { label: 'Normal', id: 'normal', value: store.normal, setter: store.setNormal },
    { label: 'Tangent', id: 'tangent', value: store.tangent, setter: store.setTangent },
    { label: 'SSS MFP', id: 'sssMfp', value: store.sssMfp, setter: store.setSssMfp },
    { label: 'SSS MFP Scale', id: 'sssMfpScale', value: store.sssMfpScale, setter: store.setSssMfpScale },
    { label: 'SSS Phase Anisotropy', id: 'sssPhaseAnisotropy', value: store.sssPhaseAnisotropy, setter: store.setSssPhaseAnisotropy },
    { label: 'Second Roughness', id: 'secondRoughness', value: store.secondRoughness, setter: store.setSecondRoughness },
    { label: 'Second Roughness Weight', id: 'secondRoughnessWeight', value: store.secondRoughnessWeight, setter: store.setSecondRoughnessWeight },
    { label: 'Fuzz Roughness', id: 'fuzzRoughness', value: store.fuzzRoughness, setter: store.setFuzzRoughness },
    { label: 'Fuzz Amount', id: 'fuzzAmount', value: store.fuzzAmount, setter: store.setFuzzAmount },
    { label: 'Glint Density', id: 'glintDensity', value: store.glintDensity, setter: store.setGlintDensity },
    { label: 'Glint UVs', id: 'glintUVs', value: store.glintUVs, setter: store.setGlintUVs },
  ];

  return (
    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
      {parameters.map((param) => (
        <MaterialInput
          key={param.id}
          label={param.label}
          id={param.id}
          value={param.value}
          setValue={param.setter}
        />
      ))}
    </div>
  );
}