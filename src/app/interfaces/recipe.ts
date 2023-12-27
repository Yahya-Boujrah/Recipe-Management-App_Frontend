import { Category } from "./category";
import { Ingredient } from "./ingredient";
import { Instruction } from "./instruction";
import { User } from "./user";

export interface Recipe {
    id ?: string;
    title:string;
    description:string;
    picture:string;
    category : Category;
    rating?: number;
    user?: User;
    createdAt ?: string;
    ingredients : Ingredient[];
    instructions : Instruction[];
}
