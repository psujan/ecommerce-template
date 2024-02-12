import { Link } from "react-router-dom";
import { CartItems as CartRows } from "../../../data/product";

export default function CartItems() {
  return (
    <div className="fs-text">
      <div className="d-flex justify-content-between py-3 px-2 mb-3 bg-gray">
        <Link to="/" className="hover-color-primary">
          <i className="ri-arrow-left-line pe-1"></i>Continue Shopping
        </Link>
        <div>
          <a href="#" className="hover-color-primary">
            <i className="ri-refresh-line pe-1"></i>Update Cart
          </a>
          <a href="#" className="ps-3 hover-color-primary">
            <i className="ri-delete-bin-3-line pe-1"></i>Clear Cart
          </a>
        </div>
      </div>
      <table className="t-bordered table-custom">
        {/* <thead>
          <tr className="fw-medium">
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Qty</th>
            <th scope="col">Action</th>
          </tr>
        </thead> */}
        <tbody>
          {CartRows.map((row, i) => {
            return (
              <tr key={i} className="fs-text">
                <td>
                  <div className="d-flex">
                    <div className="cart-img">
                      <img src={row.image} alt="" />
                    </div>
                    <div className="ps-3 text-start fs-tiny">
                      <h4 className="fs-text fw-medium mb-3">{row.title}</h4>
                      <div>
                        <span className="d-block text-muted pb-2">
                          {row.category}
                        </span>
                        <span className="d-block text-muted pb-2">
                          Color:{row.color}
                        </span>
                        {row.size && (
                          <span className="d-block text-muted pb-2">
                            Size:{row.size}
                          </span>
                        )}
                        {row.brand && (
                          <span className="d-block text-muted pb-2">
                            Brand:{row.brand}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </td>
                <td>${row.discountPrice}</td>
                <td>
                  <div className="d-flex p-qty">
                    <button>-</button>
                    <span className="px-3">{row.qty}</span>
                    <button>+</button>
                  </div>
                </td>
                <td>
                  <a href="#">
                    <i className="ri-delete-bin-line"></i>
                  </a>
                </td>
              </tr>
            );
          })}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}
