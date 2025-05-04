import React from "react";
import { categoriesData } from "../../data/categories-data";
import { tagData } from "../../data/tags-data";
import { Manuscript } from "../../types/manuscript";
import authorsData from "../../data/authors-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimeline,
  faTimesCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

interface ManuscriptFormProps {
  id: string;
  manuscript: Manuscript;
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const ManuscriptForm: React.FC<ManuscriptFormProps> = ({
  id,
  manuscript,
  handleInputChange,
}) => {
  const [mode, setMode] = React.useState<"edit" | "review">("edit");

  const handleModeChange = (newMode: "edit" | "review") => {
    setMode(newMode);
    console.log("Mode changed to:", newMode);
  };

  const author = authorsData[0];

  return (
    <div
      className="modal fade"
      id={id}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {mode === "edit" && (
              <form>
                <div className="mb-2 d-flex justify-content-between align-items-center">
                  <label className="form-label">Review Mode</label>
                  <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="First group"
                  >
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => handleModeChange("edit")}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => handleModeChange("review")}
                    >
                      Preview
                    </button>
                  </div>
                </div>
                <div className="mb-2">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-control p-3"
                    name="title"
                    value={manuscript.title}
                    onChange={handleInputChange}
                    placeholder="Enter manuscript title"
                  />
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="category" className="form-label">
                      Category
                    </label>
                    <select
                      id="tag"
                      className="form-select p-3"
                      name="tag"
                      value={manuscript.category.name}
                      onChange={handleInputChange}
                    >
                      {categoriesData.map((category) => (
                        <option key={category.id} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col">
                    <label htmlFor="tag" className="form-label">
                      Tag
                    </label>
                    <select
                      id="tag"
                      className="form-select p-3"
                      name="tag"
                      // value={manuscript.tags}
                      // onChange={handleInputChange}
                    >
                      {tagData.map((tag) => (
                        <option key={tag.id} value={tag.name}>
                          {tag.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mb-2">
                  <label htmlFor="content" className="form-label">
                    Content
                  </label>
                  <textarea
                    className="form-control"
                    id="content"
                    rows={25}
                    placeholder="Enter content here"
                    value={manuscript.content}
                    onChange={handleInputChange}
                  />
                </div>
              </form>
            )}
            {mode === "review" && (
              <div className="row">
                <div className="mb-2 d-flex justify-content-between align-items-center">
                  <label className="form-label">Review Mode</label>
                  <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="First group"
                  >
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => handleModeChange("edit")}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => handleModeChange("review")}
                    >
                      Preview
                    </button>
                  </div>
                </div>
                <h3 className="mt-5">{manuscript.title}</h3>
                <div className="d-flex justify-content-start mb-3">
                  <div className="m-1">
                    <FontAwesomeIcon className="m-1" icon={faUser} />
                    {author.name}
                  </div>
                  <div className="m-1">
                    <FontAwesomeIcon className="m-1" icon={faTimeline} />
                    {manuscript.submittedDate}
                  </div>
                  <div className="m-1">
                    <FontAwesomeIcon className="m-1" icon={faTimesCircle} />
                    Est. reading time: 3 mins
                  </div>
                </div>
                <div className="bg-light" style={{ height: 300 }}></div>
                <div className="mb-3">{manuscript.content}</div>
                <br />
                <hr />
                <div>
                  <h5>References</h5>
                  <ul className="list-group">
                    {manuscript.references.map((reference, index) => (
                      <li key={index} className="list-group-item">
                        <a href={reference.url}>{reference.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
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
export default ManuscriptForm;
