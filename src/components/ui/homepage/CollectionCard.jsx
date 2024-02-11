import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function CollectionCard({ title, pCount, images }) {
  return (
    <div className="col-lg-6 col-sm-12 col-md-12">
      <div className="collection-card">
        <Link to="/shop-by-collection">
          <div className="collection-card-heading text-center mb-3">
            <h4 className="fw-bold">{title}</h4>
            <p className="fs-text text-muted lh-p py-1">{pCount} products</p>
          </div>
          <div className="collection-images">
            <div className="collection-img">
              <img src={images[0]} alt="" />
            </div>
            <div className="collection-img">
              <img src={images[1]} alt="" />
            </div>
            <div className="collection-img">
              <img src={images[2]} alt="" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
