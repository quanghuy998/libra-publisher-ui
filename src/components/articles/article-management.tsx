import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArticleTable from "./article-table";
import Article from "../../types/article";
import { useState } from "react";
import articleData from "../../data/articles-data";
import ArticleForm from "./article-form";
import NotificationModal from "../notifications/notification-modal";

const ArticleManagement = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [deleteAuthorMessage, setDeleteAuthorMessage] = useState<string>("");
  const [article, setArticle] = useState<Article>({
    id: "",
    title: "",
    status: "draft",
    content: "",
    category: "",
    author: "",
    publishedDate: "",
    views: 0,
    rating: 0,
    references: [],
  });

  const openReviewDialog = (id: string) => {
    setArticle(articleData.find((article) => article.id === id) || article);
    setIsOpenForm(true);
  };

  const openForm = (isOpen: boolean) => {
    setIsOpenForm(isOpen);
  };

  const openDeleteDialog = (id: string) => {
    var article = articleData.find((article) => article.id === id);
    setDeleteAuthorMessage(
      `This will permanently delete the article ${article?.title} and may affect associated content. This action cannot be undone.`
    );
  };

  return (
    <div>
      <h5 className="col pt-5">Manage Articles</h5>
      <ArticleTable
        deleteId="#deleteArticleModal"
        openDeleteDialog={openDeleteDialog}
        articles={articleData}
        openReviewDialog={openReviewDialog}
      />
      <ArticleForm
        article={article}
        isOpenForm={isOpenForm}
        openReviewDialog={openForm}
      />
      <NotificationModal
        id="deleteArticleModal"
        header="Delete Article"
        body="This will permanently delete the article and may affect associated content. This action cannot be undone."
      />
    </div>
  );
};
export default ArticleManagement;
