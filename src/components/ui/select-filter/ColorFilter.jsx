/* eslint-disable react/prop-types */
import { useState } from "react";
import Select from "react-dropdown-select";
const options = [
  {
    value: 1,
    label: "Black",
    colorCode: "#000",
  },
  {
    value: 2,
    label: "Purple",
    colorCode: "#A020F0",
  },
  {
    value: 3,
    label: "Indigo",
    colorCode: "#4B0082",
  },
  {
    value: 4,
    label: "Green",
    colorCode: "#008000",
  },
  {
    value: 5,
    label: "Yellow",
    colorCode: "#FFFF00",
  },
];

const dropdownRenderer = ({ props, state, methods }) => {
  const checkedValues = state.values.map((v) => v.value);

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
        <label htmlFor={item.label} className="d-flex align-items-center">
          <span className="pe-2">{item.label}</span>
          <span
            className="box-circle-sm p-1 d-inline-flex"
            style={{ backgroundColor: item.colorCode }}
          ></span>
        </label>
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
      <span className="pe-1 text-muted">Color</span>
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

export default function ColorFilter() {
  const [colorValue, setColorValue] = useState([]);

  const handleChange = (values) => {
    setColorValue(() => [...values]);
  };

  return (
    <Select
      multi={true}
      options={options}
      onChange={(values) => handleChange(values)}
      className="filter-select"
      placeholder="Color"
      values={[...colorValue]}
      dropdownRenderer={dropdownRenderer}
      contentRenderer={contentRenderer}
      color="#f3602b"
    />
  );
}
