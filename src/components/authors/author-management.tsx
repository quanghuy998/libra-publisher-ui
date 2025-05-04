import React, { useState } from "react";
import Layout from "../layouts/layout";
import AuthorTable from "./authors-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AuthorForm from "./authors-form";
import { Author } from "../../types/author";
import authorsData from "../../data/authors-data";
import NotificationModal from "../notifications/notification-modal";

const AuthorManagerment: React.FC = () => {
  const [deleteAuthorMessage, setDeleteAuthorMessage] = useState<string>("");
  const [author, setAuthors] = useState<Author>({
    id: 0,
    name: "",
    email: "",
    role: "author",
    articles: 0,
    manuscripts: 0,
    joinedDate: "",
    avatar: "",
    initials: "",
  });

  const openEditDialog = (id: number) => {
    setAuthors(authorsData.find((author) => author.id === id) || author);
  };

  const openDeleteDialog = (id: number) => {
    var author = authorsData.find((author) => author.id === id);
    setDeleteAuthorMessage(
      `This will permanently delete the author ${author?.name} and may affect associated content. This action cannot be undone.`
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthors((prevAuthor) => ({
      ...prevAuthor,
      [name]: value,
    }));
    console.log(author);
  };

  return (
    <div>
      <div className="row justify-content-between pt-5">
        <h5 className="col">Manage Authors</h5>
        <div className="col justify-content-end d-flex">
          <button
            type="button"
            className="btn btn-dark mb-3"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <FontAwesomeIcon icon={faPlus} className="me-2" /> Create
          </button>
        </div>
      </div>
      <AuthorForm
        id="staticBackdrop"
        author={author}
        handleInputChange={handleInputChange}
      />
      <AuthorTable
        editId="#editAuthorModal"
        deleteId="#deleteAuthorModal"
        openEditDialog={openEditDialog}
        openDeleteDialog={openDeleteDialog}
      />
      <AuthorForm
        id="editAuthorModal"
        title="Edit Author"
        description="Edit the author details."
        author={author}
        handleInputChange={handleInputChange}
      />
      <NotificationModal
        id="deleteAuthorModal"
        header="Are you sure?"
        body={deleteAuthorMessage}
      />
    </div>
  );
};

export default AuthorManagerment;
