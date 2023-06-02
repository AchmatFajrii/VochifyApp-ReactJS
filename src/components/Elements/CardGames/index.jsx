import StarWars from "../../../assets/img/STAR_WARS_JEDI-_SURVIVOR_PC.jpeg";
import ResidentEvil4 from "../../../assets/img/resident_evil_4_remake_-_137x76.png";
import TheLastOfUs2 from "../../../assets/img/THE_LAST_OF_US_PART_I.jpeg";
import Sims from "../../../assets/img/sims_4_growing_together_-_137x76.png";
import Button from "./Button";

const CardGames = () => {
  const cardGames = [
    {
      image: StarWars,
      info: "COMING SOON",
      desc: "STAR WARS JEDI : SURVIVOR PC [ORIGIN]",
    },
    {
      image: ResidentEvil4,
      info: "NEW RELEASE",
      desc: "STAR WARS JEDI : SURVIVOR PC [ORIGIN]",
    },
    {
      image: TheLastOfUs2,
      info: "NEW RELEASE",
      desc: "STAR WARS JEDI : SURVIVOR PC [ORIGIN]",
    },
    {
      image: Sims,
      info: "NEW RELEASE",
      desc: "STAR WARS JEDI : SURVIVOR PC [ORIGIN]",
    },
  ];

  return (
    <>
      <div className="card-games-release w-[300px] hidden rounded-lg lg:block">
        <ul className="list-card-games flex flex-col justify-between h-full border-2 border-white overflow-hidden rounded-lg">
          {cardGames.map((game, index) => {
            return (
              <>
                <li
                  key={index}
                  className="card-games p-3 text-white transition-all duration-100 ease-linear border-[1px] border-secondary hover:bg-secondary"
                >
                  <a className="flex" href="">
                    <div className="img-card w-[60%] rounded-lg">
                      <img
                        className="w-full rounded-lg"
                        src={game.image}
                        alt=""
                      />
                    </div>
                    <div className="card-description w-[40%] ml-2">
                      <p className="text-xs">{game.info}</p>
                      <p className="text-sm font-bold">{game.desc}</p>
                    </div>
                  </a>
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <div className="btn-comingsoon-release flex text-primary text-sm font-bold md:text-lg lg:hidden">
        <Button bgColor="bg-fourth">COMING SOON</Button>
        <Button bgColor="bg-fifth">NEW RELEASE</Button>
      </div>
    </>
  );
};

export default CardGames;
