import { useState } from "react";
import data from "../../data/authors-data";
import Avatar from "../avartars/Avatar";
import Table, { TableColumn } from "../tables/table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons"; // Import icons

interface Props {
  editId: string;
  deleteId: string;
  openEditDialog: any;
  openDeleteDialog: any;
}

const AuthorTable: React.FC<Props> = ({
  editId,
  deleteId,
  openEditDialog,
  openDeleteDialog,
}) => {
  const columns: TableColumn[] = [
    {
      header: "Author",
      accessor: "name",
      render: (value: string, row: any) => (
        <div className="d-flex align-items-center">
          <Avatar initials={row.initials} size={35} />
          <p className="ms-2 mb-0">{value}</p>
        </div>
      ),
      sort: "asc",
    },
    { header: "Email", accessor: "email", sort: "asc" },
    { header: "Role", accessor: "role", sort: "asc" },
    { header: "Articles", accessor: "articles", sort: "asc" },
    { header: "Joined Date", accessor: "joinedDate", sort: "asc" },
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

  return <Table columns={columns} data={data} />;
};

export default AuthorTable;
