import OwlCarousel from "react-owl-carousel";
import "./../../assets/css/menuSlider.css";
import { Link } from "react-router-dom";

const menuList = [
  {
    pic: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ni4jj1hlo4zt7i3ioaow",
    type: "burger",
  },
  {
    pic: "https://images.dominos.co.in/farmhouse.png",
    type: "pizza",
  },
  {
    pic: "https://upload.wikimedia.org/wikipedia/commons/1/11/Idli_Sambar.JPG",
    type: "idli",
  },
  {
    pic: "https://www.sharmispassions.com/wp-content/uploads/2012/12/FusilliPasta8-500x375.jpg",
    type: "pasta",
  },
  {
    pic: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paratha-recipe.jpg",
    type: "paratha",
  },
  {
    pic: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2FPhoto%2FSeries%2F2020-07-South-Indian-Chritra-Agrawal%2FDosa%20Making%20-%20How%20to%20steps%2FShot_21_-_Finished_dosas",
    type: "dosa",
  },
];

function menuSlider() {
  const settings = {
    center: true,
    items: 5,
    margin: 10,
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    // autoplayTimeout: 8000,
    autoplaySpeed: 2000, // set the autoplay speed to 4 seconds
    smartSpeed: 100, // set the transition speed to 1 second
  };
  return (
    <>
      <div style={{ marginTop: "32px" }}>
        <OwlCarousel {...settings}>
          {menuList.map((ele: any, index: number) => (
            <Link to={`/items/${ele.type}`}>
              <img
                src={ele.pic}
                className="carouselCardImg"
                width={200}
                height={200}
              />
              {/* <div className="carouselCardContent">
                <div className="carouselCardUpper">
                  <div className="carouselCardName">Pizza</div>
                  <div className="carouselCardDescription">description</div>
                </div>
                <div className="carouselCardLower">See More</div>
              </div> */}
            </Link>
          ))}
        </OwlCarousel>
      </div>
    </>
  );
}

export default menuSlider;
