const shoes_container = document.querySelector("#shoes_container");
import { Shoe } from "./interfaces/Shoes";

async function allShoes() {
  try {
      const response = await fetch("../shoes.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      data.forEach((element:Shoe) => {
        console.log(element)
          const containerShoe:HTMLDivElement = document.createElement("div");
          const imageShoe:HTMLImageElement = document.createElement("img");
          const brandShoe:HTMLParagraphElement = document.createElement("p");
          const typeShoe:HTMLParagraphElement = document.createElement("p");
          const priceShoe:HTMLParagraphElement = document.createElement("p");
          const yearFabrication:HTMLParagraphElement = document.createElement("p");
          const placeFabrication:HTMLParagraphElement = document.createElement("p");

          imageShoe.src = element.imagen;
          brandShoe.innerHTML = element.marca;
          priceShoe.innerHTML = element.precio + "€";
          typeShoe.innerHTML = element.tipo;
          if (element.fabricacion.año !== undefined) {
              yearFabrication.innerHTML = element.fabricacion.año.toString();
            }
          placeFabrication.innerHTML = element.fabricacion.lugar;

          containerShoe.className = "container_shoe";
          imageShoe.className = "image_shoe";
          brandShoe.className = "brand_shoe";
          priceShoe.className = "price_shoe";
          typeShoe.className = "type_shoe";
          yearFabrication.className = "year_fabrication";
          placeFabrication.className = "place_fabrication";

          shoes_container?.appendChild(containerShoe);
          containerShoe.appendChild(imageShoe);
          containerShoe.appendChild(brandShoe);
          containerShoe.appendChild(priceShoe);
          containerShoe.appendChild(typeShoe);
          containerShoe.appendChild(yearFabrication);
          containerShoe.appendChild(placeFabrication);
        });
    }catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }}

allShoes();

