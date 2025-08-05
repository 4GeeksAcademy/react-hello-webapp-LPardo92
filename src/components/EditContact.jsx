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
    const contactoAEditar = store.contacts.find((c) => c.id == id);
    if (contactoAEditar) setForm(contactoAEditar);
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

  // ✅ Agregamos estilos de animación
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .hover-return:hover {
        color: #0d6efd;
      }

      .transition-icon {
        transition: transform 0.2s ease, color 0.2s ease;
      }

      .hover-return:hover .transition-icon {
        transform: translateX(-4px);
        color: #0d6efd;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="container mt-4">
      <form className="mx-auto w-75 p-3" onSubmit={handleSubmit}>
        <h1 className="text-center">Edit Contact</h1>

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

        {/* Botón de Guardar */}
        <button type="submit" className="btn btn-primary w-100">
          Save
        </button>

        {/* Botón Cancelar */}
        <button
          type="button"
          onClick={handleCancel}
          className="btn btn-outline-secondary w-100 mt-3"
        >
          Cancel
        </button>

        {/* Enlace visual mejorado con ícono */}
        <div
          onClick={handleCancel}
          style={{ cursor: "pointer" }}
          className="mt-4 d-flex align-items-center justify-content-center text-secondary fw-semibold hover-return"
        >
          <FontAwesomeIcon icon={faLeftLong} className="me-2 fs-5 transition-icon" />
          Return to previous page
        </div>
      </form>
    </div>
  );
};
