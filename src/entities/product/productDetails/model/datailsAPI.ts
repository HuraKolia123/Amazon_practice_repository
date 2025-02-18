import { IProductDetails } from "./details";

/**
 * Інтерфейс GetDetailsOfProductsResponse описує структуру відповіді для запиту деталей продуктів.
 * Містить статус запиту, унікальний ідентифікатор запиту, параметри запиту, а також масив з детальною інформацією про продукти.
 */
export interface GetDetailsOfProductsResponse {
  status: string; // Статус відповіді (наприклад, "success" або "error")
  request_id: string; // Унікальний ідентифікатор запиту
  parameters: {
    asin: string; // Унікальний ідентифікатор продукту (ASIN)
    country: string; // Код країни (ISO 3166-1 alpha-2)
  };
  data: IProductDetails;
}

/**
 * Тип GetDetailsOfProductsRequest позначає, що запит на отримання деталей продуктів
 * не потребує передачі додаткових параметрів.
 */
export interface GetDetailsOfProductsRequest {
  asin: string;
}
