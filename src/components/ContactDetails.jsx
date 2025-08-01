import { useNavigate } from 'react-router-dom';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import useGlobalReducer from "../hooks/useGlobalReducer";
const generateId = () => Date.now().toString() + Math.floor(Math.random() * 1000).toString();
export const ContactDetails = () => {
  const { dispatch } = useGlobalReducer();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: ""
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      ...form,
      id: generateId()
    };
    dispatch({ type: "ADD_CONTACT", payload: newContact });
    navigate("/");
  };
  return (
    <div className="container mt-4">
      <form className="mx-auto w-75 p-3" onSubmit={handleSubmit}>
        <h1 className="text-center">New Contact</h1>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            className="form-control mb-3"
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
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Save</button>
        <div
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
          className="mt-3"
        >
          <FontAwesomeIcon icon={faLeftLong} className="text-dark me-2" />
          Return to previous page
        </div>
      </form>
    </div>
  );
};
