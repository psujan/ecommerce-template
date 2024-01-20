import C1img from "../../../assets/images/collections/c1.png";
import C2img from "../../../assets/images/collections/c2.png";
import C3img from "../../../assets/images/collections/c3.png";
import C4img from "../../../assets/images/collections/g1.jpeg";
import C5img from "../../../assets/images/collections/g2.jpeg";
import C6img from "../../../assets/images/collections/g3.jpg";
import C7img from "../../../assets/images/collections/l1.jpg";
import C8img from "../../../assets/images/collections/l2.jpg";
import C9img from "../../../assets/images/collections/l3.jpeg";
import C10img from "../../../assets/images/collections/w1.jpeg";
import C11img from "../../../assets/images/collections/w2.jpeg";
import C12img from "../../../assets/images/collections/w3.jpeg";

import CollectionCard from "../../../components/ui/homepage/CollectionCard";

const CollectionsArr = [
  {
    title: "Men's Fashion",
    pCount: 389,
    images: [C1img, C2img, C3img],
  },
  {
    title: "Shop gift for your dear ones",
    pCount: 567,
    images: [C4img, C5img, C6img],
  },
  {
    title: "Gym & Fitness",
    pCount: 481,
    images: [C7img, C8img, C9img],
  },
  {
    title: "Winter Specials",
    pCount: 397,
    images: [C10img, C11img, C12img],
  },
];
export default function Collections() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading mb-4">
          <h2 className="fw-bold ">Collections</h2>
        </div>
        <div className="row">
          {CollectionsArr.map((row, i) => (
            <CollectionCard key={i} {...row}></CollectionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
