import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoryForm from "./categories-form";
import CategoryTable from "./categories-table";
import { categoriesData } from "../../data/categories-data";

const CategoryManagement = () => {
  return (
    <>
      <div className="row justify-content-between pt-5">
        <h5 className="col">Manage Categories</h5>
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
      <CategoryTable categories={categoriesData} />
      <CategoryForm />
    </>
  );
};
export default CategoryManagement;
