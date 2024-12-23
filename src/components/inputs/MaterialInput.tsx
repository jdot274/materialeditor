interface MaterialInputProps {
  label: string;
  value: number | null;
  onChange: (value: number | null) => void;
  min?: number;
  max?: number;
  step?: number;
}

export function MaterialInput({ 
  label, 
  value, 
  onChange, 
  min = 0, 
  max = 1, 
  step = 0.1 
}: MaterialInputProps) {
  return (
    <div className="flex items-center justify-between">
      <span>{label}</span>
      <input
        type="number"
        value={value ?? ''}
        onChange={(e) => {
          const val = parseFloat(e.target.value);
          onChange(!isNaN(val) ? Math.max(min, Math.min(max, val)) : null);
        }}
        min={min}
        max={max}
        step={step}
        className="w-20 p-1 border rounded"
        placeholder="-"
      />
    </div>
  );
}