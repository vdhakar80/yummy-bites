import OwlCarousel from "react-owl-carousel";
import "./../../assets/css/menuSlider.css";

const menuList = [1, 2, 3, 4, 5, 6];

function menuSlider() {
  const settings = {
    items: 4,
    margin: 10,
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    // autoplayTimeout: 8000,
    autoplaySpeed: 4000, // set the autoplay speed to 4 seconds
    smartSpeed: 1000, // set the transition speed to 1 second
  };
  return (
    <>
      <div>
        <OwlCarousel {...settings}>
          {menuList.map((ele: any, index: number) => (
            <div className="carouselCard">
              <img
                src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                className="carouselCardImg"
                width={200}
                height={150}
              />
              <div className="carouselCardContent">
                <div className="carouselCardUpper">
                  <div className="carouselCardName">Pizza</div>
                  <div className="carouselCardDescription">description</div>
                </div>
                <div className="carouselCardLower">See More</div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </>
  );
}

export default menuSlider;
