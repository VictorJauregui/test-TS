export interface Shoe {
    marca: string;
    precio: number;
    tipo: string;
    imagen: string;
    fabricacion: Fabrication;
  }
  
export interface Fabrication {
    año: number;
    lugar: string;
  }