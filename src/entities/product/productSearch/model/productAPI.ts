import { SortByType } from "@/shared/libs/types/sortBy";
import { IProduct } from "./product";
import { ProductConditionType } from "@/shared/libs/types/product_condition";
import { ProductDealsAndDiscountsType } from "@/shared/libs/types/deals_and_discounts";

/**
 * Інтерфейс GetProductSearchResponse описує структуру відповіді на запит пошуку продуктів.
 * Включає інформацію про статус запиту, унікальний ідентифікатор запиту та дані про знайдені продукти.
 */
export interface GetProductSearchItemResponse {
  status: string; // Статус відповіді (наприклад, "success" або "error")
  request_id: string; // Унікальний ідентифікатор запиту
  data: {
    total_products: number; // Загальна кількість знайдених продуктів
    country: string; // Код країни (ISO 3166-1 alpha-2)
    domain: string; // Домен країни (наприклад, "amazon.com")
    products: IProduct[]; // Масив об'єктів продуктів, що відповідають критеріям пошуку
  };
}

/**
 * Тип GetProductSearchRequest позначає, що запит на пошук продуктів
 * не потребує передачі додаткових параметрів.
 */
export type GetProductSearchItemRequest = {
  query?: string;
  page?: number;
  country?: string;
  sort_by?: SortByType;
  product_condition?: ProductConditionType;
  deals_and_discounts?: ProductDealsAndDiscountsType;
  category_id: string;
  min_price?: number;
  max_price?: number;
};
