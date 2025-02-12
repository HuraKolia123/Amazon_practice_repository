import { ISellerReview } from "./sellerReview";

/**
 * Інтерфейс GetSellerReviewResponse описує структуру відповіді на запит про відгуки продавця.
 * Включає інформацію про статус запиту, унікальний ідентифікатор запиту та дані про відгуки продавця.
 */
export interface GetSellerReviewResponse {
  status: string; // Статус відповіді (наприклад, "success" або "error")
  request_id: string; // Унікальний ідентифікатор запиту
  data: {
    seller_id: string; // Унікальний ідентифікатор продавця
    country: string; // Код країни (ISO 3166-1 alpha-2)
    domain: string; // Домен країни (наприклад, "amazon.com")
    has_next_page: boolean; // Прапорець, який показує, чи є наступна сторінка з відгуками
    seller_reviews: ISellerReview[]; // Масив об'єктів, що містять інформацію про відгуки продавця
  };
}

/**
 * Тип GetSellerReviewRequest позначає, що запит на отримання відгуків продавця
 * не потребує передачі додаткових параметрів.
 */
export type GetSellerReviewRequest = void;
