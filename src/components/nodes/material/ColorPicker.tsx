import { HexColorPicker } from 'react-colorful';
import { useRef, useEffect } from 'react';
import { useMaterialStore } from '../../../store/materialStore';

interface ColorPickerProps {
  showPicker: boolean;
  setShowPicker: (show: boolean) => void;
}

export function ColorPicker({ showPicker, setShowPicker }: ColorPickerProps) {
  const { color, setColor } = useMaterialStore();
  const colorPickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (colorPickerRef.current && !colorPickerRef.current.contains(event.target as Node)) {
        setShowPicker(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setShowPicker]);

  return (
    <div className="relative" ref={colorPickerRef}>
      <div
        className="w-6 h-6 rounded cursor-pointer border border-gray-300"
        style={{ backgroundColor: color }}
        onClick={() => setShowPicker(!showPicker)}
      />
      {showPicker && (
        <div className="absolute z-50 top-8 right-0">
          <HexColorPicker color={color} onChange={setColor} />
        </div>
      )}
    </div>
  );
}