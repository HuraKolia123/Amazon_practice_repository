import { IProductReview } from "./review";

/**
 * Інтерфейс GetReviewsOfProductResponse описує структуру відповіді на запит про відгуки продукту.
 * Він містить інформацію про статус запиту, унікальний ідентифікатор, дані про продукт і його відгуки.
 */
export interface GetReviewsOfProductResponse {
  status: string; // Статус відповіді (наприклад, "success" або "error")
  request_id: string; // Унікальний ідентифікатор запиту
  data: {
    asin: string; // Унікальний ідентифікатор продукту (ASIN)
    total_reviews: number; // Загальна кількість відгуків
    total_ratings: number; // Загальна кількість оцінок
    country: string; // Код країни (ISO 3166-1 alpha-2)
    domain: string; // Домен країни (наприклад, "amazon.com")
    reviews: IProductReview[]; // Масив об'єктів, що містять інформацію про окремі відгуки
  };
}

export type GetReviewsOfProductRequest = {
  asin: string;
};
