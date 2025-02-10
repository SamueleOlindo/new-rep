import { useState } from "react";


export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <h2>Modulo di Registrazione</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="surname"
          placeholder="Cognome"
          value={formData.surname}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
        />
        <button type="submit" className="submit-button">Registrati</button>
      </form>
      {submitted && (
        <div className="submitted-data">
          <p><strong>Nome:</strong> {formData.name}</p>
          <p><strong>Cognome:</strong> {formData.surname}</p>
          <p><strong>Email:</strong> {formData.email}</p>
        </div>
      )}
    </div>
  );
}
