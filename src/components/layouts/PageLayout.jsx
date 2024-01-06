import Header from "../sections/Header/Header";

// eslint-disable-next-line react/prop-types
export default function PageLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
