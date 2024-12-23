import React from 'react';

interface MaterialValueProps {
  value: string | number | null;
  type: 'number' | 'color';
}

export function MaterialValue({ value, type }: MaterialValueProps) {
  if (type === 'color' && typeof value === 'string') {
    return (
      <div 
        className="w-6 h-6 rounded border border-gray-300"
        style={{ backgroundColor: value }}
      />
    );
  }

  return (
    <div className="px-2 py-1 bg-gray-100 rounded text-sm text-gray-600 min-w-[60px] text-right">
      {value ?? '-'}
    </div>
  );
}