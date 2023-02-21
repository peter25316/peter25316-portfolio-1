import Image from "next/image";
import quizzical from "../../../public/assets/quizzical-1.png";
import weather from "../../../public/assets/weather-bot-1.png";
import portfolio from "../../../public/assets/portfolio-1.png";

const Portfolio = () => {
  return (
    <div className="my-5">
      <h3 className="text-3xl py-1">Portfolio</h3>
      <div className="flex flex-wrap gap-10">
        <div className="basis-64 flex-1 ">
          <Image className="rounded-lg" width={"100%"} src={quizzical}></Image>
        </div>
        <div className="basis-64 flex-1 ">
          <Image className="rounded-lg" width={"100%"} src={weather}></Image>
        </div>
        <div className="basis-64 flex-1 ">
          <Image className="rounded-lg" width={"100%"} src={portfolio}></Image>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
