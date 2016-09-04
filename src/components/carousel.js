import React, { Component } from 'react';

class Carousel extends Component {


  render () {
    const carouselImages = [
      { src: "https://help.github.com/assets/images/help/profile/identicon.png" },
      { src: "https://raw.githubusercontent.com/hashdog/node-identicon-github/master/examples/images/github.png" },
      { src: "https://github.com/identicons/jasonlong.png" },
      { src: "https://github.com/identicons/jcazevedo.png" },
      { src: "https://github.com/identicons/streetlife.png" },
      { src: "https://github.com/identicons/10101010101010101ffffffffa000000.png" },
      { src: "https://github.com/identicons/japh.png" }, 
      { src: "https://raw.githubusercontent.com/1l0/identicon/master/example/identicons/default.png" }
    ];


    return (
      <div className="carousel" >
        { carouselImages.map(image => <a className="carousel-item"> <img src={image.src} alt="githubAvatar"/> </a>) }
      </div>
    );
  }
}

export default Carousel;
