import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

type Props = {};

const Root = (props: Props) => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
