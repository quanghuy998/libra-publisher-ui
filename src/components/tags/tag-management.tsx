import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TagTable from "./tag-table";
import TagForm from "./tag-form";
import { tagData } from "../../data/tags-data";

const TagManagement = () => {
  return (
    <div>
      <div className="row justify-content-between pt-5">
        <h5 className="col">Manage Tags</h5>
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
      <TagTable tags={tagData} />
      <TagForm />
    </div>
  );
};
export default TagManagement;
