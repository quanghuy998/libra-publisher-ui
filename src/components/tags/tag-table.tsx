import React from "react";
import { Tag } from "../../types/tag";
import Table, { TableColumn } from "../tables/table";

interface TagTableProps {
  tags: Tag[];
}

const TagTable: React.FC<TagTableProps> = ({ tags }) => {
  const columns: TableColumn[] = [
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
            Edit
          </div>
          <div
            data-bs-toggle="modal"
            // data-bs-target={deleteId}
            className="btn btn-light mx-1"
            // onClick={() => openDeleteDialog(row.id)}
          >
            Delete
          </div>
        </>
      ),
    },
  ];
  return <Table data={tags} columns={columns} />;
};
export default TagTable;
