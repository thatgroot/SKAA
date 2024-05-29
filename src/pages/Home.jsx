import React from 'react'
import {AboutUs, Footer, Header, Navbar, Partners, Presale, Roadmap, Snakenomics} from "components/index";

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <Presale />
        <Snakenomics />
        <Roadmap />
        <Partners />
        <Footer />
    </div>
  )
}

export default Home
