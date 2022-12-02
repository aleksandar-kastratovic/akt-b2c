import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useWindowSize } from '../../helpers/functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { convertHttpToHttps } from '../../helpers/convertHttpToHttps';

function Arrow(props) {
  let className = props.type === 'next' ? 'nextArrow' : 'prevArrow';
  className += ' arrow';
  const char =
    props.type === 'next' ? (
      <FontAwesomeIcon className="slick-next-arrow" icon={faChevronDown} />
    ) : (
      <FontAwesomeIcon className="slick-prev-arrow" icon={faChevronUp} />
    );
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}
function Arrow2(props) {
  let className = props.type === 'next' ? 'nextArrow' : 'prevArrow';
  className += ' arrow';
  const char =
    props.type === 'next' ? (
      <FontAwesomeIcon className="slick-next-arrow" icon={faChevronRight} />
    ) : (
      <FontAwesomeIcon className="slick-prev-arrow" icon={faChevronLeft} />
    );
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}

const ProductDetailsSlider = ({ images = [], ...props }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [numberOfImages, setNumberOfImages] = useState(5);
  const size = useWindowSize();

  const slides = images.map((image, index) => {
    return (
      <div className="slick-small-img-div" key={index}>
        <img
          className="slick-small-img"
          alt=""
          src={convertHttpToHttps(image.image)}
        />
      </div>
    );
  });

  return (
    <>
      <div className="container col-12 product-details-slider-container">
        <div className="row flex-start">
          <div className="col-md-2 slick-flex-down">
            <div className="col-12">
              <Slider
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}
                focusOnSelect={true}
                centerPadding="20px"
                vertical={size.width > 767.98 ? true : false}
                infinite={true}
                verticalSwiping={size.width > 767.98 ? true : false}
                dots={false}
                arrows={size.width > 767.98 ? true : false}
                nextArrow={<Arrow type="next" />}
                prevArrow={<Arrow type="prev" />}
                slidesToShow={images.length > 6 ? 6 : images.length}
                className={'vertical-slider'}
              >
                {slides}
              </Slider>
            </div>
          </div>

          <div className="col-md-10">
            <Slider
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
              focusOnSelect={false}
              infinite={true}
              draggable={true}
              vertical={false}
              arrows={size.width > 767.98 ? true : false}
              nextArrow={<Arrow2 type="next" />}
              prevArrow={<Arrow2 type="prev" />}
              dots={false}
              className={'big-slick-slider'}
            >
              {slides}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsSlider;
