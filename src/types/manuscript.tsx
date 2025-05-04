import { Category } from "./category";
import { Tag } from "./tag";

export type Reference = {
  title: string;
  url: string;
};

export type Manuscript = {
  id: string;
  title: string;
  status: "draft" | "pending" | "approved" | "rejected" | "published";
  author: string;
  submittedDate: string;
  reviewedDate: string;
  reviewedBy: string;
  notes: string;
  featuredImage: string;
  content: string;
  references: Reference[];
  category: Category;
  tags?: Tag[];
};
