import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import MarioBros from "../../../assets/img/mariobros.png"
import TheLastOfUs from "../../../assets/img/thelastofus.png";
import Sims4 from "../../../assets/img/sims4.png";
import ResidentEvil from "../../../assets/img/ResidentEvil4_HomepageBanner_956x528-En.png";
import Destiny from "../../../assets/img/Destiny_HomepageBanner_956x528-En.png";

const SplideCarousel = () => {
    return(
        <div
            id="image-carousel"
            className="splide lg:px-4"
            aria-label="Beautiful Images"
          >
            <div className="splide__track md:rounded-t-lg lg:max-w-[59rem] lg:rounded-lg">
              <Splide
                hasTrack={false}
                aria-label="My Favorite Images"
                options={{
                  type: "loop",
                  autoplay: true,
                  // pauseOnHover: false,
                  // resetProgress: false,
                  // height: "15rem",
                }}
              >
                <SplideTrack>
                  <SplideSlide>
                    <img src={MarioBros} alt="Image 1" />
                  </SplideSlide>
                  <SplideSlide>
                    <img src={Sims4} alt="Image 2" />
                  </SplideSlide>
                  <SplideSlide>
                    <img src={TheLastOfUs} alt="Image 2" />
                  </SplideSlide>
                  <SplideSlide>
                    <img src={ResidentEvil} alt="Image 2" />
                  </SplideSlide>
                  <SplideSlide>
                    <img src={Destiny} alt="Image 2" />
                  </SplideSlide>
                </SplideTrack>
              </Splide>
            </div>
          </div>
    )
}

export default SplideCarousel;