// Основні дані продукту
export interface IProductDetails {
  asin: string; // Унікальний ідентифікатор продукту
  product_title: string; // Назва продукту
  product_price: string; // Ціна продукту
  product_original_price: string | null; // Оригінальна ціна продукту (якщо є)
  currency: string; // Валюта ціни
  country: string; // Країна, де продається продукт
  product_byline: string; // Інформація про продавця або бренд
  product_byline_link: string; // Посилання на продавця або бренд
  product_star_rating: string; // Середній рейтинг продукту
  product_num_ratings: number; // Кількість оцінок продукту
  product_url: string; // Посилання на сторінку продукту
  product_photo: string; // Головне зображення продукту
  product_num_offers: number; // Кількість пропозицій для цього продукту
  product_availability: string; // Інформація про наявність продукту
  isBesis_best_sellertSeller: boolean; // Чи є продукт бестселером
  is_amazon_choice: boolean; // Чи є продукт "вибором Amazon"
  is_prime: boolean; // Чи підтримується доставка Prime
  climate_pledge_friendly: boolean; // Чи відповідає продукт екологічним стандартам
  sales_volume?: string; // Обсяг продажів (якщо доступно)
  about_product: string[]; // Основні характеристики або переваги продукту
  product_description: string; // Детальний опис продукту
  product_information?: Record<string, string>; // Додаткова інформація про продукт у вигляді пар ключ-значення
  // product_information: Record<string, string>; // Додаткова інформація про продукт у вигляді пар ключ-значення
  product_photos?: string[]; // Додаткові фотографії продукту
  product_videos: string[];
  user_uploaded_videos: IUserUploadedVideo[]; // Відеоматеріали про продукт
  has_video: boolean; // Чи є у продукту відеоматеріали
  product_details?: Record<string, string>; // Специфікації продукту
  customers_say: string; // Відгуки клієнтів (основна теза)
  delivery: string; // Інформація про доставку
  primary_delivery_time: string; // Основний час доставки
  category: ICategoryInfo; // Основна категорія продукту
  category_path: ICategoryPath[]; // Шлях категорій продукту (дерево)
  product_variations?: IProductVariations; // Варіації продукту (розміри, кольори тощо)
  has_aplus: boolean; // Чи підтримує продукт A+ контент (розширений опис)
  hasBrandStory: boolean; // Чи є у продукту історія бренду
}

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

export type IUserUploadedVideo = {
  id: string;
  asin: string;
  product_asin: string;
  parent_asin: string;
  related_products: string;
  title: string;
  profile_image_url: string;
  profile_link: string;
  public_name: string;
  creator_type: string;
  vendor_code: string;
  vendor_name: string;
  vendor_tracking_id: string;
  video_image_id: string;
  video_image_url: string;
  video_image_url_unchanged: string;
  video_image_width: string;
  video_image_height: string;
  video_image_extension: string;
  video_url: string;
  video_previews: string;
  video_mime_type: string;
};
