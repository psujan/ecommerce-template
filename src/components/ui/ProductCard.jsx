/* eslint-disable react/prop-types */
import Button from "./Button";
import { Link } from "react-router-dom";
import SpecialTag from "./products/SpecialTag";

export default function ProductCard({
  baseClass = "col-xl col-lg-3 col-sm-6 col-md-4 mb-4",
  image,
  title,
  rating,
  ratingCount,
  discountPrice,
  price,
  link = "/product-detail",
  isSpecial = false,
  saveAmount = 0,
}) {
  console.log(saveAmount);
  let stars = "";
  stars = [...Array(5)].map((i, idx) => (
    <i className={`ri-star-${idx < rating ? "fill" : "line"}`} key={idx}></i>
  ));
  return (
    <div className={baseClass}>
      <Link to={link}>
        <div className="p-card">
          {isSpecial && <SpecialTag />}
          <div className="p-card-img">
            <img src={image} alt="" className="img-fluid" />
          </div>
          <div className="p-card-body">
            <div className="ptitle">{title}</div>
            <div className="prating">
              <span className="text-primary">{stars}</span>
              <span className="ps-2 text-muted text-underline">
                <a href={() => false} className="">
                  ({ratingCount})
                </a>
              </span>
            </div>
            <div
              className={`pprice ${isSpecial ? "justify-content-start" : ""}`}
            >
              <span className="fw-medium">${discountPrice}</span>
              {isSpecial ? (
                <SpecialTag
                  text={`SAVE $${saveAmount}`}
                  controlClass="special-tag-price"
                />
              ) : (
                <span className="text-muted text-line-through">${price}</span>
              )}
            </div>
            <div className="p-cart pt-4">
              <Button
                title="Add To Cart"
                appendClass="w-100 baseBtnGrayOutline atcBtn"
                type={null}
                iconClass="ri-shopping-cart-line"
              ></Button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
