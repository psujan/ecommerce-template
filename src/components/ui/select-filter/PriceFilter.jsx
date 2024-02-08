/* eslint-disable react/prop-types */
import Select from "react-dropdown-select";
import { Form } from "react-bootstrap";
import Button from "../Button";

const dropdownRenderer = () => {
  return (
    <div className="p-3" style={{ minWidth: "220px", overflow: "auto" }}>
      <div className="d-flex gap-3 mb-3">
        <Form.Control placeholder="Min" size="md" type="number" />
        <Form.Control placeholder="Max" size="md" type="number" />
      </div>
      <div className="w-100">
        <Button
          type=""
          appendClass="btn-outline-primary w-100 btn-sm"
          title="Apply"
        ></Button>
      </div>
    </div>
  );
};

const contentRenderer = () => {
  return (
    <div
      style={{ cursor: "pointer" }}
      className="fs-text d-flex align-items-bottom "
    >
      <span className="pe-1 text-muted">Price</span>
    </div>
  );
};

export default function PriceFilter() {
  return (
    <Select
      multi={true}
      className="filter-select price-select"
      placeholder="Price"
      dropdownRenderer={dropdownRenderer}
      contentRenderer={contentRenderer}
      color="#f3602b"
    />
  );
}
