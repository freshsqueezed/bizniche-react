export type Author = {
  id: string;
  username: string;
  email: string;
};

export type BiznicheEntry = {
  id: string;
  niche_id: string;
  author: Author;
  title: string;
  slug: string;
  content: string;
  description: string;
  is_draft: boolean;
  is_active: boolean;
  is_archived: boolean;
  created_at?: Date;
  updated_at?: Date;
};
