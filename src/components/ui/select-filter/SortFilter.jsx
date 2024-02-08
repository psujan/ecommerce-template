import { useState } from "react";
import Select from "react-dropdown-select";
const options = [
  {
    value: 1,
    label: "Relevancy",
  },
  {
    value: 2,
    label: "Name (A-Z)",
  },
  {
    value: 3,
    label: "Name (Z-A)",
  },
  {
    value: 4,
    label: "Price (Low-High)",
  },
  {
    value: 5,
    label: "Price (High-Low)",
  },
];

export default function SortFilter() {
  const [sortValue, setSortValue] = useState([]);

  const handleChange = (values) => {
    setSortValue(() => [...values]);
  };

  return (
    <Select
      multi={false}
      options={options}
      onChange={(values) => handleChange(values)}
      className="filter-select"
      placeholder="Sort"
      values={[...sortValue]}
      color="#f3602b"
    />
  );
}
