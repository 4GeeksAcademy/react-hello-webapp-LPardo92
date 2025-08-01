import { useNavigate, useParams } from "react-router-dom";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const EditContact = () => {
  const { id } = useParams();
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: ""
  });

  useEffect(() => {
    const contactoAEditar = store.contacts.find(
      (c) => c.id == id // compara con igualdad laxa para string o número
    );

    if (contactoAEditar) {
      setForm(contactoAEditar);
    }
  }, [id, store.contacts]);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_CONTACT", payload: form });
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };
  
  return (
    <div className="container mt-4">
      <form className="mx-auto w-75 p-3" onSubmit={handleSubmit}>
        <h1 className="text-center">Edit Contact</h1>
        {/* Inputs igual que antes, con value y onChange */}
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            className="form-control mb-3"
            value={form.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email address"
            className="form-control mb-3"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone number</label>
          <input
            id="phone"
            name="phone"
            placeholder="xxx-xxx-xxxx"
            className="form-control mb-3"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            id="address"
            name="address"
            placeholder="Address"
            className="form-control mb-3"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Save</button>
        <button
          type="button"
          onClick={handleCancel}
          className="btn btn-secondary w-100 mt-3"
        >
          Cancel
        </button>
        <div
          onClick={handleCancel}
          style={{ cursor: "pointer" }}
          className="mt-3 text-center"
        >
          <FontAwesomeIcon icon={faLeftLong} className="text-dark me-2" />
          Return to previous page
        </div>
      </form>
    </div>
  );
};






