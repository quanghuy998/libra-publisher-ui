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

const AuthorTable: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<string | null>(null); // Track open menu for each row

  const toggleMenu = (id: string) => {
    setMenuOpen(menuOpen === id ? null : id); // Toggle menu visibility
  };

  const handleEdit = (id: string) => {
    console.log(`Editing item with ID: ${id}`);
  };

  const handleDelete = (id: string) => {
    console.log(`Deleting item with ID: ${id}`);
  };

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
        <div className="dropdown">
          {/* Font Awesome Menu Icon */}
          <button
            className="btn btn-outline-secondary rounded-circle p-2"
            type="button"
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => toggleMenu(row.id)}
          >
            <FontAwesomeIcon icon={faEllipsisVertical} />{" "}
            {/* Font Awesome Vertical Ellipsis Icon */}
          </button>
          {menuOpen === row.id && (
            <ul className="dropdown-menu show">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleEdit(row.id)}
                >
                  <FontAwesomeIcon icon={faEdit} /> Edit {/* Edit icon */}
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleDelete(row.id)}
                >
                  <FontAwesomeIcon icon={faTrash} /> Delete {/* Delete icon */}
                </button>
              </li>
            </ul>
          )}
        </div>
      ),
    },
  ];

  return <Table columns={columns} data={data} />;
};

export default AuthorTable;
