const shoes_container = document.querySelector("#shoes_container");


interface Shoe {
  marca: string;
  precio: number;
  tipo: string;
  imagen: string;
  fabricacion: Fabrication;
  hola : string
}[]

interface Fabrication {
  año: boolean;
  lugar: string;
}

async function allShoes() {
  try {
      const response = await fetch("./shoes.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Shoe[] = await response.json();
      data.forEach((element:Shoe) => {
          const containerShoe = document.createElement("div");
          const imageShoe = document.createElement("img");
          const brandShoe = document.createElement("p");
          const typeShoe = document.createElement("p");
          const priceShoe = document.createElement("p");
          const yearFabrication = document.createElement("p");
          const placeFabrication = document.createElement("p");

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

