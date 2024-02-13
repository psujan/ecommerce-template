import { CartItems as CartRows } from "../../../data/product";
export default function OrderSummary() {
  return (
    <div>
      <h4 className="fw-medium mb-4">Cart Items</h4>
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
                  <div className="d-flex p-qty">
                    <span className="px-3">Qty : {row.qty}</span>
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
