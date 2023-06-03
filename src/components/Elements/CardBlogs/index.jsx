import Layers from "../../../assets/img/Layers-of-Fears-Blog-post_1400x630-300x135.webp";
import RedfallB from "../../../assets/img/Redfall-Blog-post_1400x630-300x135.webp";
import Spiderman from "../../../assets/img/Spider-Man-2-Blog-post_1400x630-300x135.jpg";
import MinecraftL from "../../../assets/img/Minecraft-Legends-Blog-post_1400x630-300x135.jpg";

const CardBlogs = () => {
  const dataCardBlogs = [
    {
      image: Layers,
      title: "Layer of Fear: The Horror series returns",
      description:
        "Layers of Fear, originally titled Layers of Fears, wraps up the horror series created by Bloober Team, as it includes the previous installments as well as entirely new stories.",
      date: "April 8, 2023",
    },
    {
      image: RedfallB,
      title: "Layer of Fear: The Horror series returns",
      description:
        "Layers of Fear, originally titled Layers of Fears, wraps up the horror series created by Bloober Team, as it includes the previous installments as well as entirely new stories.",
      date: "April 8, 2023",
    },
    {
      image: Spiderman,
      title: "Layer of Fear: The Horror series returns",
      description:
        "Layers of Fear, originally titled Layers of Fears, wraps up the horror series created by Bloober Team, as it includes the previous installments as well as entirely new stories.",
      date: "April 8, 2023",
    },
    {
      image: MinecraftL,
      title: "Layer of Fear: The Horror series returns",
      description:
        "Layers of Fear, originally titled Layers of Fears, wraps up the horror series created by Bloober Team, as it includes the previous installments as well as entirely new stories.",
      date: "April 8, 2023",
    },
  ];
  return (
    <>
      <div className="list-blog flex flex-wrap justify-between mt-6">
        {dataCardBlogs.map((cardBlog, index) => {
          return (
            <>
              <a
                key={index}
                href=""
                className="w-[48%] mt-4 p-2 rounded-lg hover:shadow-lg hover:shadow-fourth"
              >
                <div className="blog-item flex flex-col items-center w-full lg:flex-row">
                  <div className="blog-image ">
                    <img className="rounded-lg" src={cardBlog.image} alt="" />
                  </div>
                  <div className="blog-description flex flex-col justify-between px-4 mt-4 text-center text-white lg:mt-0 lg:px-0 lg:ml-4 lg:w-[26rem] lg:text-start">
                    <h5 className="text-[0.7rem] font-semibold lg:text-sm">
                      {cardBlog.title}
                    </h5>
                    <p className="mt-2 text-xs hidden md:block">
                      {cardBlog.description}
                    </p>
                    <p className="mt-2 text-[0.6rem] font-semibold md:text-xs">
                      {cardBlog.date}
                    </p>
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

export default CardBlogs;
