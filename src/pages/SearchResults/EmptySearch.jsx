import PageLayout from "../../components/layouts/PageLayout";
import Breadcrumb from "../../components/ui/Breadcrumb";
import RelatedSearch from "./partials/RelatedSearch";

const BREADCRUMB_ITEMS = [
  {
    title: "Search Results",
    link: "/",
  },
];

export default function EmptySearch() {
  return (
    <PageLayout>
      <Breadcrumb breadcrumbItems={[...BREADCRUMB_ITEMS]} />
      <section className="">
        <div className="container">
          <div className="row my-3 p-row no-gutters">
            <div className="col-lg-12 py-5 mb-4 bg-gray-light rounded">
              <span className="text-center pb-2 mb-3 d-block text-uppercase text-secondary fw-medium">
                Sorry {}
              </span>
              <p className="text-muted text-center fs-text">
                Currently we do not have any items matching with{" "}
                <span className="text-primary fw-bold">
                  {'"Random Search"'}
                </span>
              </p>
            </div>
          </div>
          <div className="row gap-4 my-3">
            <h3 className="fw-bold">Try Searching For</h3>
            <RelatedSearch />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
