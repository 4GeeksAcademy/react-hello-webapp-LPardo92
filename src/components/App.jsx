import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactHome } from "./components/ContactHome.jsx";
import { EditContact } from "./components/EditContact.jsx";
import { ContactDetails } from "./components/ContactDetails.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ContactHome />} />
                <Route path="/contact-details" element={<ContactDetails />} />
                <Route path="/edit-contact/:id" element={<EditContact />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;