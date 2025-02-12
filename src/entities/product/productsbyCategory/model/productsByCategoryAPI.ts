import { IProductsByCategory } from "./productsByCategory";

/**
 * Інтерфейс GetCategoryOfProductsResponse описує структуру відповіді на запит категорій продуктів.
 * Містить інформацію про статус запиту, унікальний ідентифікатор запиту та дані про категорії продуктів.
 */
export interface GetCategoryOfProductsResponse {
  status: string; // Статус відповіді (наприклад, "success" або "error")
  request_id: string; // Унікальний ідентифікатор запиту
  data: {
    total_products: number; // Загальна кількість продуктів у категорії
    country: string; // Код країни (ISO 3166-1 alpha-2)
    domain: string; // Домен країни (наприклад, "amazon.com")
    products: IProductsByCategory[]; // Масив об'єктів категорій продуктів
  };
}

/**
 * Тип GetCategoryOfProductsRequest позначає, що запит на отримання категорій продуктів
 * не потребує передачі додаткових параметрів.
 */
export type GetCategoryOfProductsRequest = void;
