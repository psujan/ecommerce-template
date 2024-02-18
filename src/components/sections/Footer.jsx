import { Pages } from "../../data/pages";
import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
export default function Footer() {
  return (
    <footer>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4 mb-1">
              <Logo></Logo>
              <div className="pt-4">
                <p className="lh-p fs-text w-75">
                  Your convinient ecommerce store designed to ease your shopping
                  experience
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mb-1">
              <h4 className="fw-bold lh-p mb-3 text-uppercase">Company</h4>
              <ul className="fs-text footer-list">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Blogs</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Help & Contact</a>
                </li>
                <li>
                  <a href="">Terms & Conditions</a>
                </li>
                <li>
                  <a href="">Return Policy</a>
                </li>
                <li>
                  <a href="">Delivery</a>
                </li>
                <li>
                  <a href="">Payments</a>
                </li>
                <li>
                  <a href="">Data & Security</a>
                </li>
                <li>
                  <a href="">Rewards & Offers</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mb-1">
              <h4 className="fw-bold lh-p mb-3 text-uppercase">My Account</h4>
              <ul className="fs-text footer-list">
                <li>
                  <a href="">Login</a>
                </li>
                <li>
                  <a href="">Signup</a>
                </li>
                <li>
                  <a href="">Cart</a>
                </li>
                <li>
                  <a href="">Track Order</a>
                </li>
                <li>
                  <a href="">Become a seller</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-2 mb-1">
              <div className="mb-4">
                <h4 className="fw-bold lh-p mb-3 text-uppercase">
                  Social Media
                </h4>
                <ul className="fs-text d-inline-flex social-media-list">
                  <li>
                    <a href="" title="Facebook">
                      <i className="ri-facebook-circle-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" title="Youtube">
                      <i className="ri-youtube-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" title="Instagram">
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" title="TikTok">
                      <i className="ri-tiktok-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="fw-bold lh-p mb-3 text-uppercase">Our App</h4>
                <ul className="footer-list">
                  <li>
                    <a href="" title="Google PlayStore">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                        alt=""
                        className="img-fluid"
                        style={{
                          height: "40px",
                          width: "136px",
                          borderRadius: "4px",
                        }}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="" title="App Store (Apple)">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Download_on_the_App_Store_RGB_blk.svg/220px-Download_on_the_App_Store_RGB_blk.svg.png"
                        alt=""
                        className="img-fluid"
                        style={{
                          height: "40px",
                          width: "136px",
                          borderRadius: "4px",
                        }}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mb-3 text-uppercase">All Pages ({Pages.length})</div>
            <div className="col-lg-9">
              <ul className="footer-list">
                {Pages.map((page, i) => (
                  <li className="fs-tiny d-inline-block pe-3 mb-2 " key={i}>
                    <Link to={page.path}>{page.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
