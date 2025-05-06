import { Global } from "@emotion/react";
import { useSelector, useDispatch } from 'react-redux'
import { selectIsCartExist } from "../redux/cart/cartSelectors";
import { useEffect } from "react";
import { createCart, getCart } from "../redux/cart/cartThunks";

import Theme from "../context/Theme";

import PageLayout from "./layouts/PageLayout/PageLayout";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

import Navigation from "../pages/Navigation";

import globalStyles from "../shared/styles/global";

function App() {
  const isCartExist = useSelector(selectIsCartExist);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isCartExist) {
      dispatch(createCart())
    }
    else {
      dispatch(getCart())
    }
  }, [])

  return (
    <Theme>
      <Global styles={globalStyles} />
      <PageLayout>
        <Navbar />
        <Navigation />
        <Footer />
      </PageLayout>
    </Theme>
  );
}

export default App;
