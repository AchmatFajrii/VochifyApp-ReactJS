import Layers from "../../assets/img/Layers-of-Fears-Blog-post_1400x630-300x135.webp";
import RedfallB from "../../assets/img/Redfall-Blog-post_1400x630-300x135.webp";
import Spiderman from "../../assets/img/Spider-Man-2-Blog-post_1400x630-300x135.jpg";
import MinecraftL from "../../assets/img/Minecraft-Legends-Blog-post_1400x630-300x135.jpg";

const BlogGames = () => {
    return(
        <section className="blog mt-10 md:mt-14 lg:mt-24">
            <div className="container mx-auto px-5 md:px-0 lg:px-32">
              <div className="title flex items-center">
                <p className="p-2 w-[25rem] text-lg text-white font-bold border-2 border-white shadow-xl shadow-secondary md:w-[40rem] md:text-3xl lg:w-[42rem] lg:text-3xl">
                  BLOG VOUCHIFY
                </p>
                <div className="line h-[1px] w-full border-[1px] border-white"></div>
              </div>
              <div className="list-blog flex flex-wrap justify-between mt-6">
                <a
                  href=""
                  className="w-[48%] mt-4 p-2 rounded-lg hover:shadow-lg hover:shadow-fourth"
                >
                  <div className="blog-item flex flex-col items-center w-full lg:flex-row">
                    <div className="blog-image ">
                      <img className="rounded-lg" src={Layers} alt="" />
                    </div>
                    <div className="blog-description flex flex-col justify-between px-4 mt-4 text-center text-white lg:mt-0 lg:px-0 lg:ml-4 lg:w-[26rem] lg:text-start">
                      <h5 className="text-[0.7rem] font-semibold lg:text-sm">
                        Layer of Fear: The Horror series returns
                      </h5>
                      <p className="mt-2 text-xs hidden md:block">
                        Layers of Fear, originally titled Layers of Fears, wraps
                        up the horror series created by Bloober Team, as it
                        includes the previous installments as well as entirely
                        new stories.
                      </p>
                      <p className="mt-2 text-[0.6rem] font-semibold md:text-xs">
                        April 8, 2023
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href=""
                  className="w-[48%] mt-4 p-2 rounded-lg hover:shadow-lg hover:shadow-fourth"
                >
                  <div className="blog-item flex flex-col items-center w-full lg:flex-row">
                    <div className="blog-image ">
                      <img className="rounded-lg" src={RedfallB} alt="" />
                    </div>
                    <div className="blog-description flex flex-col justify-between px-4 mt-4 text-center text-white lg:mt-0 lg:px-0 lg:ml-4 lg:w-[26rem] lg:text-start">
                      <h5 className="text-[0.7rem] font-semibold lg:text-sm">
                        Layer of Fear: The Horror series returns
                      </h5>
                      <p className="mt-2 text-xs hidden md:block">
                        Layers of Fear, originally titled Layers of Fears, wraps
                        up the horror series created by Bloober Team, as it
                        includes the previous installments as well as entirely
                        new stories.
                      </p>
                      <p className="mt-2 text-[0.6rem] font-semibold md:text-xs">
                        April 8, 2023
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href=""
                  className="w-[48%] mt-4 p-2 rounded-lg hover:shadow-lg hover:shadow-fourth"
                >
                  <div className="blog-item flex flex-col items-center w-full lg:flex-row">
                    <div className="blog-image ">
                      <img className="rounded-lg" src={Spiderman} alt="" />
                    </div>
                    <div className="blog-description flex flex-col justify-between px-4 mt-4 text-center text-white lg:mt-0 lg:px-0 lg:ml-4 lg:w-[26rem] lg:text-start">
                      <h5 className="text-[0.7rem] font-semibold lg:text-sm">
                        Layer of Fear: The Horror series returns
                      </h5>
                      <p className="mt-2 text-xs hidden md:block">
                        Layers of Fear, originally titled Layers of Fears, wraps
                        up the horror series created by Bloober Team, as it
                        includes the previous installments as well as entirely
                        new stories.
                      </p>
                      <p className="mt-2 text-[0.6rem] font-semibold md:text-xs">
                        April 8, 2023
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href=""
                  className="w-[48%] mt-4 p-2 rounded-lg hover:shadow-lg hover:shadow-fourth"
                >
                  <div className="blog-item flex flex-col items-center w-full lg:flex-row">
                    <div className="blog-image ">
                      <img className="rounded-lg" src={MinecraftL} alt="" />
                    </div>
                    <div className="blog-description flex flex-col justify-between px-4 mt-4 text-center text-white lg:mt-0 lg:px-0 lg:ml-4 lg:w-[26rem] lg:text-start">
                      <h5 className="text-[0.7rem] font-semibold lg:text-sm">
                        Layer of Fear: The Horror series returns
                      </h5>
                      <p className="mt-2 text-xs hidden md:block">
                        Layers of Fear, originally titled Layers of Fears, wraps
                        up the horror series created by Bloober Team, as it
                        includes the previous installments as well as entirely
                        new stories.
                      </p>
                      <p className="mt-2 text-[0.6rem] font-semibold md:text-xs">
                        April 8, 2023
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="btn-blog flex justify-center mt-10">
                <button className="py-2 px-5 text-xs text-white border-2 border-white transition-all ease-linear hover:bg-fourth hover:text-primary">
                  Muat lebih banyak
                </button>
              </div>
            </div>
          </section>
    )
}

export default BlogGames