// Основні дані продукту
export interface IProductDetails {
  asin: string; // Унікальний ідентифікатор продукту
  productTitle: string; // Назва продукту
  productPrice: string; // Ціна продукту
  productOriginalPrice: string | null; // Оригінальна ціна продукту (якщо є)
  currency: string; // Валюта ціни
  country: string; // Країна, де продається продукт
  productByline: string; // Інформація про продавця або бренд
  productBylineLink: string; // Посилання на продавця або бренд
  productStarRating: string; // Середній рейтинг продукту
  productNumRatings: number; // Кількість оцінок продукту
  productUrl: string; // Посилання на сторінку продукту
  productPhoto: string; // Головне зображення продукту
  productNumOffers: number; // Кількість пропозицій для цього продукту
  productAvailability: string; // Інформація про наявність продукту
  isBestSeller: boolean; // Чи є продукт бестселером
  isAmazonChoice: boolean; // Чи є продукт "вибором Amazon"
  isPrime: boolean; // Чи підтримується доставка Prime
  climatePledgeFriendly: boolean; // Чи відповідає продукт екологічним стандартам
  salesVolume?: string; // Обсяг продажів (якщо доступно)
  aboutProduct: string[]; // Основні характеристики або переваги продукту
  productDescription: string; // Детальний опис продукту
  productInformation: Record<string, string>; // Додаткова інформація про продукт у вигляді пар ключ-значення
  productPhotos: string[]; // Додаткові фотографії продукту
  productVideos: string[]; // Відеоматеріали про продукт
  hasVideo: boolean; // Чи є у продукту відеоматеріали
  productDetails: IProductSpecifications; // Специфікації продукту
  customersSay: string; // Відгуки клієнтів (основна теза)
  delivery: string; // Інформація про доставку
  primaryDeliveryTime: string; // Основний час доставки
  category: ICategoryInfo; // Основна категорія продукту
  categoryPath: ICategoryPath[]; // Шлях категорій продукту (дерево)
  productVariations: IProductVariations; // Варіації продукту (розміри, кольори тощо)
  hasAplus: boolean; // Чи підтримує продукт A+ контент (розширений опис)
  hasBrandStory: boolean; // Чи є у продукту історія бренду
}

// Специфікації продукту
type IProductSpecifications = {
  Brand: string; // Бренд продукту
  OperatingSystem: string; // Операційна система
  RamMemoryInstalledSize: string; // Обсяг оперативної пам'яті
  CPUModel: string; // Модель процесора
  CPUSpeed: string; // Швидкість процесора
  MemoryStorageCapacity: string; // Обсяг пам'яті
  ScreenSize: string; // Розмір екрану
  Resolution: string; // Роздільна здатність екрану
  RefreshRate: string; // Частота оновлення екрану
  ModelName: string; // Назва моделі
};

// Інформація про основну категорію продукту
type ICategoryInfo = {
  id: string; // Ідентифікатор категорії
  name: string; // Назва категорії
};

// Шлях категорій продукту
type ICategoryPath = {
  id: string; // Ідентифікатор категорії
  name: string; // Назва категорії
  link: string; // Посилання на категорію
};

// Варіації продукту (розміри, кольори тощо)
type IProductVariations = {
  size?: IVariationOption[]; // Варіанти розмірів продукту
  color?: IVariationOptionWithPhoto[]; // Варіанти кольорів продукту із зображеннями
  serviceProvider?: IVariationOption[]; // Варіанти постачальників послуг (якщо застосовно)
};

// Варіант варіації продукту
type IVariationOption = {
  asin: string; // Унікальний ідентифікатор варіації
  value: string; // Значення варіації (наприклад, "32GB")
  isAvailable: boolean; // Чи доступний цей варіант
};

// Варіант варіації з фото
type IVariationOptionWithPhoto = IVariationOption & {
  photo: string; // Зображення для цього варіанту
};
