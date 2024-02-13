import Button from "../../../components/ui/Button";
export default function CheckoutSummary() {
  return (
    <div className="p-4 rounded border">
      <div className="pb-4 border-bottom">
        <h5 className="fw-medium mb-3">Discount & Payment</h5>
        <ul className="fs-text">
          <li className="d-flex justify-content-between">
            <span className="text-muted">
              <i className="ri-coupon-4-line pe-2 pb-3"></i>Promo Code
            </span>
            <span className="text-muted">AEQ57PB</span>
          </li>
        </ul>
      </div>
      <div className="pt-3">
        <ul className="fs-text">
          <li className="pb-3 d-flex justify-content-between">
            <span className="text-muted">Items Total</span>
            <span>$344</span>
          </li>
          <li className="pb-3 d-flex justify-content-between">
            <span className="text-muted">Shipping Fee</span>
            <span>$50</span>
          </li>
          <li className="pb-3 d-flex justify-content-between">
            <span className="text-muted">Total</span>
            <span className="fw-bolder">$394</span>
          </li>
          <li>
            <li>
              <Button title="Place Order (4)" appendClass="w-100"></Button>
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
}
