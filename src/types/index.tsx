interface Nutrient {
  label: string;
  quantity: number;
  unit: string;
}

interface NutrientDaily extends Nutrient {
  hasRDI: boolean;
  daily: number;
  schemaOrgTag: string | null;
  sub?: NutrientDaily[];
}

interface ImageSize {
  url: string;
  width: number;
  height: number;
}

interface Images {
  THUMBNAIL: ImageSize;
  SMALL: ImageSize;
  REGULAR: ImageSize;
  LARGE: ImageSize;
}

interface Ingredient {
  text: string;
  quantity: number;
  measure: string;
  food: string;
  weight: number;
  foodCategory: string;
  foodId: string;
  image: string;
}

// Main recipe type
// interface Recipe {
//   uri: string;
//   label: string;
//   image: string;
//   images: Images;
//   source: string;
//   url: string;
//   shareAs: string;
//   yield: number;
//   dietLabels: string[];
//   healthLabels: string[];
//   cautions: string[];
//   ingredientLines: string[];
//   ingredients: Ingredient[];
//   calories: number;
//   totalCO2Emissions: number;
//   co2EmissionsClass: string;
//   totalWeight: number;
//   totalTime: number;
//   cuisineType: string[];
//   mealType: string[];
//   dishType: string[];
//   totalNutrients: {
//       [key: string]: Nutrient;
//       ENERC_KCAL: Nutrient;
//       FAT: Nutrient;
//       FASAT: Nutrient;
//       FATRN: Nutrient;
//       FAMS: Nutrient;
//       FAPU: Nutrient;
//       CHOCDF: Nutrient;
//       'CHOCDF.net': Nutrient;
//       FIBTG: Nutrient;
//       SUGAR: Nutrient;
//       'SUGAR.added': Nutrient;
//       PROCNT: Nutrient;
//       CHOLE: Nutrient;
//       NA: Nutrient;
//       CA: Nutrient;
//       MG: Nutrient;
//       K: Nutrient;
//       FE: Nutrient;
//       ZN: Nutrient;
//       P: Nutrient;
//       VITA_RAE: Nutrient;
//       VITC: Nutrient;
//       THIA: Nutrient;
//       RIBF: Nutrient;
//       NIA: Nutrient;
//       VITB6A: Nutrient;
//       FOLDFE: Nutrient;
//       FOLFD: Nutrient;
//       FOLAC: Nutrient;
//       VITB12: Nutrient;
//       VITD: Nutrient;
//       TOCPHA: Nutrient;
//       VITK1: Nutrient;
//       WATER: Nutrient;
//   };
//   totalDaily: {
//       [key: string]: Nutrient;
//       ENERC_KCAL: Nutrient;
//       FAT: Nutrient;
//       FASAT: Nutrient;
//       CHOCDF: Nutrient;
//       FIBTG: Nutrient;
//       PROCNT: Nutrient;
//       CHOLE: Nutrient;
//       NA: Nutrient;
//       CA: Nutrient;
//       MG: Nutrient;
//       K: Nutrient;
//       FE: Nutrient;
//       ZN: Nutrient;
//       P: Nutrient;
//       VITA_RAE: Nutrient;
//       VITC: Nutrient;
//       THIA: Nutrient;
//       RIBF: Nutrient;
//       NIA: Nutrient;
//       VITB6A: Nutrient;
//       FOLDFE: Nutrient;
//       VITB12: Nutrient;
//       VITD: Nutrient;
//       TOCPHA: Nutrient;
//       VITK1: Nutrient;
//   };
//   digest: NutrientDaily[];
// }

interface RecipeProp {
  uri: string;
  label: string;
  image: string;
  images: Images;
  source: string;
  url: string;
  shareAs: string;
  yield: string;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: Ingredient[];
  calories: number;
  totalCO2Emissions: number;
  co2EmissionsClass: string;
  totalWeight: number;
  totalTime: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
  totalNutrients: {
    [key: string]: Nutrient;
    ENERC_KCAL: Nutrient;
    FAT: Nutrient;
    FASAT: Nutrient;
    FATRN: Nutrient;
    FAMS: Nutrient;
    FAPU: Nutrient;
    CHOCDF: Nutrient;
    "CHOCDF.net": Nutrient;
    FIBTG: Nutrient;
    SUGAR: Nutrient;
    "SUGAR.added": Nutrient;
    PROCNT: Nutrient;
    CHOLE: Nutrient;
    NA: Nutrient;
    CA: Nutrient;
    MG: Nutrient;
    K: Nutrient;
    FE: Nutrient;
    ZN: Nutrient;
    P: Nutrient;
    VITA_RAE: Nutrient;
    VITC: Nutrient;
    THIA: Nutrient;
    RIBF: Nutrient;
    NIA: Nutrient;
    VITB6A: Nutrient;
    FOLDFE: Nutrient;
    FOLFD: Nutrient;
    FOLAC: Nutrient;
    VITB12: Nutrient;
    VITD: Nutrient;
    TOCPHA: Nutrient;
    VITK1: Nutrient;
    WATER: Nutrient;
  };
  totalDaily: {
    [key: string]: Nutrient;
    ENERC_KCAL: Nutrient;
    FAT: Nutrient;
    FASAT: Nutrient;
    CHOCDF: Nutrient;
    FIBTG: Nutrient;
    PROCNT: Nutrient;
    CHOLE: Nutrient;
    NA: Nutrient;
    CA: Nutrient;
    MG: Nutrient;
    K: Nutrient;
    FE: Nutrient;
    ZN: Nutrient;
    P: Nutrient;
    VITA_RAE: Nutrient;
    VITC: Nutrient;
    THIA: Nutrient;
    RIBF: Nutrient;
    NIA: Nutrient;
    VITB6A: Nutrient;
    FOLDFE: Nutrient;
    VITB12: Nutrient;
    VITD: Nutrient;
    TOCPHA: Nutrient;
    VITK1: Nutrient;
  };
  digest: NutrientDaily[];
}

interface LinkProp {
  self: {
    href: string;
    title: string;
  };
}

export interface Recipes {
  recipe: RecipeProp;
  _links?: LinkProp;
}

export interface CardProps {
  title: string;
  image: string;
  source?: string;
  loading?: boolean;
}

export interface AuthUser {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  dateJoined?: string | null;
}

export type MimeType =
  | "image/png"
  | "image/jpeg"
  | "image/webp"
  | "application/json"
  | "text/plain"
  | "application/pdf"
  | string;
