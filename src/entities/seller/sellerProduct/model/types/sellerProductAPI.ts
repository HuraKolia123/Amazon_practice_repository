import { ISellerProduct } from "./sellerProduct";

/**
 * Інтерфейс GetSellerProductResponse описує структуру відповіді на запит про продукти конкретного продавця.
 * Містить інформацію про статус запиту, параметри запиту та дані про продукти продавця.
 */
export interface GetSellerProductResponse {
  status: string; // Статус відповіді (наприклад, "success" або "error")
  request_id: string; // Унікальний ідентифікатор запиту
  parameters: {
    seller_id: string; // Унікальний ідентифікатор продавця
    country: string; // Код країни (ISO 3166-1 alpha-2)
    page: number; // Номер сторінки (для пагінації)
    sort_by: string; // Критерій сортування (наприклад, "price" або "rating")
  };
  data: {
    seller_id: string; // Унікальний ідентифікатор продавця (дублюється для зручності)
    total_products: number; // Загальна кількість продуктів у продавця
    country: string; // Код країни (ISO 3166-1 alpha-2)
    domain: string; // Домен країни (наприклад, "amazon.com")
    seller_products: ISellerProduct[]; // Масив продуктів, які продає цей продавець
  };
}

/**
 * Тип GetSellerProductRequest позначає, що запит на отримання продуктів продавця
 * не потребує передачі додаткових параметрів.
 */
export type GetSellerProductRequest = void;
