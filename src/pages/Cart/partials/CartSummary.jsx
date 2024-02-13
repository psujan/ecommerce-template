import Button from "../../../components/ui/Button"
import { useNavigate } from "react-router-dom"

export default function CartSummary(){
  const navigate = useNavigate();
  const redirectToCheckout = ()=>{
    navigate("/checkout");
  }
  return (
    <div className="p-3 border rounded">
      <h4 className="fw-medium mb-4">Order Summary</h4>
      <ul className="fs-text">
        <li className="pb-3 d-flex justify-content-between">
          <span className="text-muted">Items</span>
          <span>4</span>
        </li>
        <li className="pb-3 d-flex justify-content-between">
          <span className="text-muted">Subtotal</span>
          <span>$344</span>
        </li>
        <li className="pb-3 d-flex justify-content-between">
          <span className="text-muted">Shipping Fee</span>
          <span>$50</span>
        </li>
        <li className="my-2 d-flex gap-2">
          <input type="text" className="form-control form-control-sm shadow-none" placeholder="Enter Voucher Code" />
          <Button title="Apply" type="none"></Button>
        </li>
        <li className="py-3 border-top d-flex justify-content-between">
          <span className="text-muted">Total</span>
          <span className="fw-bold">$394</span>
        </li>
        <li>
        <Button title="Checkout (4)" appendClass="w-100" onClick={()=>redirectToCheckout() }></Button>
        </li>
      </ul>
    </div>
  )
}