/* eslint-disable react/no-unknown-property */
import PageLayout from "../../components/layouts/PageLayout";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <PageLayout>
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6 col-sm-12  rounded box-shadow">
              <div className="p-3">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="fw-bold ">Login</h3>
                  <span className="fs-text text-muted">
                    New User 👱🏼{" "}
                    <Link
                      to="/register"
                      className="text-underline text-secondary"
                    >
                      Cick Here
                    </Link>{" "}
                    to register
                  </span>
                </div>
                <div>
                  <form action="" className="my-4">
                    <input
                      type="text"
                      className="form-control form-control-lg fs-text shadow-none mb-4"
                      placeholder="Email"
                    />
                    <input
                      type="password"
                      className="form-control form-control-lg fs-text shadow-none mb-4"
                      placeholder="Password"
                    />
                    <Button
                      type="primary"
                      title="LOGIN"
                      appendClass="w-100 mt-2"
                    />
                  </form>
                  <div>
                    <p className="fs-text">
                      Prefer login using social accounts ? Login Using :
                    </p>
                    <div className="py-3">
                      <button className="baseBtn baseBtnGrayOutline w-100 mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                          />
                          <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                          />
                          <path d="M1 1h22v22H1z" fill="none" />
                        </svg>
                        <span className="ps-2">Google</span>
                      </button>
                      <button className="baseBtn baseBtnGrayOutline w-100 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          width="24px"
                          height="24px"
                        >
                          <linearGradient
                            id="Ld6sqrtcxMyckEl6xeDdMa"
                            x1="9.993"
                            x2="40.615"
                            y1="9.993"
                            y2="40.615"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#2aa4f4" />
                            <stop offset="1" stop-color="#007ad9" />
                          </linearGradient>
                          <path
                            fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
                            d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                          />
                          <path
                            fill="#fff"
                            d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                          />
                        </svg>
                        <span className="ps-2">Facebook</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
