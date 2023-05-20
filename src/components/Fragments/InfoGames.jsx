import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import MarioBros from "../../assets/img/mariobros.png"
import TheLastOfUs from "../../assets/img/thelastofus.png";
import Sims4 from "../../assets/img/sims4.png";
import ResidentEvil from "../../assets/img/ResidentEvil4_HomepageBanner_956x528-En.png";
import Destiny from "../../assets/img/Destiny_HomepageBanner_956x528-En.png";
import StarWars from "../../assets/img/STAR_WARS_JEDI-_SURVIVOR_PC.jpeg";
import ResidentEvil4 from "../../assets/img/resident_evil_4_remake_-_137x76.png";
import TheLastOfUs2 from "../../assets/img/THE_LAST_OF_US_PART_I.jpeg";
import Sims from "../../assets/img/sims_4_growing_together_-_137x76.png";

const InfoGames = () => {
  return (
    <section className="info-game mt-10 md:mt-14 lg:mt-28">
      <div className="container mx-auto lg:px-32">
        <div className="flex flex-col justify-between lg:flex-row">
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
          <div className="card-games-release w-[300px] hidden rounded-lg lg:block">
            <ul className="list-card-games flex flex-col justify-between h-full border-2 border-white overflow-hidden rounded-lg">
              <li className="card-games p-3 text-white transition-all duration-100 ease-linear border-[1px] border-secondary hover:bg-secondary">
                <a className="flex" href="">
                  <div className="img-card w-[60%] rounded-lg">
                    <img className="w-full rounded-lg" src={StarWars} alt="" />
                  </div>
                  <div className="card-description w-[40%] ml-2">
                    <p className="text-xs">COMING SOON</p>
                    <p className="text-sm font-bold">
                      STAR WARS JEDI : SURVIVOR PC [ORIGIN]
                    </p>
                  </div>
                </a>
              </li>
              <li className="card-games p-3 text-white transition-all duration-100 ease-linear border-[1px] border-secondary hover:bg-secondary">
                <a className="flex" href="">
                  <div className="img-card w-[60%] rounded-lg">
                    <img className="w-full rounded-lg" src={ResidentEvil4} alt="" />
                  </div>
                  <div className="card-description w-[40%] ml-2">
                    <p className="text-xs">NEW RELEASE</p>
                    <p className="text-sm font-bold">
                      STAR WARS JEDI : SURVIVOR PC [ORIGIN]
                    </p>
                  </div>
                </a>
              </li>
              <li className="card-games p-3 text-white transition-all duration-100 ease-linear border-[1px] border-secondary hover:bg-secondary">
                <a className="flex" href="">
                  <div className="img-card w-[60%] rounded-lg">
                    <img className="w-full rounded-lg" src={TheLastOfUs2} alt="" />
                  </div>
                  <div className="card-description w-[40%] ml-2">
                    <p className="text-xs">NEW RELEASE</p>
                    <p className="text-sm font-bold">THE LAST OF US PART 1 PC</p>
                  </div>
                </a>
              </li>
              <li className="card-games p-3 text-white transition-all duration-100 ease-linear border-[1px] border-secondary hover:bg-secondary">
                <a className="flex" href="">
                  <div className="img-card w-[60%] rounded-lg">
                    <img className="w-full rounded-lg" src={Sims} alt="" />
                  </div>
                  <div className="card-description w-[40%] ml-2">
                    <p className="text-xs">NEW RELEASE</p>
                    <p className="text-sm font-bold">
                      THE SIMS 4 GROWING TOGETHER PC DLC
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-comingsoon-release flex text-primary text-sm font-bold md:text-lg lg:hidden">
            <button className="block flex-1 p-2 md:rounded-bl-lg bg-fourth">
              COMING SOON
            </button>
            <button className="block flex-1 p-2 md:rounded-br-lg bg-fifth">
              RELEASE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoGames;
