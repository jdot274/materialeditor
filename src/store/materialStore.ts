import { create } from 'zustand';

interface MaterialState {
  // Base Material Properties
  baseColor: string | null;
  metallic: number | null;
  specular: number | null;
  roughness: number | null;
  anisotropy: number | null;
  emissiveColor: string | null;
  emissiveStrength: number | null;
  normal: number | null;
  tangent: number | null;
  worldPositionOffset: number | null;
  ambientOcclusion: number | null;
  pixelDepthOffset: number | null;
  
  // Additional Properties
  opacity: number | null;
  opacityMask: number | null;
  ior: number | null;
  surfaceThickness: number | null;
  frontMaterial: string | null;
  
  // New Properties
  refraction: number | null;
  subsurfaceColor: string | null;
  
  // Updated Sheen Properties
  sheenColor: string | null;     // Color of the sheen reflection
  sheenRoughness: number | null; // Roughness of the sheen reflection
  sheenStrength: number | null;  // Intensity of the sheen effect

  // Setters
  setBaseColor: (color: string | null) => void;
  setMetallic: (value: number | null) => void;
  setSpecular: (value: number | null) => void;
  setRoughness: (value: number | null) => void;
  setAnisotropy: (value: number | null) => void;
  setEmissiveColor: (color: string | null) => void;
  setEmissiveStrength: (value: number | null) => void;
  setNormal: (value: number | null) => void;
  setTangent: (value: number | null) => void;
  setWorldPositionOffset: (value: number | null) => void;
  setAmbientOcclusion: (value: number | null) => void;
  setPixelDepthOffset: (value: number | null) => void;
  setOpacity: (value: number | null) => void;
  setOpacityMask: (value: number | null) => void;
  setIor: (value: number | null) => void;
  setSurfaceThickness: (value: number | null) => void;
  setFrontMaterial: (material: string | null) => void;
  setRefraction: (value: number | null) => void;
  setSubsurfaceColor: (color: string | null) => void;
  setSheenColor: (color: string | null) => void;
  setSheenRoughness: (value: number | null) => void;
  setSheenStrength: (value: number | null) => void;
}

export const useMaterialStore = create<MaterialState>((set) => ({
  // Initial values
  baseColor: null,
  metallic: null,
  specular: null,
  roughness: null,
  anisotropy: null,
  emissiveColor: null,
  emissiveStrength: null,
  normal: null,
  tangent: null,
  worldPositionOffset: null,
  ambientOcclusion: null,
  pixelDepthOffset: null,
  opacity: null,
  opacityMask: null,
  ior: null,
  surfaceThickness: null,
  frontMaterial: null,
  refraction: null,
  subsurfaceColor: null,
  sheenColor: null,
  sheenRoughness: null,
  sheenStrength: null,

  // Setters
  setBaseColor: (color) => set({ baseColor: color }),
  setMetallic: (value) => set({ metallic: value }),
  setSpecular: (value) => set({ specular: value }),
  setRoughness: (value) => set({ roughness: value }),
  setAnisotropy: (value) => set({ anisotropy: value }),
  setEmissiveColor: (color) => set({ emissiveColor: color }),
  setEmissiveStrength: (value) => set({ emissiveStrength: value }),
  setNormal: (value) => set({ normal: value }),
  setTangent: (value) => set({ tangent: value }),
  setWorldPositionOffset: (value) => set({ worldPositionOffset: value }),
  setAmbientOcclusion: (value) => set({ ambientOcclusion: value }),
  setPixelDepthOffset: (value) => set({ pixelDepthOffset: value }),
  setOpacity: (value) => set({ opacity: value }),
  setOpacityMask: (value) => set({ opacityMask: value }),
  setIor: (value) => set({ ior: value }),
  setSurfaceThickness: (value) => set({ surfaceThickness: value }),
  setFrontMaterial: (material) => set({ frontMaterial: material }),
  setRefraction: (value) => set({ refraction: value }),
  setSubsurfaceColor: (color) => set({ subsurfaceColor: color }),
  setSheenColor: (color) => set({ sheenColor: color }),
  setSheenRoughness: (value) => set({ sheenRoughness: value }),
  setSheenStrength: (value) => set({ sheenStrength: value }),
}));