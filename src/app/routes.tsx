import { RouteObject } from "react-router-dom";
import Home from "./home-page";
import Layout from "../components/layouts/layout";
import AuthorPage from "./author-page";
import ManuscriptPage from "./manuscript-page";
import ArticlePage from "./article-page";
import CategoryPage from "./category-page";
import TagPage from "./tag-page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/authors",
    element: (
      <Layout>
        <AuthorPage />
      </Layout>
    ),
  },
  {
    path: "/manuscripts",
    element: (
      <Layout>
        <ManuscriptPage />
      </Layout>
    ),
  },
  {
    path: "/articles",
    element: (
      <Layout>
        <ArticlePage />
      </Layout>
    ),
  },
  {
    path: "categories",
    element: (
      <Layout>
        <CategoryPage />
      </Layout>
    ),
  },
  {
    path: "/tags",
    element: (
      <Layout>
        <TagPage />
      </Layout>
    ),
  },
];
export default routes;
