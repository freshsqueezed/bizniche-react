export interface Block {
  id?: string;
  type: string;
  data: Record<string, any>;
}

export type DataProp = {
  time: number;
  version: string;
  blocks: Block[];
};

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
  content: DataProp;
  description: string;
  created_at?: Date;
  updated_at?: Date;
};
