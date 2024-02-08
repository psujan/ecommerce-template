/* eslint-disable react/prop-types */
import { useState } from "react";
import Select from "react-dropdown-select";
const options = [
  {
    value: 2,
    label: "Clearance",
  },
  {
    value: 3,
    label: "Weekend Special",
  },
  {
    value: 4,
    label: "Christmal Special",
  },
  {
    value: 5,
    label: "New Year Special",
  },
];

const dropdownRenderer = ({ props, state, methods }) => {
  const checkedValues = state.values.map((v) => v.value);

  const checkboxList = props.options.map((item, index) => {
    return (
      <div key={index} className="py-2 d-flex align-items-center fs-text">
        <input
          type="checkbox"
          name="deal"
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
      <span className="pe-1 text-muted">Deals</span>{" "}
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

export default function DealFilter() {
  const [dealValue, setDealValue] = useState([]);

  const handleChange = (values) => {
    setDealValue(() => [...values]);
  };

  return (
    <Select
      multi={true}
      options={options}
      onChange={(values) => handleChange(values)}
      className="filter-select"
      placeholder="Deals"
      values={[...dealValue]}
      dropdownRenderer={dropdownRenderer}
      contentRenderer={contentRenderer}
      color="#f3602b"
    />
  );
}
