export interface IProduct {
  asin: string; // Уникальный идентификатор продукта
  product_title: string; // Название продукта
  product_price: string; // Текущая цена продукта
  product_original_price: string; // Оригинальная цена до скидки
  currency: string; // Валюта цены
  product_star_rating: string; // Рейтинг продукта
  product_num_ratings: number; // Количество отзывов
  product_url: string; // Ссылка на страницу продукта
  product_photo: string; // URL изображения продукта
  product_num_offers: number; // Количество предложений
  product_minimum_offer_price: string; // Минимальная цена среди предложений
  is_best_seller: boolean; // Является ли продукт бестселлером
  is_amazon_choice: boolean; // Является ли выбором Amazon
  is_prime: boolean; // Доступен ли для Prime-доставки
  climate_pledge_friendly: boolean; // Поддерживает ли климатическую инициативу
  sales_volume?: string; // Объем продаж за указанный период
  delivery?: string; // Информация о доставке
  has_variations: boolean; // Есть ли варианты продукта
}
