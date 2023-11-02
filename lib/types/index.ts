export type Author = {
  id: string;
  username: string;
  email: string;
};

export type BiznicheBlogPost = {
  id: string;
  niche_id: string;
  author: Author;
  title: string;
  slug: string;
  content: string;
  description: string;
  created_at?: Date;
  updated_at?: Date;
};
