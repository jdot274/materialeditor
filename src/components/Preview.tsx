import { Canvas } from '@react-three/fiber';
import { OrbitControls, SoftShadows, Environment } from '@react-three/drei';
import { useMaterialStore } from '../store/materialStore';

function Sphere() {
  const {
    baseColor,
    metallic,
    specular,
    roughness,
    anisotropy,
    emissiveColor,
    emissiveStrength,
    normal,
    opacity,
    opacityMask,
    ior,
    surfaceThickness,
    refraction,
    subsurfaceColor,
    sheenColor,
    sheenRoughness,
    sheenStrength,
  } = useMaterialStore();

  return (
    <mesh castShadow receiveShadow>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial
        color={baseColor ?? '#ffffff'}
        metalness={metallic ?? 0}
        roughness={roughness ?? 0.5}
        emissive={emissiveColor ?? '#000000'}
        emissiveIntensity={emissiveStrength ?? 1}
        clearcoat={specular ?? 0}
        anisotropy={anisotropy ?? 0}
        normalScale={normal ? [normal, normal] : [1, 1]}
        transparent={true}
        opacity={(opacity ?? 1) * (opacityMask ?? 1)}
        ior={ior ?? 1.5}
        thickness={surfaceThickness ?? 0}
        transmission={refraction ?? 0}
        attenuationColor={subsurfaceColor ?? '#ffffff'}
        sheen={sheenStrength ?? 0}
        sheenRoughness={sheenRoughness ?? 0.5}
        sheenColor={sheenColor ?? '#ffffff'}
        envMapIntensity={1}
      />
    </mesh>
  );
}

function Ground() {
  return (
    <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, -1.5, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="#1a1a1a" roughness={1} />
    </mesh>
  );
}

export function Preview() {
  return (
    <div className="h-full">
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 45 }}>
        <color attach="background" args={['#000000']} />
        <SoftShadows size={2.5} samples={16} focus={0.5} />
        
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 5, 0]}
          intensity={2}
          shadow-mapSize={1024}
        />
        
        <Environment preset="studio" />
        
        <Sphere />
        <Ground />
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}