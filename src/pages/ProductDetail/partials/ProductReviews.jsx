import Stars from "../../../components/ui/Stars";

export default function ProductReviews() {
  return (
    <section className="py-2">
      <div className="container">
        <div className="pb-3 mb-3 border-bottom">
          <div className="pb-3">
            <h3 className="fw-bold">Rating & Reviews</h3>
          </div>
          <div className="row">
            <div className="col-sm-12 mb-4 bg-gray-light rounded">
              <div className="flx-center flex-column py-5 text-center">
                <h4 className="fw-bold mb-3">25 reviews - (4.0 Overall)</h4>
                <div className="mb-3">
                  <Stars rating={4} />
                </div>
                <div>
                  <a className="fs-text text-underline">
                    Want to share your review ?
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-12 py-3 mb-4">
              <div className="">
                <div className="mb-3 d-flex align-items-baseline">
                  <h5 className="fw-bolder pe-3">John Doe</h5>
                  <span className="fs-tiny text-muted">1d ago</span>
                </div>
                <div className="pb-2">
                  <Stars rating={5}></Stars>
                </div>
                <p className="lh-p fs-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam fugit neque placeat. Vitae iusto consequuntur sed
                  temporibus illum earum officia cumque laboriosam, minima
                  tempora libero ut? Optio consequatur voluptates illo.
                </p>
              </div>
            </div>
            <div className="col-sm-12 py-3 mb-4">
              <div className="">
                <div className="mb-3 d-flex align-items-baseline">
                  <h5 className="fw-bolder pe-3">Baivav Kumar</h5>
                  <span className="fs-tiny text-muted">1d ago</span>
                </div>
                <div className="pb-2">
                  <Stars rating={5}></Stars>
                </div>
                <p className="lh-p fs-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam fugit neque placeat. Vitae iusto consequuntur sed
                  temporibus illum earum officia cumque laboriosam, minima
                  tempora libero ut? Optio consequatur voluptates illo.
                </p>
              </div>
            </div>
            <div className="col-sm-12 py-3 mb-4">
              <div className="">
                <div className="mb-3 d-flex align-items-baseline">
                  <h5 className="fw-bolder pe-3">Alex Johnson</h5>
                  <span className="fs-tiny text-muted">1d ago</span>
                </div>
                <div className="pb-2">
                  <Stars rating={4}></Stars>
                </div>
                <p className="lh-p fs-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className="col-sm-12 py-3 mb-4">
              <div className="">
                <div className="mb-3 d-flex align-items-baseline">
                  <h5 className="fw-bolder pe-3">Paul Theroux</h5>
                  <span className="fs-tiny text-muted">1d ago</span>
                </div>
                <div className="pb-2">
                  <Stars rating={4}></Stars>
                </div>
                <p className="lh-p fs-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
