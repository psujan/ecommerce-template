import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
export default function ProductFilter() {
  return (
    <div>
      <h4 className="fw-bold mb-4">Filter</h4>
      <div className="filter-category mb-4">
        <h5 className="border-bottom pb-2 fw-medium">Price Range</h5>
        <div className="filter-options py-2 fs-text">
          <Row>
            <Col>
              <Form.Control placeholder="Min" size="sm" type="number" />
            </Col>
            <Col>
              <Form.Control placeholder="Max" size="sm" type="number" />
            </Col>
          </Row>
        </div>
      </div>
      <div className="filter-category mb-4">
        <h5 className="border-bottom pb-2 fw-medium">Brand</h5>
        <div className="filter-options py-2 fs-text">
          <Form.Check
            type={"checkbox"}
            label="Apple"
            className="py-1"
            id="Apple"
          />
          <Form.Check type={"checkbox"} label="HP" className="py-1" id="HP" />
          <Form.Check
            type={"checkbox"}
            label="Asus"
            className="py-1"
            id="Asus"
          />
          <Form.Check
            type={"checkbox"}
            label="Dell"
            className="py-1"
            id="Dell"
          />
          <Form.Check
            type={"checkbox"}
            label="Avita"
            className="py-1"
            id="Avita"
          />
          <Form.Check type={"checkbox"} label="MSI" className="py-1" id="MSI" />
          <Form.Check
            type={"checkbox"}
            label="Lenovo"
            className="py-1"
            id="Lenovo"
          />
        </div>
      </div>
      <div className="filter-category mb-4">
        <h5 className="border-bottom pb-2 fw-medium">RAM</h5>
        <div className="filter-options py-2 fs-text">
          <Form.Check type={"checkbox"} label="4GB" className="py-1" id="4GB" />
          <Form.Check type={"checkbox"} label="8GB" className="py-1" id="8GB" />
          <Form.Check
            type={"checkbox"}
            label="16GB"
            className="py-1"
            id="16GB"
          />
          <Form.Check
            type={"checkbox"}
            label="32GB"
            className="py-1"
            id="32GB"
          />
        </div>
      </div>
      <div className="filter-category mb-4">
        <h5 className="border-bottom pb-2 fw-medium">Storage Capacity</h5>
        <div className="filter-options py-2 fs-text">
          <Form.Check
            type={"checkbox"}
            label="128GB"
            className="py-1"
            id="128GB"
          />
          <Form.Check
            type={"checkbox"}
            label="256GB"
            className="py-1"
            id="256GB"
          />
          <Form.Check
            type={"checkbox"}
            label="512GB"
            className="py-1"
            id="512GB"
          />
          <Form.Check type={"checkbox"} label="1TB" className="py-1" id="1TB" />
        </div>
      </div>
      <div className="filter-category mb-4">
        <h5 className="border-bottom pb-2 fw-medium">Generation</h5>
        <div className="filter-options py-2 fs-text">
          <Form.Check
            type={"checkbox"}
            label="3rd "
            className="py-1"
            id="3rd "
          />
          <Form.Check type={"checkbox"} label="4th" className="py-1" id="4th" />
          <Form.Check type={"checkbox"} label="5th" className="py-1" id="5th" />
          <Form.Check type={"checkbox"} label="6th" className="py-1" id="6th" />
          <Form.Check type={"checkbox"} label="7th" className="py-1" id="7th" />
          <Form.Check
            type={"checkbox"}
            label="8th and above"
            className="py-1"
            id="8th and above"
          />
        </div>
      </div>
      <div className="filter-category mb-4">
        <h5 className="border-bottom pb-2 fw-medium">Display Size</h5>
        <div className="filter-options py-2 fs-text">
          <Form.Check
            type={"checkbox"}
            label="14 Inch"
            className="py-1"
            id="14 Inch"
          />
          <Form.Check
            type={"checkbox"}
            label="15 Inch"
            className="py-1"
            id="15 Inch"
          />
          <Form.Check
            type={"checkbox"}
            label="16 Inch"
            className="py-1"
            id="16 Inch"
          />
          <Form.Check
            type={"checkbox"}
            label="17 Inch"
            className="py-1"
            id="17 Inch"
          />
        </div>
      </div>
      <div className="filter-category mb-4">
        <h5 className="border-bottom pb-2 fw-medium">Refurbished</h5>
        <div className="filter-options py-2 fs-text">
          <Form.Check
            type={"radio"}
            label="Yes"
            className="py-1"
            id="Yes"
            name="refurbished"
          />
          <Form.Check
            type={"radio"}
            label="No"
            className="py-1"
            id="No"
            name="refurbished"
          />
        </div>
      </div>
    </div>
  );
}
