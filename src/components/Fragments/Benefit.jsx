import CPPHover from "../../assets/img/cpp-hover.webp";
import DealsHover from "../../assets/img/deals-hover.webp";
import CSHover from "../../assets/img/cs-hover.webp";
import GameHover from "../../assets/img/gaming-blog-hover.webp";

const Benefit = () => {
  return (
    <section className="benefit mt-10 md:mt-14 lg:mt-24">
      <div className="container mx-auto px-5 md:px-0 lg:px-32">
        <div className="title flex items-center">
          <p className="p-2 w-[9rem] text-lg text-white font-bold border-2 border-white shadow-xl shadow-secondary md:w-[19rem] md:text-3xl lg:w-[17rem] lg:text-3xl">
            BENEFIT
          </p>
          <div className="line h-[1px] w-full border-[1px] border-white"></div>
        </div>
        <div className="list-benefit mt-5 lg:mt-10">
          <div className="flex flex-wrap justify-evenly items-center text-white text-center text-xs md:text-sm md:justify-between lg:text-base">
            <a
              className="card-benefit flex flex-col justify-center p-4 mx-4 w-32 md:w-40 lg:w-56"
              href=""
            >
              <img src={CPPHover} alt="" />
              <p>Costumer Protection</p>
            </a>
            <a
              className="card-benefit flex flex-col justify-center p-4 mx-4 w-32 md:w-40 lg:w-56"
              href=""
            >
              <img src={DealsHover} alt="" />
              <p>Deals & Promotions</p>
            </a>
            <a
              className="card-benefit flex flex-col justify-center p-4 mx-4 w-32 md:w-40 lg:w-56"
              href=""
            >
              <img src={CSHover} alt="" />
              <p>24/7 Costumer Service</p>
            </a>
            <a
              className="card-benefit flex flex-col justify-center p-4 mx-4 w-32 md:w-40 lg:w-56"
              href=""
            >
              <img src={GameHover} alt="" />
              <p>Gaming Blog</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
