import { useState } from "react";
import Table from "react-bootstrap/Table";
export default function ProductDescription() {
  const [showMore, setShowMore] = useState(false);

  const toggleTableContent = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <section className="py-2">
        <div className="container">
          <div className="pb-3 mb-3 border-bottom">
            <div className="pb-3">
              <h3 className="fw-bold">Product Description</h3>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-12 mb-3 fs-text">
                <Table bsPrefix="table t-bordered">
                  <tbody className="t-bordered">
                    <tr className="t-bordered">
                      <td>
                        <span className="fw-bolder">Brand Name</span>
                      </td>
                      <td>Canyon</td>
                    </tr>
                    <tr className="t-bordered">
                      <td>
                        <span className="fw-bolder">Model Name</span>
                      </td>
                      <td>EOS REBEL T7 18-55mm f/3.5-5.6 IS II Kit</td>
                    </tr>
                    <tr className="t-bordered">
                      <td>
                        <span className="fw-bolder">Photo Sensor Size </span>
                      </td>
                      <td>APS-H</td>
                    </tr>
                    <tr className="t-bordered">
                      <td>
                        <span className="fw-bolder">Image Stabilization </span>
                      </td>
                      <td>True</td>
                    </tr>
                    <tr className="t-bordered">
                      <td>
                        <span className="fw-bolder">Max Shutter Speed </span>
                      </td>
                      <td>30 seconds</td>
                    </tr>
                    <tr className="t-bordered">
                      <td>
                        <span className="fw-bolder">Min Shutter Speed </span>
                      </td>
                      <td> 1/4000 seconds</td>
                    </tr>
                    <tr className={`t-bordered ${showMore ? "" : "d-none"}`}>
                      <td>
                        <span className="fw-bolder">Metering Description </span>
                      </td>
                      <td>average,center-weighted,multi-zone,partial,spot</td>
                    </tr>
                    <tr className={`t-bordered ${showMore ? "" : "d-none"}`}>
                      <td>
                        <span className="fw-bolder">
                          Exposure Control Type{" "}
                        </span>
                      </td>
                      <td>Manual</td>
                    </tr>
                    <tr className={`t-bordered ${showMore ? "" : "d-none"}`}>
                      <td>
                        <span className="fw-bolder">Form Factor </span>
                      </td>
                      <td>Dslr</td>
                    </tr>
                    <tr className={`t-bordered ${showMore ? "" : "d-none"}`}>
                      <td>
                        <span className="fw-bolder">
                          Effective Still Resolution{" "}
                        </span>
                      </td>
                      <td>24.1MP</td>
                    </tr>
                    <tr className={`t-bordered ${showMore ? "" : "d-none"}`}>
                      <td>
                        <span className="fw-bolder">Max Coverage Area </span>
                      </td>
                      <td>95%</td>
                    </tr>
                  </tbody>
                </Table>
                <a
                  href={() => false}
                  className="fs-text text-underline"
                  onClick={() => toggleTableContent()}
                >
                  See {showMore ? "Less" : "More"}
                </a>
              </div>
              <div className="col-sm-12 mb-3">
                <h4 className="py-2 fw-bolder">About This Item</h4>
                <ul className="fs-text dot-list ps-4 mb-3">
                  <li className="lh-lg">
                    24.1 Megapixel CMOS (APS-C) sensor with is 100–6400 (H:
                    12800)
                  </li>
                  <li className="lh-lg">Built-in Wi-Fi and NFC technology</li>
                  <li className="lh-lg">9-Point AF system and AI Servo AF</li>
                  <li className="lh-lg">
                    Optical Viewfinder with approx 95% viewing coverage
                  </li>
                  <li className="lh-lg">
                    Use the EOS Utility Webcam Beta Software (Mac and Windows)
                    to turn your compatible Canon camera into a high-quality
                    webcam. Compatible Lenses- Canon EF Lenses (including EF-S
                    lenses, excluding EF-M lenses)
                  </li>
                </ul>
                <div className="py-2">
                  <p className="lh-p fs-text">
                    <span className="fw-medium">Note : </span> Products with
                    electrical plugs are designed for use in the US. Outlets and
                    voltage differ internationally and this product may require
                    an adapter or converter for use in your destination. Please
                    check compatibility before purchasing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
