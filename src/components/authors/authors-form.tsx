import React, { useState } from "react";
import AvatarUploader from "../avartars/avatar-uploader";
import { Author } from "../../types/author";

interface Props {
  id: string;
  title?: string;
  description?: string;
  handleInputChange: any;
  author: Author;
}

const AuthorForm: React.FC<Props> = ({
  id,
  author,
  handleInputChange,
  title = "Add New Author",
  description = "Create a new author account for your platform.",
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(author);
  };

  return (
    <div
      className="modal fade"
      id={id}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby={id + "Label"}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-md">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <div className="container mt-4">
              <p>{description}</p>
              <form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-center mb-5 mt-5">
                  <AvatarUploader />
                </div>
                <div className="mb-2">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control p-3"
                    name="name"
                    value={author.name}
                    onChange={handleInputChange}
                    placeholder="Enter author name"
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control p-3"
                    name="email"
                    value={author.email}
                    onChange={handleInputChange}
                    placeholder="Enter author email"
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="role" className="form-label">
                    Role
                  </label>
                  <select
                    id="role"
                    className="form-select"
                    name="role"
                    value={author.role}
                    onChange={handleInputChange}
                  >
                    <option value="author">Author</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorForm;
