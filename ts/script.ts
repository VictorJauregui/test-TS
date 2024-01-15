const shoes_container = document.querySelector("#shoes_container");
import { Shoe } from "./interfaces/Shoes";

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json() as Promise<T>;
}

async function allShoes() {
  try {
      const shoes: Shoe[] = await fetchJson<Shoe[]>("../shoes.json");
      if (!shoes || shoes.length === 0) {
        throw new Error(`HTTP error! status: ${shoes}`);
      }
      const data = shoes;
      data.forEach((element:Shoe) => {
        // console.log(element)
          const containerShoe:HTMLDivElement = document.createElement("div");
          const imageShoe:HTMLImageElement = document.createElement("img");
          const brandShoe:HTMLParagraphElement = document.createElement("p");
          const typeShoe:HTMLParagraphElement = document.createElement("p");
          const priceShoe:HTMLParagraphElement = document.createElement("p");
          const yearFabrication:HTMLParagraphElement = document.createElement("p");
          const placeFabrication:HTMLParagraphElement = document.createElement("p");

          imageShoe.src = element.imagen;
          brandShoe.innerHTML = element.marca;
          // check the price if is a boolean as the interface says
          // Runtime Errors: Remember that TypeScript interfaces only provide compile-time type checking. They don't validate the structure of the JSON at runtime. If the JSON structure doesn't match the Shoe interface, the code will compile but could fail at runtime. 
          if (typeof element.precio === "boolean") {
            priceShoe.innerHTML = element.precio ? "Sí" : "No";
          } else {
            throw new Error(`HTTP error! status: ${element.precio}. Price is not a boolean`)
          }
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

