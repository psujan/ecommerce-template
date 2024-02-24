import PageLayout from "../../components/layouts/PageLayout";
import Breadcrumb from "../../components/ui/Breadcrumb";
import SavedItemsList from "./partials/SavedItemsList";
 
const BREADCRUMB_ITEMS = [
  {
    title: "Saved Items",
    link: "/saved-items",
  },
];

export default function SavedItems() {
  return (
    <PageLayout>
      <Breadcrumb breadcrumbItems={[...BREADCRUMB_ITEMS]} />
      <section className="py-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-12 mb-4">
              <SavedItemsList />
            </div>
          
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
