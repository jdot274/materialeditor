import { useEffect } from 'react';
import { useMaterialStore } from '../store/materialStore';
import { Connection } from 'reactflow';

export function useNodeConnection(nodeId: string) {
  const store = useMaterialStore();

  useEffect(() => {
    const handleConnect = (event: CustomEvent<Connection>) => {
      const { source, sourceHandle, target, targetHandle } = event.detail;
      
      if (!target || !targetHandle || source !== nodeId) return;

      const sourceNode = document.querySelector(`[data-id="${source}"]`);
      if (!sourceNode) return;

      // Handle color nodes
      const colorPicker = sourceNode.querySelector('.react-colorful');
      if (colorPicker) {
        const setter = `set${targetHandle.charAt(0).toUpperCase() + targetHandle.slice(1)}` as keyof typeof store;
        if (typeof store[setter] === 'function') {
          const color = (sourceNode.querySelector('[style*="background-color"]') as HTMLElement)?.style.backgroundColor;
          (store[setter] as Function)(color);
        }
        return;
      }

      // Handle number nodes
      const input = sourceNode.querySelector('input');
      if (input) {
        const value = parseFloat(input.value);
        if (!isNaN(value)) {
          const setter = `set${targetHandle.charAt(0).toUpperCase() + targetHandle.slice(1)}` as keyof typeof store;
          if (typeof store[setter] === 'function') {
            (store[setter] as Function)(value);
          }
        }
      }
    };

    const handleEdgeRemove = (event: CustomEvent<Connection>) => {
      const { source, targetHandle } = event.detail;
      if (source !== nodeId || !targetHandle) return;

      const setter = `set${targetHandle.charAt(0).toUpperCase() + targetHandle.slice(1)}` as keyof typeof store;
      if (typeof store[setter] === 'function') {
        (store[setter] as Function)(null);
      }
    };

    document.addEventListener('reactflow:connect', handleConnect as EventListener);
    document.addEventListener('reactflow:edge-remove', handleEdgeRemove as EventListener);

    return () => {
      document.removeEventListener('reactflow:connect', handleConnect as EventListener);
      document.removeEventListener('reactflow:edge-remove', handleEdgeRemove as EventListener);
    };
  }, [nodeId, store]);
}