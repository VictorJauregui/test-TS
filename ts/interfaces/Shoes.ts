export interface Shoe {
    marca: string;
    precio: boolean;
    tipo: string;
    imagen: string;
    fabricacion: Fabrication;
  }
  
export interface Fabrication {
    año: number;
    lugar: string;
  }