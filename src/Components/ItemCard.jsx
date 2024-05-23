import React from "react";

const data = [
  {
    id: 1,
    name: "Cappuccino",
    description:
      "A classic Italian coffee made with espresso and steamed milk.",
    price: 3.99,
    image:
      "https://images.squarespace-cdn.com/content/v1/5d96d524052c897425394aaf/40a3b761-a13c-44af-93af-096c75a695f3/cafe-menu-breakfast-ideas.jpeg",
  },
  {
    id: 2,
    name: "Croissant",
    description: "Freshly baked buttery croissant.",
    price: 2.49,
    image:
      "https://perfectdailygrind.com/wp-content/uploads/2019/09/Low-Waste-2.png",
  },
  {
    id: 3,
    name: "Espresso",
    description:
      "Strong black coffee made by forcing steam through ground coffee beans.",
    price: 2.99,
    image: "https://brunchcafe.com/wp-content/uploads/2020/12/IMG_2127.jpeg",
  },
  {
    id: 4,
    name: "Latte",
    description: "Coffee made with espresso and steamed milk.",
    price: 4.49,
    image:
      "https://www.chefworks.com.au/assets/images/blog/most-popular-cafe-foods-2020/Cafe_Burger.jpg",
  },
  {
    id: 5,
    name: "Bagel",
    description: "Freshly baked bagel served with cream cheese.",
    price: 3.29,
    image:
      "https://eatbook.sg/wp-content/uploads/2022/08/apricus-cafe-flatlay.jpg",
  },
];

function ItemCard() {
  return (
    <div className="flex mt-10 gap-10 max-sm:flex max-sm:flex-col">
      <div className="flex flex-col p-6 max-sm:flex max-sm:flex-row gap-10">
        <a
          href="#"
          className="text-blue-500 font-bold hover:text-blue-700 block mb-4"
        >
          All
        </a>
        <a
          href="#"
          className="text-blue-500 font-bold hover:text-blue-700 block mb-4"
        >
          Breakfast
        </a>
        <a
          href="#"
          className="text-blue-500 font-bold hover:text-blue-700 block mb-4"
        >
          Sandwich
        </a>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="max-w-xs rounded overflow-hidden shadow-lg"
          >
            <img
              className="w-full h-32 object-cover"
              src={item.image}
              alt={item.name}
            />
            <div className="px-4 py-2">
              <div className="font-bold text-lg mb-2">{item.name}</div>
              <p className="text-gray-700 text-base">{item.description}</p>
            </div>
            <div className="px-4 py-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                ${item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemCard;
