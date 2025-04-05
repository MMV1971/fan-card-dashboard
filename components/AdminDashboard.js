
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export default function AdminDashboard() {
  const [cards, setCards] = useState([]);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    photoUrl: "",
    showPhone: true,
    showEmail: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCreateCard = () => {
    const newCard = {
      id: Date.now(),
      ...form,
    };
    setCards([...cards, newCard]);
    setForm({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      photoUrl: "",
      showPhone: true,
      showEmail: true,
    });
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Admin - Fan Card</h1>
      <div className="grid grid-cols-2 gap-4">
        <Input name="firstName" placeholder="Nome" value={form.firstName} onChange={handleChange} />
        <Input name="lastName" placeholder="Cognome" value={form.lastName} onChange={handleChange} />
        <Input name="phone" placeholder="Telefono" value={form.phone} onChange={handleChange} />
        <Input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <Input name="photoUrl" placeholder="URL Foto" value={form.photoUrl} onChange={handleChange} />
        <div className="flex items-center space-x-4">
          <label><input type="checkbox" name="showPhone" checked={form.showPhone} onChange={handleChange} /> Mostra Telefono</label>
          <label><input type="checkbox" name="showEmail" checked={form.showEmail} onChange={handleChange} /> Mostra Email</label>
        </div>
      </div>
      <Button onClick={handleCreateCard}>Crea Card</Button>
      <div className="grid grid-cols-1 gap-4 mt-6">
        {cards.map((card) => (
          <Card key={card.id}>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">{card.firstName} {card.lastName}</h2>
              <img src={card.photoUrl} alt="Foto" className="w-24 h-24 object-cover rounded-full" />
              {card.showPhone && <p>📞 {card.phone}</p>}
              {card.showEmail && <p>📧 {card.email}</p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
