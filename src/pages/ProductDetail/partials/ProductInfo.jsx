/* eslint-disable react/prop-types */
import { useState } from "react";
import ImageGallery from "react-image-gallery";
import { MultiSelect } from "react-multi-select-component";
import Img1 from "../../../assets/images/product-detail/p1.jpg";
import Img2 from "../../../assets/images/product-detail/p2.jpg";
import Img3 from "../../../assets/images/product-detail/p3.jpg";
import Img4 from "../../../assets/images/product-detail/p4.jpg";
import Img5 from "../../../assets/images/product-detail/p5.jpg";
import { useEffect } from "react";
import Button from "../../../components/ui/Button";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const images = [
  {
    original: Img1,
    thumbnail: Img1,
  },
  {
    original: Img2,
    thumbnail: Img2,
  },
  {
    original: Img3,
    thumbnail: Img3,
  },
  {
    original: Img4,
    thumbnail: Img4,
  },
  {
    original: Img5,
    thumbnail: Img5,
  },
];

const options = [
  { label: "8GB", value: "8GB" },
  { label: "16GB", value: "16GB" },
  { label: "32GB", value: "32GB" },
  { label: "64GB", value: "64GB" },
  { label: "128GB", value: "128GB" },
];

export default function ProductInfo({ rating = 4 }) {
  let stars = "";
  stars = [...Array(5)].map((i, idx) => (
    <i className={`ri-star-${idx < rating ? "fill" : "line"}`} key={idx}></i>
  ));
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    console.log(selected);
    if (selected.length > 1) {
      setSelected(selected.slice(1));
    }
  }, [selected]);

  const { width } = useWindowDimensions();

  return (
    <section className="">
      <div className="container">
        <div className="row mt-3">
          <div className="col-lg-7 col-md-12 mb-4">
            <ImageGallery
              items={images}
              showNav={false}
              showPlayButton={false}
              thumbnailPosition={width > 500 ? "left" : "bottom"}
            />
          </div>
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="product-info border-bottom">
              <h4 className="fw-bold mb-3">Canyon Camera 4k Lens Zoom Pro</h4>
              <div className="price d-flex align-items-baseline mb-3">
                <span style={{ fontSize: "1.25rem" }}>$125</span>
                <div className="ps-3 d-inline-flex">
                  <span style={{ fontSize: "0.9rem" }}>(30% Off)</span>
                  <span
                    style={{ fontSize: "0.9rem" }}
                    className=" text-muted text-line-through ps-2"
                  >
                    $163
                  </span>
                </div>
              </div>
              <div className="rating mb-4">
                <span className="text-primary">{stars}</span>
                <a className="text-muted text-underline ps-2">(25)</a>
              </div>
            </div>
            <div className="product-attributes pt-2">
              <div className="mb-4">
                <span className="d-block fw-bolder mb-3 fs-text">Color:</span>
                <div className="color-boxes d-flex">
                  <div
                    className="color-box-outline active me-2 p-1"
                    title="black"
                  >
                    <div
                      style={{ backgroundColor: "#000" }}
                      className="p-2"
                    ></div>
                  </div>
                  <div className="color-box-outline me-2 p-1" title="grey">
                    <div style={{ backgroundColor: "#ccc" }}></div>
                  </div>
                  <div className="color-box-outline me-2 p-1" title="lightblue">
                    <div style={{ backgroundColor: "#e2f8ff" }}></div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <span className="d-block fw-bolder mb-3 fs-text">
                  Storage Capacity:
                </span>
                <MultiSelect
                  options={options}
                  value={selected}
                  onChange={setSelected}
                  labelledBy="Select"
                  hasSelectAll={false}
                  selectionLimit={1}
                />
              </div>
              <div className="mb-4">
                <span className="d-block fw-bolder mb-3 fs-text">Lens:</span>
                <div className="text-boxes d-flex">
                  <div className="text-box-outline active me-2">18-55mm</div>
                  <div className="text-box-outline me-2">
                    w/18-55mm & 55-250mm
                  </div>
                </div>
              </div>
              <div className="mb-4 d-flex align-items-center">
                <span className="d-block fw-bolder fs-text">Quantity:</span>
                <div className="d-flex ps-3  p-qty">
                  <button>-</button>
                  <span className="px-3">2</span>
                  <button>+</button>
                </div>
              </div>
              <div className="mb-4 d-flex">
                <Button
                  type="none"
                  hoverTitle="Mail When Price Drops"
                  iconClass="ri-mail-line"
                  appendClass="d-inline-block me-2"
                />
                <Button
                  type="primary"
                  title="Add To Cart"
                  appendClass="d-inline-block me-2 flx-1"
                  iconClass="ri-shopping-cart-line"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
