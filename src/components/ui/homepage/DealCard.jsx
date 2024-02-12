import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */

export default function DealCard({ title, desc, image }) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="deal-card">
        <Link to="/shop-by-deal">
          <div className="deal-card-img">
            <img src={image} alt="" />
          </div>
          <div className="deal-card-body">
            <h4 className="fw-bold mb-2">{title}</h4>
            <p className="text-muted fs-text lh-p">{desc}</p>
            <div className="pt-3 pb-2">
              <button className="w-100 baseBtn">
                Shop Now <i className="ri-arrow-right-line ps-2"></i>
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
