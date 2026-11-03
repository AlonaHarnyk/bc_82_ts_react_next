import type { Order } from "../../services/contactsApi";

interface SortNameSelectProps {
  order: Order;
  onSort: (query: Order) => void;
}

export default function SortNameSelect({ order, onSort }: SortNameSelectProps) {
  return (
    <select
      value={order}
      name="sortName"
      onChange={(e) => onSort(e.target.value as Order)}
    >
      <option value="asc">From 'A' to 'Z'</option>
      <option value="desc">From 'Z' to 'A'</option>
    </select>
  );
}
