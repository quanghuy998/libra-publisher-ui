import { faEye, faMultiply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table, { TableColumn } from "../tables/table";
import Article from "../../types/article";
import React from "react";

interface ArticleTableProps {
  articles: Article[];
  deleteId: string;
  openReviewDialog: (id: string) => void;
  openDeleteDialog: (id: string) => void;
}

const ArticleTable: React.FC<ArticleTableProps> = ({
  articles,
  deleteId,
  openReviewDialog,
  openDeleteDialog,
}) => {
  const columns: TableColumn[] = [
    { header: "Title", accessor: "title", sort: "asc" },
    { header: "Status", accessor: "status", sort: "asc" },
    { header: "Category", accessor: "category", sort: "asc" },
    { header: "Author", accessor: "author", sort: "asc" },
    { header: "Published Date", accessor: "publishedDate", sort: "asc" },
    { header: "Views", accessor: "views", sort: "asc" },
    { header: "Rating", accessor: "rating", sort: "asc" },
    {
      header: "Action",
      accessor: "action",
      render: (value: string, row: any) => (
        <>
          <div
            className="btn btn-light mx-1"
            onClick={() => openReviewDialog(row.id)}
          >
            <FontAwesomeIcon icon={faEye} />
          </div>
          <div
            data-bs-toggle="modal"
            data-bs-target={deleteId}
            className="btn btn-light mx-1"
            onClick={() => openDeleteDialog(row.id)}
          >
            <FontAwesomeIcon icon={faMultiply} />
          </div>
        </>
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} data={articles} />
    </div>
  );
};
export default ArticleTable;
