import Line from "../../../components/ui/Line";

export default function DeliveryAddress() {
  return (
    <div className="border rounded p-3 mb-4">
      <div className="fs-text mb-3">
        <span className="fs-text text-muted">Deliver To : </span>
        <span className="fw-medium">Theodre Campbell</span>
      </div>
      <div className="d-flex align-items-center mb-3">
        <div className="py-1 px-2 bg-gray-light fs-tiny rounded text-primary">
          <i className="ri-map-line pe-1"></i>HOME
        </div>
        <Line controlClass="mx-3" />
        <div className="fs-text">
          <span>98 Shirley Street PIMPAMA QLD 4209 AUSTRALIA</span>
        </div>
        <Line controlClass="mx-3 d-inline-block" />
        <div className="fs-text">
          <span className="ms-2 text-secondary cur-p text-underline">
            Change Delivery Address
          </span>
        </div>
      </div>
      <div className="fs-text mb-3">
        <span className="text-muted pe-3">Bill To Same Address <span className="text-tiny text-secondary"><i className="ri-checkbox-circle-fill"></i></span> </span>
        <span className="ms-2 text-secondary cur-p text-underline">Change</span>
      </div>
      <div className="fs-text mb-3">
        <span className="text-muted pe-3">Email To : theodre_campbell99@gmail.com </span>
        <span className="ms-2 text-secondary cur-p text-underline">Change</span>
      </div>
    </div>
  );
}
