import React from 'react'
import { ModalProvider } from "react-modal-hook";
import Reserve from '../components/Reserve/Reserve'
import Header from '../components/Header/Header'
import Promo from '../components/Promo/Promo'
// import Search from '../components/Search/Search'
import Comments from '../components/Comments/Comments'
import Footer from '../components/Footer/Footer'

function MainPage() {
  return (
    <ModalProvider>
      <Promo />
      <Reserve />
      <Comments />
    </ModalProvider>
  )
}

export default MainPage