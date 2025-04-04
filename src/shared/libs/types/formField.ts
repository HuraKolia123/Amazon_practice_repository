export interface FormField {
  name: string; // Ім'я поля для react-hook-form
  label: string; // Текст мітки
  placeholder?: string; // Плейсхолдер для інпуту
  type?: string; // Тип інпуту (text, password тощо)
}
