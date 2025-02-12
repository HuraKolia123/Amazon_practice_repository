export interface IOffer {
  productPrice: string; // Ціна продукту
  productOriginalPrice?: string; // Оригінальна ціна продукту (необов'язкова)
  productCondition: string; // Стан продукту
  shipsFrom: string; // Де розташований товар
  seller: string; // Ім'я продавця
  sellerId: string; // Унікальний ідентифікатор продавця
  sellerLink: string; // Посилання на профіль продавця
  sellerStarRating: string; // Рейтинг продавця у вигляді тексту
  sellerStarRatingInfo: string; // Детальна інформація про рейтинг
  currency: string; // Валюта
  deliveryPrice: string; // Вартість доставки
  deliveryTime: string; // Час доставки
}
