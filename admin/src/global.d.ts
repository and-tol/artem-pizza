import { Ingredient } from './types';

interface FormData {
  append(name: string, value: Ingredient, fileName?: string): void;
  set(name: string, value: FormDataValue, fileName?: string): void;
}
