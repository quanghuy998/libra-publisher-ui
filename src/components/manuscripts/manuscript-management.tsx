import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ManuscriptTable from "./manuscript-table";

import { manuscriptsData } from "../../data/manuscript-data";
import ManuscriptForm from "./manuscript-form";
import { Manuscript } from "../../types/manuscript";
import { useState } from "react";
import NotificationModal from "../notifications/notification-modal";

const ManuscriptManagement = () => {
  const [deleteManuscriptMessage, setDeleteManuscriptMessage] =
    useState<string>("");
  const [manuscript, setManuscript] = useState<Manuscript>({
    id: "",
    title: "",
    status: "draft",
    author: "",
    submittedDate: "",
    reviewedDate: "",
    reviewedBy: "",
    notes: "",
    featuredImage: "",
    content: "",
    references: [],
    category: {
      id: "0",
      name: "",
      description: "",
      articles: 0,
      createdAt: "",
      updatedAt: "",
    },
  });

  const openEditDialog = (id: string) => {
    setManuscript(
      manuscriptsData.find((manuscript) => manuscript.id === id) || manuscript
    );
    console.log(manuscript);
  };

  const openDeleteDialog = (id: string) => {
    setManuscript(
      manuscriptsData.find((manuscript) => manuscript.id === id) || manuscript
    );
    setDeleteManuscriptMessage(
      `This will permanently delete the manuscript ${manuscript?.title} and may affect associated content. This action cannot be undone.`
    );
  };

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setManuscript((prevManuscript) => ({
      ...prevManuscript,
      [name]: value,
    }));
    console.log(manuscript);
  };

  return (
    <div>
      <div className="row justify-content-between pt-5">
        <h5 className="col">Manage Manuscripts</h5>
        <div className="col justify-content-end d-flex">
          <button
            type="button"
            className="btn btn-dark mb-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
          >
            <FontAwesomeIcon icon={faPlus} className="me-2" /> Create
          </button>
        </div>
      </div>
      <ManuscriptForm
        id="exampleModal2"
        manuscript={manuscript}
        handleInputChange={handleInputChange}
      />
      <ManuscriptTable
        editId="#editManuscriptModal"
        deleteId="#deleteManscriptModal"
        openEditDialog={openEditDialog}
        openDeleteDialog={openDeleteDialog}
        manuscripts={manuscriptsData}
      />
      <NotificationModal
        id="deleteManscriptModal"
        header="Are you sure?"
        body={deleteManuscriptMessage}
      />
      <ManuscriptForm
        id="editManuscriptModal"
        manuscript={manuscript}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};
export default ManuscriptManagement;
