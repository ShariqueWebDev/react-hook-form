import React from "react";

const Card = () => {
  const cards = [
    {
      title: "Brand Identity",
      description:
        "We create unique and powerful brand identities that help companies achieve their goals and stand out amongst the competition.",
      imageSrc: "/icons/brand.png",
    },
    {
      title: "Web Design",
      description:
        "We help companies craft captivating websites Our designs tell stories and guide users from. vision to action.",
      imageSrc: "/icons/front-end.png",
    },
    {
      title: "Mobile Design",
      description:
        "We destgn mobile and responsive web exgHiences. allowtng users to interact with apps in a way that feels effectless",
      imageSrc: "/icons/phone.png",
    },
    {
      title: "Illustration",
      description:
        "We create •asuai stores that help explan your and vision",
      imageSrc: "/icons/points.png",
    },
    {
      title: "Iconography",
      description:
        "Icons that support the brand and help simplify message",
      imageSrc: "/icons/geometry.png",
    },
    {
      title: "Development",
      description:
        "Solve any design challenge in webflow. If you can dream it. we can build it",
      imageSrc: "/icons/develop.png",
    },
  ];

  return (
    <div className=" bg-black lg:h-screen  pt-10">

    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto place-items-center ">
      {cards.map((card, index) => (
        <div
        key={index}
        className="max-w-[300px] h-[250px] p-6 w-full bg-gradient-to-r from-darkGolden to-lightGolden rounded-xl space-y-4"
        >
          <div>
            <img src={card.imageSrc} alt={`${card.title} icon`} />
          </div>
          <h2 className="text-2xl font-medium text-white">{card.title}</h2>
          <p className="text-sm text-white">{card.description}</p>
        </div>
      ))}
    </div>
      </div>
  );
};

export default Card;
