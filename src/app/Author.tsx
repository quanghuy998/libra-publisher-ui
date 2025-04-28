import React, { useState } from "react";
import Layout from "../components/layouts/layout";
import AuthorTable from "../components/authors/authors-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AuthorForm from "../components/authors/authors-form";

const Author: React.FC = () => {
  return (
    <div>
      <Layout>
        <h1>Home</h1>
        <h5 className="pb-3 pt-5">Manage authors</h5>
        <button
          type="button"
          className="btn btn-primary mb-3"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <FontAwesomeIcon icon={faPlus} className="me-2" /> Create
        </button>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                {" "}
                <AuthorForm />
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
        <AuthorTable />
      </Layout>
    </div>
  );
};

export default Author;
