export const initialStore = () => ({
  contacts: [
    {
      id: 1,
      fullName: "Full Name",
      email: "Email address",
      phone: "Phone Number",
      address: "Address"
    }
  ]
});
export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "ADD_CONTACT":
      const isInitialContact =
        store.contacts.length === 1 &&
        store.contacts[0].fullName === "Full Name";
      const newId =
        store.contacts.length > 0
          ? store.contacts[store.contacts.length - 1].id + 1
          : 1;
      const newContact = {
        ...action.payload,
        id: newId
      };
      if (isInitialContact) {
        return {
          ...store,
          contacts: [newContact]
        };
      } else {
        return {
          ...store,
          contacts: [...store.contacts, newContact]
        };
      }
    case "UPDATE_CONTACT":
      return {
        ...store,
        contacts: store.contacts.map(contact =>
          contact.id == action.payload.id ? action.payload : contact
        )
      };
    case "DELETE_CONTACT":
      return {
        ...store,
        contacts: store.contacts.filter(contact => contact.id !== action.payload)
      };
      case "RESET_TO_DEFAULT":
  return {
    ...store,
    contacts: [
      {
        id: 1,
        fullName: "Full Name",
        email: "Email address",
        phone: "Phone Number",
        address: "Address"
      }
    ]
  };
    default:
      return store;
  }
}









