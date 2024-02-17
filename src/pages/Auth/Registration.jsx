/* eslint-disable react/no-unknown-property */
import PageLayout from "../../components/layouts/PageLayout";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <PageLayout>
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-12 col-sm-12  rounded box-shadow">
              <div className="p-3">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="fw-bold ">Register</h3>
                </div>
                <div>
                  <form action="" className="my-4">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <input
                          type="text"
                          className="form-control form-control-lg fs-text shadow-none mb-4"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <input
                          type="text"
                          className="form-control form-control-lg fs-text shadow-none mb-4"
                          placeholder="Email Or Phone Number"
                        />
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <input
                          type="password"
                          className="form-control form-control-lg fs-text shadow-none mb-4"
                          placeholder="Password"
                        />
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <input
                          type="password"
                          className="form-control form-control-lg fs-text shadow-none mb-4"
                          placeholder="Confirm Password"
                        />
                      </div>
                      <div className="col-lg-12">
                        <Button
                          type="primary"
                          title="REGISTER"
                          appendClass="w-100 mt-2"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div>
                  <span className="fs-text text-muted">
                    Already have an account ?{" "}
                    <Link to="/login" className="text-underline text-secondary">
                      Click Here
                    </Link>{" "}
                    to login
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
