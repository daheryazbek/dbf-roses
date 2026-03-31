"use client";
import { useState, FormEvent } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ContactForm = ({ form }: { form?: any }) => {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const flowers = [
    "Rosas (Premium/Std)", "Spray Roses", "Alstroemerias", 
    "Stock", "Gypso / Fillers", "Callas / Mini Callas", 
    "Girasoles", "Margaritas", "Summer Flowers Mix"
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '1.5rem', border: '1px solid #f1f5f9', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
      <h2 style={{ fontSize: '1.5rem', color: '#1a3a32', marginBottom: '1.5rem', fontWeight: 'bold' }}>
        {form?.title || "Export Inquiry / Cotización"}
      </h2>
      
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={handleSubmit}>
        <input style={inputS} placeholder="Full Name / Nombre" required />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <input style={inputS} placeholder="Company / Empresa" required />
          <input style={inputS} placeholder="Country / País" required />
        </div>
        
        <label style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#1a3a32', marginTop: '0.5rem' }}>PRODUCTOS DE INTERÉS:</label>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
          {flowers.map(f => (
            <label key={f} style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <input type="checkbox" /> {f}
            </label>
          ))}
        </div>

        <textarea style={{ ...inputS, minHeight: '100px' }} placeholder="Message / Detalles del pedido..." required />

        <button type="submit" disabled={status === "sending"} style={status === "sending" ? {...btnS, opacity: 0.7} : btnS}>
          {status === "sending" ? "SENDING..." : (form?.submit || "REQUEST QUOTATION")}
        </button>

        <a href="https://wa.me/593983542914" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <button type="button" style={waS}>WHATSAPP DIRECT</button>
        </a>
      </form>

      {status === "success" && <p style={{ color: '#059669', fontSize: '0.9rem', textAlign: 'center', marginTop: '1rem', fontWeight: 'bold' }}>Sent successfully!</p>}
    </div>
  );
};

const inputS: React.CSSProperties = { width: '100%', padding: '0.8rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', outline: 'none', fontSize: '0.9rem' };
const btnS: React.CSSProperties = { backgroundColor: '#1a3a32', color: 'white', padding: '1rem', borderRadius: '50px', fontWeight: 'bold', border: 'none', cursor: 'pointer', marginTop: '1rem' };
const waS: React.CSSProperties = { backgroundColor: 'white', color: '#128C7E', border: '2px solid #128C7E', padding: '1rem', borderRadius: '50px', fontWeight: 'bold', width: '100%', cursor: 'pointer' };