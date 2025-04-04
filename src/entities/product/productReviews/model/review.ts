export interface IProductReview {
  review_id: string;
  review_title: string;
  review_comment: string;
  review_star_rating: string;
  review_link: string;
  review_author_id: string;
  review_author: string;
  review_author_url: string;
  review_author_avatar?: string;
  review_images: string[];
  review_video: null;
  review_date: string;
  is_verified_purchase: boolean;
  helpful_vote_statement: string;
  reviewed_product_asin: string;
}
