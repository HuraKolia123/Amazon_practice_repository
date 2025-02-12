export interface IReview {
  reviewId: string;
  reviewTitle: string;
  reviewComment: string;
  reviewStarRating: string; // Зберігається як текст, але можна змінити на number, якщо завжди буде числове значення.
  reviewLink: string;
  reviewAuthor: string;
  reviewAuthorAvatar: string;
  reviewImages?: string[]; // Може бути порожнім, тому тип необов'язковий.
  reviewVideo?: string | null; // Відео може бути null або undefined.
  reviewDate: string;
  isVerifiedPurchase: boolean;
  helpfulVoteStatement?: string; // Не обов'язкове, якщо може бути відсутнім.
  reviewedProductAsin: string;
}
