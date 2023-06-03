import Minecraft from "../../../assets/img/minecraft.jpeg";
import Redfall from "../../../assets/img/csaca_1.jpg";
import StrongHold from "../../../assets/img/strong.jpg";
import Eidolon from "../../../assets/img/eidolon.jpg";
import Serinfate from "../../../assets/img/serinfate.jpeg";
import Surviving from "../../../assets/img/surviving.jpeg";
import Magicka from "../../../assets/img/magicka.jpg";
import Halfpast from "../../../assets/img/halfpast.jpeg";
import Papoyo from "../../../assets/img/papo.jpeg";
import Endless from "../../../assets/img/endless.jpeg";

const CardTopGames = () => {
  const dataTopGames = [
    {
      image: Minecraft,
      title: "Minecraft",
      voucher: "200 Diamonds (160 + 40 Bonus)",
      price: 140.0,
    },
    {
      image: Redfall,
      title: "Redfall",
      voucher: "200 Diamonds (160 + 40 Bonus)",
      price: 140.0,
    },
    {
      image: StrongHold,
      title: "StrongHold",
      voucher: "200 Diamonds (160 + 40 Bonus)",
      price: 140.0,
    },
    {
      image: Eidolon,
      title: "Eidolon",
      voucher: "200 Diamonds (160 + 40 Bonus)",
      price: 140.0,
    },
    {
      image: Serinfate,
      title: "Serinfate",
      voucher: "200 Diamonds (160 + 40 Bonus)",
      price: 140.0,
    },
    {
      image: Surviving,
      title: "Surviving",
      voucher: "200 Diamonds (160 + 40 Bonus)",
      price: 140.0,
    },
    {
      image: Magicka,
      title: "Magicka",
      voucher: "200 Diamonds (160 + 40 Bonus)",
      price: 140.0,
    },
    {
      image: Halfpast,
      title: "Halfpast",
      voucher: "200 Diamonds (160 + 40 Bonus)",
      price: 140.0,
    },
    {
      image: Papoyo,
      title: "Papoyo",
      voucher: "200 Diamonds (160 + 40 Bonus)",
      price: 140.0,
    },
    {
      image: Endless,
      title: "Endless",
      voucher: "200 Diamonds (160 + 40 Bonus)",
      price: 140.0,
    },
  ];

  return (
    <>
    <div className="card-best-seller flex justify-center flex-wrap mt-3 md:mt-6">
      {dataTopGames.map((topGame, index) => {
        return (
          <>
            
              <a key={index} className="m-[2.5px] lg:m-1" href="#">
                <div className="card w-[9.6rem] h-[13rem] p-3 bg-white relative overflow-visible rounded-lg md:w-[15.2rem] md:h-[18.4rem] lg:w-[15rem] lg:h-[19.4rem]">
                  <div className="card-img w-[100%] h-[50%] overflow-hidden md:w-[100%] md:h-[50%]">
                    <img src={topGame.image} alt="" />
                  </div>
                  <div className="card-info text-[0.6rem] md:text-[1rem]">
                    <p className="text-title">{topGame.title}</p>
                    <p className="text-body">{topGame.voucher}</p>
                  </div>
                  <div className="card-footer flex justify-between items-center pt-2">
                    <span className="text-title text-[0.7rem] md:text-[1.1rem]">
                      {topGame.price}
                    </span>
                    <div className="card-button">
                      <svg className="svg-icon" viewBox="0 0 20 20">
                        <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                        <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                        <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
  
          </>
        );
      })}
    </div>
    </>
  );
};

export default CardTopGames;
