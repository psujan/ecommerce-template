/* eslint-disable react/prop-types */
import { useState } from "react";
import Select from "react-dropdown-select";
const options = [
  {
    value: 1,
    label: "Men's Tshirt",
  },
  {
    value: 2,
    label: "Men's Jacket",
  },
  {
    value: 3,
    label: "Hoodies",
  },
  {
    value: 4,
    label: "Jackets",
  },
  {
    value: 5,
    label: "Pants",
  },
];

const dropdownRenderer = ({ props, state, methods }) => {
  const checkedValues = state.values.map((v) => v.value);

  // const removeFromCheckedItem = (v) => {
  //   console.log(v);
  //   state.values.filter((item) => item.value != v);
  // };

  const checkboxList = props.options.map((item, index) => {
    return (
      <div key={index} className="py-2 d-flex align-items-center fs-text">
        <input
          type="checkbox"
          name="category"
          id={item.label}
          value={item.value}
          checked={checkedValues.indexOf(item.value) !== -1}
          className="custom-checkbox d-inline-block me-2"
          onChange={(e) =>
            e.target.checked
              ? methods.addItem(item)
              : methods.removeItem(e, item)
          }
        />
        <label htmlFor={item.label}>{item.label}</label>
      </div>
    );
  });

  return <div className="p-2">{checkboxList}</div>;
};

const contentRenderer = ({ state }) => {
  return (
    <div
      style={{ cursor: "pointer" }}
      className="fs-text d-flex align-items-bottom "
    >
      <span className="pe-1 text-muted">Category</span>{" "}
      {state.values.length > 0 && (
        <span
          className="box-circle-sm d-inline-flex bg-primary text-white fw-medium"
          style={{ fontSize: "10.2px" }}
        >
          {state.values.length}
        </span>
      )}
    </div>
  );
};

export default function CategoryFilter() {
  const [categoryValue, setcategoryValue] = useState([]);

  const handleChange = (values) => {
    setcategoryValue(() => [...values]);
  };

  return (
    <Select
      multi={true}
      options={options}
      onChange={(values) => handleChange(values)}
      className="filter-select"
      placeholder="Category"
      values={[...categoryValue]}
      dropdownRenderer={dropdownRenderer}
      contentRenderer={contentRenderer}
      color="#f3602b"
    />
  );
}
