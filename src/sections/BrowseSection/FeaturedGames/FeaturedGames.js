import "./FeaturedGames.css";
import { SectionWrapper, SectionHeader } from "../../../components/index";
import { FaStar, FaDownload } from "react-icons/fa";
import FeaturedGamesData from "../../../Data/FeaturedGamesData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopDownload from "../TopDownload/TopDownload";

function FeaturedGames() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 537,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="featured__flex">
      <div className="featured__width_1">
        <SectionWrapper>
          <SectionHeader>
            Featured <span className="color-primary">Games</span>
          </SectionHeader>
          <div className="featured__wrapper">
            <Slider {...settings}>
              {FeaturedGamesData.map((item) => (
                <div className="featured__item" key={item.id}>
                  <img
                    className="featured__img"
                    src={item.src}
                    alt={item.src}
                  />
                  <div className="featured__content">
                    <div className="featured__title">
                      <h4>{item.title}</h4>
                      <span>{item.downloads} Downloads</span>
                    </div>
                    <ul>
                      <li>
                        <span style={{ color: "yellow", marginRight: "3px" }}>
                          <FaStar />
                        </span>
                        <span>4.8</span>{" "}
                      </li>
                      <li>
                        <span
                          style={{
                            color: "var(--color-primary)",
                            marginRight: "3px",
                          }}
                        >
                          <FaDownload />
                        </span>{" "}
                        <span>{item.downloadsIcone}</span>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </SectionWrapper>
      </div>

      <div className="featured__width_2">
        <SectionWrapper>
          <SectionHeader>
            Top <br />
            <span className="color-primary">Downloaded</span>{" "}
          </SectionHeader>
          <TopDownload />
        </SectionWrapper>
      </div>
    </div>
  );
}

export default FeaturedGames;
