import React, { useState } from "react";

interface Author {
  id: number;
  name: string;
  email: string;
  role: string;
  articles: number;
  manuscripts: number;
  joinedDate: string;
  avatar: string;
  initials: string;
}

const AuthorForm: React.FC = () => {
  // State for an empty form to create a new author
  const [formData, setFormData] = useState<Author>({
    id: 0, // Assuming the ID will be assigned later
    name: "",
    email: "",
    role: "author", // Default role is "author"
    articles: 0,
    manuscripts: 0,
    joinedDate: "", // Empty date field
    avatar: "",
    initials: "",
  });

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission (e.g., create new author)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New Author Created:", formData);
    // You can send this data to an API or handle it further here
  };

  return (
    <div className="container mt-4">
      <h2>Create New Author</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control p-3"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter author name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control p-3"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter author email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="role" className="form-label">
            Role
          </label>
          <select
            id="role"
            className="form-select"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="author">Author</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="articles" className="form-label">
            Articles
          </label>
          <input
            type="number"
            id="articles"
            className="form-control p-3"
            name="articles"
            value={formData.articles}
            onChange={handleChange}
            placeholder="Enter number of articles"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="manuscripts" className="form-label">
            Manuscripts
          </label>
          <input
            type="number"
            id="manuscripts"
            className="form-control p-3"
            name="manuscripts"
            value={formData.manuscripts}
            onChange={handleChange}
            placeholder="Enter number of manuscripts"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="joinedDate" className="form-label">
            Joined Date
          </label>
          <input
            type="date"
            id="joinedDate"
            className="form-control p-3"
            name="joinedDate"
            value={formData.joinedDate}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="avatar" className="form-label">
            Avatar URL
          </label>
          <input
            type="text"
            id="avatar"
            className="form-control p-3"
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
            placeholder="Enter avatar URL"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="initials" className="form-label">
            Initials
          </label>
          <input
            type="text"
            id="initials"
            className="form-control p-3"
            name="initials"
            value={formData.initials}
            onChange={handleChange}
            placeholder="Enter initials"
          />
        </div>
      </form>
    </div>
  );
};

export default AuthorForm;
