var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const shoes_container = document.querySelector("#shoes_container");
function allShoes() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("../shoes.json");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = yield response.json();
            data.forEach((element) => {
                console.log(element);
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
                shoes_container === null || shoes_container === void 0 ? void 0 : shoes_container.appendChild(containerShoe);
                containerShoe.appendChild(imageShoe);
                containerShoe.appendChild(brandShoe);
                containerShoe.appendChild(priceShoe);
                containerShoe.appendChild(typeShoe);
                containerShoe.appendChild(yearFabrication);
                containerShoe.appendChild(placeFabrication);
            });
        }
        catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    });
}
allShoes();
export {};
//# sourceMappingURL=script.js.map