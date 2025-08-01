import { createBrowserRouter, } from "react-router-dom";
import { ContactHome } from "./components/ContactHome";
import { ContactDetails } from "./components/ContactDetails";
import { EditContact } from "./components/EditContact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ContactHome />
  },

  {
    path: "/contact-details",
    element: <ContactDetails />
  },
  
  {
    path: "/edit-contact/:id",  // add :id here
    element: <EditContact />
  }
]);



