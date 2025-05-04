import React from "react";
import Table, { TableColumn } from "../tables/table";
import { Category } from "../../types/category";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CategoryTableProps {
  categories: Category[];
}

const CategoryTable: React.FC<CategoryTableProps> = ({ categories }) => {
  const column: TableColumn[] = [
    { header: "Name", accessor: "name", sort: "asc" },
    { header: "Description", accessor: "description", sort: "asc" },
    { header: "Created At", accessor: "createdAt", sort: "asc" },
    { header: "Updated At", accessor: "updatedAt", sort: "asc" },
    {
      header: "Action",
      accessor: "action",
      render: (value: string, row: any) => (
        <>
          <div
            data-bs-toggle="modal"
            // data-bs-target={editId}
            className="btn btn-light mx-1"
            // onClick={() => openEditDialog(row.id)}
          >
            <FontAwesomeIcon icon={faEdit} />
          </div>
          <div
            data-bs-toggle="modal"
            // data-bs-target={deleteId}
            className="btn btn-light mx-1"
            // onClick={() => openDeleteDialog(row.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </>
      ),
    },
  ];
  return <Table data={categories} columns={column} />;
};
export default CategoryTable;
