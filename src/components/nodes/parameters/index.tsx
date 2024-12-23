import { BaseColorNode } from './BaseColorNode';
import { ParameterNode } from './ParameterNode';
import type { FC } from 'react';
import type { NodeProps } from 'reactflow';

type CustomNodeProps = NodeProps & {
  id: string;
};

export const parameterNodes: Record<string, FC<CustomNodeProps>> = {
  baseColor: BaseColorNode,
  metallic: (props) => <ParameterNode {...props} label="Metallic" paramId="metallic" />,
  specular: (props) => <ParameterNode {...props} label="Specular" paramId="specular" />,
  roughness: (props) => <ParameterNode {...props} label="Roughness" paramId="roughness" />,
  anisotropy: (props) => <ParameterNode {...props} label="Anisotropy" paramId="anisotropy" />,
  emissiveColor: BaseColorNode,
  opacity: (props) => <ParameterNode {...props} label="Opacity" paramId="opacity" />,
  opacityMask: (props) => <ParameterNode {...props} label="Opacity Mask" paramId="opacityMask" />,
  normal: (props) => <ParameterNode {...props} label="Normal" paramId="normal" />,
  tangent: (props) => <ParameterNode {...props} label="Tangent" paramId="tangent" />,
  worldPositionOffset: (props) => (
    <ParameterNode {...props} label="World Position Offset" paramId="worldPositionOffset" />
  ),
  ambientOcclusion: (props) => (
    <ParameterNode {...props} label="Ambient Occlusion" paramId="ambientOcclusion" />
  ),
  ior: (props) => <ParameterNode {...props} label="IOR" paramId="ior" min={1} max={3} step={0.01} />,
  surfaceThickness: (props) => (
    <ParameterNode {...props} label="Surface Thickness" paramId="surfaceThickness" max={10} />
  ),
  pixelDepthOffset: (props) => (
    <ParameterNode {...props} label="Pixel Depth Offset" paramId="pixelDepthOffset" />
  ),
};