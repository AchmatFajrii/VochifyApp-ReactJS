import Action from "../../assets/img/action.svg";
import Adventure from "../../assets/img/adventure.svg";
import FPS from "../../assets/img/fps.svg";
import RPG from "../../assets/img/rpg.svg";
import Indie from "../../assets/img/indie.svg";
import Simulation from "../../assets/img/simulation.svg";
import Strategy from "../../assets/img/strategy.svg";
import Racing from "../../assets/img/racing.svg";
import Fighting from "../../assets/img/fighting.svg";
import Sport from "../../assets/img/sport.svg";
import Puzzle from "../../assets/img/puzzle.svg";
import Arcade from "../../assets/img/arcade.svg";
import MMO from "../../assets/img/mmo.svg";
import Educational from "../../assets/img/educational.svg";

const CategoryGames = () => {
  return (
    <section className="category mt-10 md:mt-14 lg:mt-24">
      <div className="container mx-auto px-5 md:px-0 lg:px-32">
        <div className="title flex items-center">
          <p className="p-2 w-[20rem] text-lg text-white font-bold border-2 border-white shadow-xl shadow-secondary md:w-[37rem] md:text-3xl lg:w-[40rem] lg:text-3xl">
            KATEGORI GAME
          </p>
          <div className="line h-[1px] w-full border-[1px] border-white"></div>
        </div>
        <ul className="flex flex-wrap justify-center gap-[2px] mt-4 md:mt-6">
          <li className="lg:m-1">
            <a href="">
              <div className="card-category">
                <div className="card-category2 flex flex-col justify-between items-center py-4 w-[105px] h-[105px] text-xs text-white font-semibold md:text-base md:w-[183px] md:h-[170px] lg:w-[170px] lg:h-[170px]">
                  <span>5947</span>
                  <img src={Action} alt="" />
                  <span>Aksi</span>
                </div>
              </div>
            </a>
          </li>
          <li className="lg:m-1">
            <a href="">
              <div className="card-category">
                <div className="card-category2 flex flex-col justify-between items-center py-4 w-[105px] h-[105px] text-xs text-white font-semibold md:text-base md:w-[183px] md:h-[170px] lg:w-[170px] lg:h-[170px]">
                  <span>5947</span>
                  <img src={Adventure} alt="" />
                  <span>Petualangan</span>
                </div>
              </div>
            </a>
          </li>
          <li className="lg:m-1">
            <a href="">
              <div className="card-category">
                <div className="card-category2 flex flex-col justify-between items-center py-4 w-[105px] h-[105px] text-xs text-white font-semibold md:text-base md:w-[183px] md:h-[170px] lg:w-[170px] lg:h-[170px]">
                  <span>5947</span>
                  <img src={FPS} alt="" />
                  <span>FPS/TPS</span>
                </div>
              </div>
            </a>
          </li>
          <li className="lg:m-1">
            <a href="">
              <div className="card-category">
                <div className="card-category2 flex flex-col justify-between items-center py-4 w-[105px] h-[105px] text-xs text-white font-semibold md:text-base md:w-[183px] md:h-[170px] lg:w-[170px] lg:h-[170px]">
                  <span>5947</span>
                  <img src={RPG} alt="" />
                  <span>RPG</span>
                </div>
              </div>
            </a>
          </li>
          <li className="lg:m-1">
            <a href="">
              <div className="card-category">
                <div className="card-category2 flex flex-col justify-between items-center py-4 w-[105px] h-[105px] text-xs text-white font-semibold md:text-base md:w-[183px] md:h-[170px] lg:w-[170px] lg:h-[170px]">
                  <span>5947</span>
                  <img src={Indie} alt="" />
                  <span>Indie</span>
                </div>
              </div>
            </a>
          </li>
          <li className="lg:m-1">
            <a href="">
              <div className="card-category">
                <div className="card-category2 flex flex-col justify-between items-center py-4 w-[105px] h-[105px] text-xs text-white font-semibold md:text-base md:w-[183px] md:h-[170px] lg:w-[170px] lg:h-[170px]">
                  <span>5947</span>
                  <img src={Simulation} alt="" />
                  <span>Simulasi</span>
                </div>
              </div>
            </a>
          </li>
          <li className="lg:m-1">
            <a href="">
              <div className="card-category">
                <div className="card-category2 flex flex-col justify-between items-center py-4 w-[105px] h-[105px] text-xs text-white font-semibold md:text-base md:w-[183px] md:h-[170px] lg:w-[170px] lg:h-[170px]">
                  <span>5947</span>
                  <img src={Strategy} alt="" />
                  <span>Strategi</span>
                </div>
              </div>
            </a>
          </li>
          <li className="lg:m-1">
            <a href="">
              <div className="card-category">
                <div className="card-category2 flex flex-col justify-between items-center py-4 w-[105px] h-[105px] text-xs text-white font-semibold md:text-base md:w-[183px] md:h-[170px] lg:w-[170px] lg:h-[170px]">
                  <span>5947</span>
                  <img src={Racing} alt="" />
                  <span>Balapan</span>
                </div>
              </div>
            </a>
          </li>
          <li className="lg:m-1">
            <a href="">
              <div className="card-category">
                <div className="card-category2 flex flex-col justify-between items-center py-4 w-[105px] h-[105px] text-xs text-white font-semibold md:text-base md:w-[183px] md:h-[170px] lg:w-[170px] lg:h-[170px]">
                  <span>5947</span>
                  <img src={Fighting} alt="" />
                  <span>Fighting</span>
                </div>
              </div>
            </a>
          </li>
          <li className="lg:m-1">
            <a href="">
              <div className="card-category">
                <div className="card-category2 flex flex-col justify-between items-center py-4 w-[105px] h-[105px] text-xs text-white font-semibold md:text-base md:w-[183px] md:h-[170px] lg:w-[170px] lg:h-[170px]">
                  <span>5947</span>
                  <img src={Sport} alt="" />
                  <span>Olahraga</span>
                </div>
              </div>
            </a>
          </li>
          <li className="lg:m-1">
            <a href="">
              <div className="card-category">
                <div className="card-category2 flex flex-col justify-between items-center py-4 w-[105px] h-[105px] text-xs text-white font-semibold md:text-base md:w-[183px] md:h-[170px] lg:w-[170px] lg:h-[170px]">
                  <span>5947</span>
                  <img src={Puzzle} alt="" />
                  <span>Puzzle</span>
                </div>
              </div>
            </a>
          </li>
          <li className="lg:m-1">
            <a href="">
              <div className="card-category">
                <div className="card-category2 flex flex-col justify-between items-center py-4 w-[105px] h-[105px] text-xs text-white font-semibold md:text-base md:w-[183px] md:h-[170px] lg:w-[170px] lg:h-[170px]">
                  <span>5947</span>
                  <img src={Arcade} alt="" />
                  <span>Arcade</span>
                </div>
              </div>
            </a>
          </li>
          <li className="lg:m-1">
            <a href="">
              <div className="card-category">
                <div className="card-category2 flex flex-col justify-between items-center py-4 w-[105px] h-[105px] text-xs text-white font-semibold md:text-base md:w-[183px] md:h-[170px] lg:w-[170px] lg:h-[170px]">
                  <span>5947</span>
                  <img src={MMO} alt="" />
                  <span>MMO</span>
                </div>
              </div>
            </a>
          </li>
          <li className="lg:m-1">
            <a href="">
              <div className="card-category">
                <div className="card-category2 flex flex-col justify-between items-center py-4 w-[105px] h-[105px] text-xs text-white font-semibold md:text-base md:w-[183px] md:h-[170px] lg:w-[170px] lg:h-[170px]">
                  <span>5947</span>
                  <img src={Educational} alt="" />
                  <span>Pendidikan</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CategoryGames;
