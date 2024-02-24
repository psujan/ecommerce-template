import { Link } from "react-router-dom";
import { CartItems as CartRows } from "../../../data/product";

export default function SavedItemsList() {
  return (
    <div className="fs-text">
      <div className="d-flex justify-content-between py-3 px-2 mb-3 bg-gray">
        <Link to="/" className="hover-color-primary">
          <i className="ri-arrow-left-line pe-1"></i>Continue Shopping
        </Link>
        <div>
          <a href="#" className="baseBtn p-2 baseBtnPrimary">
            <i className="ri-shopping-cart-2-line pe-1"></i>Add All To Cart
          </a>
        </div>
      </div>
      <table className="table-responsive t-bordered table-custom">
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
                <td className="text-start ">
                  <span className="d-inline-block pb-1">
                    ${row.discountPrice}
                  </span>
                  {row.price && (
                    <span className="d-inline-block  px-2 ms-1 fs-tiny py-1 bg-gray rounded  text-muted">
                      <span className="text-line-through">${row.price}</span>
                      <span className="ps-1">
                        {(
                          ((row.price - row.discountPrice) / row.price) *
                          100
                        ).toFixed(2)}
                        %
                      </span>
                    </span>
                  )}
                </td>
                <td>
                  <a
                    href="#"
                    title="Add To Cart"
                    className="btn-saved bg-gray-light d-inline-flex me-2 mb-2"
                  >
                    <i className="ri-shopping-cart-line"></i>
                  </a>
                  <Link
                    to="/product-detail"
                    title="View Detail"
                    className="btn-saved bg-gray-light d-inline-flex me-2 mb-2"
                  >
                    <i className="ri-eye-line"></i>
                  </Link>
                  <a
                    href="#"
                    title="Remove From List"
                    className="btn-saved bg-gray-light d-inline-flex me-2 mb-2"
                  >
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
