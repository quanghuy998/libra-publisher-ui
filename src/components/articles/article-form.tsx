import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import exp from "constants";
import Article from "../../types/article";
import React, { useState } from "react";
import authorsData from "../../data/authors-data";
import {
  faAdd,
  faTimeline,
  faTimesCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

interface ArticleFormProps {
  article: Article;
  isOpenForm: boolean;
  openReviewDialog?: (id: boolean) => void;
}

const ArticleForm: React.FC<ArticleFormProps> = ({
  article,
  isOpenForm,
  openReviewDialog,
}) => {
  const author = authorsData[0];
  return (
    <>
      {isOpenForm && (
        <div className="modal-container">
          <div className="custom-modal-50 col-2">
            <div
              className="custom-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <h4 className="mt-4">Publication Settings</h4>
              <p>Published on April 15, 2023</p>
              <div className="mb-5 mt-5">
                <label htmlFor="publishedDate" className="form-label">
                  Publication Date
                </label>
                <input
                  type="publishedDate"
                  id="publishedDate"
                  className="form-control p-3"
                  name="publishedDate"
                  //   value={author.email}
                  //   onChange={handleInputChange}
                  placeholder="Selecct a date..."
                />
              </div>
              <div className="row my-2 mx-1">
                <div className="btn btn-light">Schedule publication</div>
              </div>
              <div className="row my-2 mx-1">
                <div className="btn btn-danger">Unpublish</div>
              </div>
            </div>
          </div>
          <div className="custom-modal col-8">
            <div
              className="custom-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-light"
                  onClick={() => openReviewDialog?.(false)}
                >
                  X
                </button>
              </div>
              <div>
                <div>
                  <h3 className="mt-1">{article.title}</h3>
                  <div className="d-flex justify-content-start mb-3">
                    <div className="m-1">
                      <FontAwesomeIcon className="m-1" icon={faUser} />
                      {author.name}
                    </div>
                    <div className="m-1">
                      <FontAwesomeIcon className="m-1" icon={faTimeline} />
                      {article.publishedDate}
                    </div>
                    <div className="m-1">
                      <FontAwesomeIcon className="m-1" icon={faTimesCircle} />
                      Est. reading time: 3 mins
                    </div>
                  </div>
                  <div className="bg-light" style={{ height: 300 }}></div>
                  <div className="mb-3">{article.content}</div>
                  <br />
                  <hr />
                  <div>
                    <h5>References</h5>
                    <ul className="list-group">
                      {article.references?.map((reference, index) => (
                        <li key={index} className="list-group-item">
                          <a href={reference.url}>{reference.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-modal-50 col-2">
            <div
              className="custom-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <h4 className="mt-4">Article Tags</h4>
              <div className="form-group row align-items-center">
                <div className="col-9">
                  <input
                    type="tag"
                    id="tag"
                    className="form-control"
                    name="tag"
                    // value={author.tag}
                    // onChange={handleInputChange}
                    placeholder="Add a tag..."
                  />
                </div>
                <div className="col-2 align-items-center">
                  <button className="btn btn-secondary">
                    <FontAwesomeIcon icon={faAdd} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ArticleForm;
