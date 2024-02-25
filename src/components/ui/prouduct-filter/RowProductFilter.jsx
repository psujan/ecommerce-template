import SortFilter from "../../ui/select-filter/SortFilter";
import CategoryFilter from "../../ui/select-filter/CategoryFilter";
import DealFilter from "../../ui/select-filter/DealFilter";
import PriceFilter from "../../ui/select-filter/PriceFilter";
import ColorFilter from "../../ui/select-filter/ColorFilter";
import Button from "../../ui/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

export default function RowProductFilter() {
  const openFilterModal = () => {
    handleShow();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="col-md-12">
      <div className="d-none d-lg-flex align-items-center gap-4">
        <SortFilter />
        <PriceFilter />
        <CategoryFilter />
        <DealFilter />
        <ColorFilter />
        <div className="ml-auto bg-gray rounded py-2 px-2">
          <span className=" fw-medium rounded-circle fs-tiny">289 results</span>
        </div>
      </div>
      <div className="d-md-block d-lg-none">
        <Button
          title="Filters"
          iconClass="ri-filter-line"
          type="none"
          appendClass="baseBtnPrimaryOutline rounded"
          onClick={() => openFilterModal()}
        />
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        contentClassName="modal-animate-bottom modal-filter"
        fullscreen={true}
        scrollable={false}
      >
        <Modal.Header closeButton>
          <h3 className="fw-bold">Filters</h3>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button type="none" title="Close" onClick={handleClose}></Button>
          <Button
            type="primary"
            title="Apply Filter"
            onClick={handleClose}
          ></Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
