import { useEffect } from 'react';
import { useMaterialStore } from '../store/materialStore';

export function useNodeConnections() {
  const { setMetallic, setTransparency } = useMaterialStore();

  useEffect(() => {
    const onConnect = (e: CustomEvent) => {
      const { source, targetHandle } = e.detail;
      if (targetHandle === 'metallic' || targetHandle === 'transparency') {
        const sourceNode = document.querySelector(`[data-id="${source}"]`);
        if (sourceNode) {
          const input = sourceNode.querySelector('input');
          if (input) {
            const value = parseFloat(input.value);
            if (targetHandle === 'metallic') {
              setMetallic(value);
            } else {
              setTransparency(value);
            }
          }
        }
      }
    };

    document.addEventListener('reactflow:connect', onConnect as EventListener);
    return () => document.removeEventListener('reactflow:connect', onConnect as EventListener);
  }, [setMetallic, setTransparency]);
}