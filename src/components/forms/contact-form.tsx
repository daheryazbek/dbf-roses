"use client";
import { useState, FormEvent } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ContactForm = ({ form }: { form?: any }) => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const flowers = [
    "Rosas (Premium/Std)", "Spray Roses", "Alstroemerias", 
    "Stock", "Gypso / Fillers", "Callas / Mini Callas", 
    "Girasoles", "Margaritas", "Summer Flowers Mix"
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const selectedFlowers = Array.from(formData.getAll("flowers")).join(", ");
    
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      country: formData.get("country"),
      message: `${formData.get("message")}\n\nPRODUCTOS: ${selectedFlowers}`,
      email: "web-inquiry@dbfroses.com", // Email genérico para identificar el origen
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '1.5rem', border: '1px solid #f1f5f9', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
      <h2 style={{ fontSize: '1.5rem', color: '#1a3a32', marginBottom: '1.5rem', fontWeight: 'bold' }}>
        {form?.title || "Export Inquiry / Cotización"}
      </h2>
      
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={handleSubmit}>
        <input name="name" style={inputS} placeholder="Full Name / Nombre" required />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <input name="company" style={inputS} placeholder="Company / Empresa" required />
          <input name="country" style={inputS} placeholder="Country / País" required />
        </div>
        
        <label style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#1a3a32', marginTop: '0.5rem' }}>PRODUCTOS DE INTERÉS:</label>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
          {flowers.map(f => (
            <label key={f} style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <input type="checkbox" name="flowers" value={f} /> {f}
            </label>
          ))}
        </div>

        <textarea name="message" style={{ ...inputS, minHeight: '100px' }} placeholder="Message / Detalles del pedido..." required />

        <button type="submit" disabled={status === "sending"} style={status === "sending" ? {...btnS, opacity: 0.7} : btnS}>
          {status === "sending" ? "SENDING..." : (form?.submit || "REQUEST QUOTATION")}
        </button>

        <a href="https://wa.me/593983542914" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <button type="button" style={waS}>WHATSAPP DIRECT</button>
        </a>
      </form>

      {status === "success" && <p style={{ color: '#059669', fontSize: '0.9rem', textAlign: 'center', marginTop: '1rem', fontWeight: 'bold' }}>Sent successfully! We will contact you shortly.</p>}
      {status === "error" && <p style={{ color: '#dc2626', fontSize: '0.9rem', textAlign: 'center', marginTop: '1rem' }}>Error sending. Please try WhatsApp.</p>}
    </div>
  );
};

const inputS: React.CSSProperties = { width: '100%', padding: '0.8rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', outline: 'none', fontSize: '0.9rem' };
const btnS: React.CSSProperties = { backgroundColor: '#1a3a32', color: 'white', padding: '1rem', borderRadius: '50px', fontWeight: 'bold', border: 'none', cursor: 'pointer', marginTop: '1rem' };
const waS: React.CSSProperties = { backgroundColor: 'white', color: '#128C7E', border: '2px solid #128C7E', padding: '1rem', borderRadius: '50px', fontWeight: 'bold', width: '100%', cursor: 'pointer' };