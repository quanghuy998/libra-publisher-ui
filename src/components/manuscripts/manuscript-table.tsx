import React from "react";
import { Manuscript } from "../../types/manuscript";
import Table, { TableColumn } from "../tables/table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

interface ManuscriptTableProps {
  manuscripts: Manuscript[];
  editId: string;
  deleteId: string;
  openEditDialog: (id: string) => void;
  openDeleteDialog: (id: string) => void;
}

const ManuscriptTable: React.FC<ManuscriptTableProps> = ({
  manuscripts,
  editId,
  deleteId,
  openEditDialog,
  openDeleteDialog,
}) => {
  const columns: TableColumn[] = [
    { header: "Title", accessor: "title", sort: "asc" },
    { header: "Status", accessor: "status", sort: "asc" },
    { header: "Author", accessor: "author", sort: "asc" },
    { header: "Submitted Date", accessor: "submittedDate", sort: "asc" },
    { header: "Reviewed Date", accessor: "reviewedDate", sort: "asc" },
    {
      header: "Action",
      accessor: "action",
      render: (value: string, row: any) => (
        <>
          <div
            data-bs-toggle="modal"
            data-bs-target={editId}
            className="btn btn-light mx-1"
            onClick={() => openEditDialog(row.id)}
          >
            <FontAwesomeIcon icon={faEdit} />
          </div>
          <div
            data-bs-toggle="modal"
            data-bs-target={deleteId}
            className="btn btn-light mx-1"
            onClick={() => openDeleteDialog(row.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </>
      ),
    },
  ];

  return <Table columns={columns} data={manuscripts} />;
};
export default ManuscriptTable;
