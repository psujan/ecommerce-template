import { Accordion } from "react-bootstrap";
export default function ModalFilterContent() {
  return (
    <Accordion bsPrefix={`modal-filter-accordion accordion`}>
      <Accordion.Item eventKey={0}>
        <Accordion.Header>
          <span className="fw-bold fs-text">Sort</span>
        </Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>
              <div className="d-flex align-items-center my-2">
                <input
                  type="radio"
                  className="custom-checkbox me-2"
                  name="sort"
                  id="relev"
                />
                <label htmlFor="relev">Relevancy</label>
              </div>
              <div className="d-flex align-items-center my-2">
                <input
                  type="radio"
                  className="custom-checkbox me-2"
                  name="sort"
                  id="name-asc"
                />
                <label htmlFor="name-asc">Name (A-Z)</label>
              </div>
              <div className="d-flex align-items-center my-2">
                <input
                  type="radio"
                  className="custom-checkbox me-2"
                  name="sort"
                  id="name-desc"
                />
                <label htmlFor="name-desc">Name (Z-A)</label>
              </div>
              <div className="d-flex align-items-center my-2">
                <input
                  type="radio"
                  className="custom-checkbox me-2"
                  name="sort"
                  id="price-asc"
                />
                <label htmlFor="price-asc">Price (Low-high)</label>
              </div>
              <div className="d-flex align-items-center my-2">
                <input
                  type="radio"
                  className="custom-checkbox me-2"
                  name="sort"
                  id="price-desc"
                />
                <label htmlFor="price-desc">Price (High - Low)</label>
              </div>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey={1}>
        <Accordion.Header>
          <span className="fw-bold fs-text">Price</span>
        </Accordion.Header>
        <Accordion.Body>
          <div className="d-flex gap-3 mb-3">
            <input
              placeholder="Min"
              type="number"
              className="form-control form-control-md"
            />
            <input
              placeholder="Max"
              type="number"
              className="form-control form-control-md"
            />
          </div>
          <div className="w-100">
            <button
              title=""
              className="baseBtn btn-outline-primary w-100 btn-sm "
            >
              Apply
            </button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey={2}>
        <Accordion.Header>
          <span className="fw-bold fs-text">Category</span>
        </Accordion.Header>
        <Accordion.Body>
          <div className="d-flex align-items-center my-2">
            <input
              type="checkbox"
              className="custom-checkbox me-2"
              name="category"
              id="t-shirt"
            />
            <label htmlFor="t-shirt">Men&apos;s Tshirt</label>
          </div>
          <div className="d-flex align-items-center my-2">
            <input
              type="checkbox"
              className="custom-checkbox me-2"
              name="category"
              id="m-jack"
            />
            <label htmlFor="m-jack">Men&apos;s Jacket</label>
          </div>
          <div className="d-flex align-items-center my-2">
            <input
              type="checkbox"
              className="custom-checkbox me-2"
              name="category"
              id="m-hod"
            />
            <label htmlFor="m-hod">Hoodies</label>
          </div>

          <div className="d-flex align-items-center my-2">
            <input
              type="checkbox"
              className="custom-checkbox me-2"
              name="category"
              id="m-pa"
            />
            <label htmlFor="m-pa">Pants</label>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey={3}>
        <Accordion.Header>
          <span className="fw-bold fs-text">Deals</span>
        </Accordion.Header>
        <Accordion.Body>
          <div className="d-flex align-items-center my-2">
            <input
              type="checkbox"
              className="custom-checkbox me-2"
              name="deal"
              id="clr"
            />
            <label htmlFor="clr">Clearence</label>
          </div>

          <div className="d-flex align-items-center my-2">
            <input
              type="checkbox"
              className="custom-checkbox me-2"
              name="deal"
              id="wkd-spc"
            />
            <label htmlFor="wkd-spc">Weekend Special</label>
          </div>
          <div className="d-flex align-items-center my-2">
            <input
              type="checkbox"
              className="custom-checkbox me-2"
              name="deal"
              id="xmas-spc"
            />
            <label htmlFor="xmas-spc">Christmas Special</label>
          </div>
          <div className="d-flex align-items-center my-2">
            <input
              type="checkbox"
              className="custom-checkbox me-2"
              name="deal"
              id="ny-spc"
            />
            <label htmlFor="ny-spc">New Year Special</label>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey={4}>
        <Accordion.Header>
          <span className="fw-bold fs-text">Color</span>
        </Accordion.Header>
        <Accordion.Body>
          <div className="d-flex align-items-center my-2">
            <input
              type="checkbox"
              className="custom-checkbox me-2"
              name="clr"
              id="clr-bla"
            />
            <label htmlFor="clr-bla" className="d-flex align-items-center">
              Black{" "}
              <span
                className="box-circle-sm ms-2 d-inline-flex"
                style={{ backgroundColor: "rgb(0, 0, 0)" }}
              ></span>
            </label>
          </div>
          <div className="d-flex align-items-center my-2">
            <input
              type="checkbox"
              className="custom-checkbox me-2"
              name="clr"
              id="clr-pur"
            />
            <label htmlFor="clr-pur" className="d-flex align-items-center">
              Purple{" "}
              <span
                className="box-circle-sm ms-2 d-inline-flex"
                style={{ backgroundColor: "rgb(160, 32, 240)" }}
              ></span>
            </label>
          </div>
          <div className="d-flex align-items-center my-2">
            <input
              type="checkbox"
              className="custom-checkbox me-2"
              name="clr"
              id="clr-ind"
            />
            <label htmlFor="clr-ind" className="d-flex align-items-center">
              Indigo{" "}
              <span
                className="box-circle-sm ms-2 d-inline-flex"
                style={{ backgroundColor: "rgb(75, 0, 130)" }}
              ></span>
            </label>
          </div>
          <div className="d-flex align-items-center my-2">
            <input
              type="checkbox"
              className="custom-checkbox me-2"
              name="clr"
              id="clr-green"
            />
            <label htmlFor="clr-green" className="d-flex align-items-center">
              Green{" "}
              <span
                className="box-circle-sm ms-2 d-inline-flex"
                style={{ backgroundColor: "rgb(0, 128, 0)" }}
              ></span>
            </label>
          </div>
          <div className="d-flex align-items-center my-2">
            <input
              type="checkbox"
              className="custom-checkbox me-2"
              name="clr"
              id="clr-yel"
            />
            <label htmlFor="clr-yel" className="d-flex align-items-center">
              Yellow{" "}
              <span
                className="box-circle-sm ms-2 d-inline-flex"
                style={{ backgroundColor: "rgb(255, 255, 0)" }}
              ></span>
            </label>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
