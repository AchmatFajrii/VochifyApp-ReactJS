import Action from "../../../assets/img/action.svg";
import Adventure from "../../../assets/img/adventure.svg";
import FPS from "../../../assets/img/fps.svg";
import RPG from "../../../assets/img/rpg.svg";
import Indie from "../../../assets/img/indie.svg";
import Simulation from "../../../assets/img/simulation.svg";
import Strategy from "../../../assets/img/strategy.svg";
import Racing from "../../../assets/img/racing.svg";
import Fighting from "../../../assets/img/fighting.svg";
import Sport from "../../../assets/img/sport.svg";
import Puzzle from "../../../assets/img/puzzle.svg";
import Arcade from "../../../assets/img/arcade.svg";
import MMO from "../../../assets/img/mmo.svg";
import Educational from "../../../assets/img/educational.svg";

const CardCategoryGames = () => {
  const dataCategoryGames = [
    { amount: 5947, image: Action, category: "Aksi" },
    { amount: 5947, image: Adventure, category: "Petualangan" },
    { amount: 5947, image: FPS, category: "FPS/TPS" },
    { amount: 5947, image: RPG, category: "RPG" },
    { amount: 5947, image: Indie, category: "Indie" },
    { amount: 5947, image: Simulation, category: "Simulasi" },
    { amount: 5947, image: Strategy, category: "Strategi" },
    { amount: 5947, image: Racing, category: "Balapan" },
    { amount: 5947, image: Fighting, category: "Fighting" },
    { amount: 5947, image: Sport, category: "Olahraga" },
    { amount: 5947, image: Puzzle, category: "Puzzle" },
    { amount: 5947, image: Arcade, category: "Arcade" },
    { amount: 5947, image: MMO, category: "MMO" },
    { amount: 5947, image: Educational, category: "Pendidikan" },
  ];
  return (
    <>
      <ul className="flex flex-wrap justify-center gap-[2px] mt-4 md:mt-6">
        {dataCategoryGames.map((categoryGame, index) => {
          return (
            <>
              <li key={index} className="lg:m-1">
                <a href="">
                  <div className="card-category">
                    <div className="card-category2 flex flex-col justify-between items-center py-4 w-[105px] h-[105px] text-xs text-white font-semibold md:text-base md:w-[183px] md:h-[170px] lg:w-[170px] lg:h-[170px]">
                      <span>{categoryGame.amount}</span>
                      <img src={categoryGame.image} alt="" />
                      <span>{categoryGame.category}</span>
                    </div>
                  </div>
                </a>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default CardCategoryGames;
