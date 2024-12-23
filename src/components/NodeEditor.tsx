import React, { useCallback, useState } from 'react';
import ReactFlow, {
  Background,
  Controls,
  Node,
  Edge,
  Connection,
  addEdge,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { MaterialNode } from './nodes/MaterialNode';
import { parameterNodes } from './nodes/parameters';

const nodeTypes = {
  material: MaterialNode,
  ...parameterNodes,
};

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'material',
    position: { x: 250, y: 100 },
    data: {},
  },
];

export function NodeEditor() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onContextMenu = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      setContextMenu({
        x: event.clientX,
        y: event.clientY,
      });
    },
    [],
  );

  const addNode = useCallback((type: string) => {
    if (!contextMenu) return;
    
    const reactFlowBounds = document.querySelector('.react-flow')?.getBoundingClientRect();
    if (!reactFlowBounds) return;

    const position = {
      x: contextMenu.x - reactFlowBounds.left,
      y: contextMenu.y - reactFlowBounds.top,
    };

    const newNode: Node = {
      id: `${nodes.length + 1}`,
      type,
      position,
      data: {},
    };

    setNodes((nds) => [...nds, newNode]);
    setContextMenu(null);
  }, [contextMenu, nodes.length, setNodes]);

  const closeContextMenu = useCallback(() => {
    setContextMenu(null);
  }, []);

  return (
    <div className="h-full relative" onContextMenu={onContextMenu} onClick={closeContextMenu}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
      
      {contextMenu && (
        <div
          className="fixed bg-white rounded-lg shadow-lg py-2 z-50 max-h-[400px] overflow-y-auto"
          style={{ top: contextMenu.y, left: contextMenu.x }}
          onClick={(e) => e.stopPropagation()}
        >
          {Object.entries(parameterNodes).map(([type, _]) => (
            <button
              key={type}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors"
              onClick={() => addNode(type)}
            >
              Add {type.split(/(?=[A-Z])/).join(' ')} Node
            </button>
          ))}
        </div>
      )}
    </div>
  );
}