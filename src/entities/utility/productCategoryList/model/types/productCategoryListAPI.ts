import { IProductCategoryItem } from "./productCategoryList";

/**
 * Інтерфейс GetProductCategoryListResponse описує структуру відповіді на запит про список категорій продуктів.
 * Містить інформацію про статус запиту, унікальний ідентифікатор запиту та дані про категорії продуктів.
 */
export interface GetProductCategoryItemResponse {
  status: string; // Статус відповіді
  request_id: string; // Унікальний ідентифікатор запиту
  data: IProductCategoryItem[]; // Масив об'єктів, що містять список категорій продуктів
}

/**
 * Тип GetProductCategoryListRequest позначає, що запит на отримання списку категорій продуктів
 * не потребує передачі додаткових параметрів.
 */
export type GetProductCategoryItemRequest = {
  country: string;
};
