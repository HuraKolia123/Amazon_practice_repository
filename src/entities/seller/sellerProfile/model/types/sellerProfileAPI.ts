import { ISellerProfile } from "./sellerProfile";

/**
 * Інтерфейс GetSellerProfileResponse описує структуру відповіді на запит про профіль продавця.
 * Включає інформацію про статус запиту, унікальний ідентифікатор запиту та дані профілю продавця.
 */
export interface GetSellerProfileResponse {
  status: string; // Статус відповіді (наприклад, "success" або "error")
  request_id: string; // Унікальний ідентифікатор запиту
  data: ISellerProfile; // Об'єкт, що містить деталі профілю продавця
}

/**
 * Тип GetSellerProfileRequest позначає, що запит на отримання профілю продавця
 * не потребує передачі додаткових параметрів.
 */
export type GetSellerProfileRequest = void;
