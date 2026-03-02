import { SegmentedControl } from "@mantine/core";

type Props<T> = {
  items: { label: string; value: T }[];
  value: T;
  onChange: (value: T) => void;
};

export function FilterSegmented<T extends string>({ items, value, onChange }: Props<T>) {
  return (
    <SegmentedControl
      value={value}
      onChange={(v) => {
        onChange(v as T);
      }}
      data={items}
    />
  );
}
