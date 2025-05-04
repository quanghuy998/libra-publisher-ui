import { Reference } from "./manuscript";

interface Article {
  id: string;
  title: string;
  status: "published" | "draft";
  content: string;
  category: string;
  author: string;
  publishedDate: string;
  views: number;
  rating: number;
  references?: Reference[];
}

export default Article;
