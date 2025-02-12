import { IOffer } from "./offer";

/**
 * Тип IParameters використовується для збереження параметрів запиту, таких як унікальний ідентифікатор продукту (ASIN),
 * країна, обмеження на кількість результатів, а також номер сторінки.
 */
type IParameters = {
  asin: string; // Унікальний ідентифікатор продукту
  country: string; // Код країни (ISO 3166-1 alpha-2)
  limit: number; // Максимальна кількість елементів на сторінку
  page: number; // Номер сторінки запиту
};

/**
 * Тип IProductDetails описує основні деталі продукту, такі як бренд, операційна система, розмір екрану, модель процесора тощо.
 */
type IProductDetails = {
  brand: string; // Бренд продукту
  operating_system: string; // Операційна система, якщо застосовно
  ram_memory_installed_size: string; // Розмір встановленої оперативної пам'яті
  cpu_model: string; // Модель процесора
  cpu_speed: string; // Швидкість процесора
  memory_storage_capacity: string; // Обсяг пам'яті для зберігання даних
  screen_size: string; // Розмір екрана
  resolution: string; // Роздільна здатність екрана
  model_name: string; // Назва моделі
  wireless_carrier: string; // Бездротовий оператор (для телефонів)
  customers_say: string; // Відгуки покупців
  delivery: string; // Інформація про доставку
  primary_delivery_time: string; // Основний час доставки
};

/**
 * Тип ICategory описує категорію продукту.
 */
type ICategory = {
  id: string; // Унікальний ідентифікатор категорії
  name: string; // Назва категорії
};

/**
 * Тип ICategoryPath описує ієрархію категорій, включаючи ідентифікатор, назву та посилання на категорію.
 */
type ICategoryPath = {
  id: string; // Ідентифікатор категорії в ієрархії
  name: string; // Назва категорії
  link: string; // URL-адреса категорії
};

/**
 * Тип IColor описує доступні варіанти кольорів продукту, включаючи фото, доступність та унікальний ідентифікатор.
 */
type IColor = {
  asin: string; // Унікальний ідентифікатор для кожного кольору
  value: string; // Назва кольору
  photo: string; // URL зображення кольору
  is_available: boolean; // Чи доступний цей варіант
};

/**
 * Інтерфейс GetOfferOfProductResponse описує структуру відповіді на запит, яка містить статус, параметри запиту,
 * та детальну інформацію про продукт, включаючи його опис, категорію, варіанти, пропозиції тощо.
 */
export interface GetOfferOfProductResponse {
  status: string; // Статус відповіді (наприклад, "success" або "error")
  request_id: string; // Унікальний ідентифікатор запиту
  parameters: IParameters; // Параметри, передані в запиті
  data: {
    asin: string; // Унікальний ідентифікатор продукту
    product_title: string; // Назва продукту
    product_price: string; // Актуальна ціна продукту
    product_original_price: null; // Початкова ціна (може бути null, якщо відсутня)
    product_price_max: string; // Максимальна ціна продукту, якщо є кілька варіантів
    currency: string; // Валюта ціни
    country: string; // Країна продажу
    product_byline: string; // Текст під назвою продукту
    product_byline_link: string; // Посилання на сторінку продавця
    product_star_rating: string; // Рейтинг продукту у зірках
    product_num_ratings: number; // Кількість оцінок продукту
    product_url: string; // URL продукту
    product_photo: string; // Головне фото продукту
    product_num_offers: number; // Кількість доступних пропозицій
    product_availability: string; // Статус наявності продукту
    is_best_seller: boolean; // Чи є продукт бестселером
    is_amazon_choice: boolean; // Чи є продукт "Amazon's Choice"
    is_prime: false; // Чи підтримує доставка Prime
    climate_pledge_friendly: boolean; // Чи є продукт екологічно дружнім
    sales_volume: string; // Обсяг продажів
    about_product: string[]; // Короткий опис продукту
    product_description: string; // Розгорнутий опис продукту
    product_information: {
      product_dimensions: string; // Розміри продукту
      item_weight: string; // Вага продукту
      asin: string; // Унікальний ідентифікатор продукту
      item_model_number: string; // Номер моделі продукту
      batteries: string; // Інформація про батареї, якщо застосовно
      best_sellers_rank: string; // Рейтинг серед бестселерів
      os: string; // Операційна система
      ram: string; // Обсяг оперативної пам'яті
      wireless_communication_technologies: string; // Технології бездротового зв'язку
      connectivity_technologies: string; // Технології підключення
      other_display_features: string; // Додаткові особливості дисплея
      human_interface_input: string; // Тип вводу
      scanner_resolution: string; // Роздільна здатність сканера
      other_camera_features: string; // Додаткові характеристики камери
      form_factor: string; // Форм-фактор продукту
      color: string; // Колір продукту
      battery_power_rating: string; // Ємність батареї
      phone_talk_time: string; // Час розмови (для телефонів)
      whats_in_the_box: string; // Комплектація
      manufacturer: string; // Виробник
      date_first_available: string; // Дата першої появи на ринку
      memory_storage_capacity: string; // Обсяг пам'яті
      standing_screen_display_size: string; // Діагональ екрану
      ram_memory_installed_size: string; // Обсяг встановленої оперативної пам'яті
      battery_capacity: string; // Ємність батареї
      weight: string; // Вага продукту
      charging_time: string; // Час зарядки
    };
    product_photos: string[]; // Додаткові фото продукту
    product_videos: string[]; // Відео про продукт
    has_video: boolean; // Чи є відео про продукт
    product_details: IProductDetails; // Основні деталі продукту
    category: ICategory; // Категорія продукту
    category_path: ICategoryPath[]; // Ієрархія категорій
    product_variations: {
      color: IColor[]; // Варіанти кольорів продукту
    };
    has_aplus: boolean; // Чи підтримується A+ контент
    has_brandstory: boolean; // Чи є історія бренду
    product_offers: IOffer[]; // Пропозиції для продукту
  };
}

/**
 * Тип GetOfferOfProductRequest не приймає жодних параметрів, використовується як позначення.
 */
export type GetOfferOfProductRequest = void;
