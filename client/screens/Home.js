import React from 'react';
import Header from '../components/Header';
import Callout from '../components/Callout';

const Home = () => {
  return (
    //this was .home
    <div className="parentFlexer">
      <Header
        mainText="Donec rutrum congue leo eget malesuada."
        smallText="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta."
        linkText="Contact Us"
        linkPath="mailto:davidgcastro93@gmail.com"
      />
      <Callout
        mainText="Donec rutrum congue leo eget malesuada. Donec rutrum congue leoeget."
        smallText="Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit,
              eget tincidunt nibh pulvinar a. Nulla porttitor accumsan
              tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh
              pulvinar a."
        buttonText="Try For Free"
      />
    </div>
  );
};
export default Home;
