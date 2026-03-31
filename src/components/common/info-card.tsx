import { cn } from "@/lib/utils";

// ESTO ES LO QUE LE FALTA A TU ARCHIVO
export const InfoCard = ({ title, description }: { title: string; description: string }) => {
  return (
      <div className="rounded-2xl border border-pine/10 bg-white p-6 shadow-soft transition hover:shadow-md">
            <h3 className="text-xl font-bold text-pine italic">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{description}</p>
                      </div>
                        );
                        };

                        // TU GRID DE PRODUCTOS CON LAS FOTOS REALES
                        export const ProductGrid = () => {
                          const products = [
                            { 
                                title: "ROSAS & SPRAY", 
                                    desc: "Premium, Standard and Spray roses.", 
                                        img: "/images/category-roses-spray.jpg" 
                                          },
                                            { 
                                                title: "SUMMER FLOWERS", 
                                                    desc: "Alstroemeria, Stock and more fillers.", 
                                                        img: "/images/category-summer-flowers.jpg" 
                                                          },
                                                            { 
                                                                title: "SPECIALTIES", 
                                                                    desc: "Callas, Sunflowers and Tropicals.", 
                                                                        img: "/images/category-callas-specials.jpg" 
                                                                          }
                                                                          ];

                                                                            return (
                                                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                                                                                      {products.map((p, i) => (
                                                                                              <div key={i} className="group relative overflow-hidden rounded-2xl border border-slate-100 shadow-lg">
                                                                                                        <div className="h-64">
                                                                                                                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                                                                                              </div>
                                                                                                                                        <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#1a3a32] p-6">
                                                                                                                                                    <h3 className="text-white font-bold text-xl italic">{p.title}</h3>
                                                                                                                                                                <p className="text-slate-200 text-sm">{p.desc}</p>
                                                                                                                                                                          </div>
                                                                                                                                                                                  </div>
                                                                                                                                                                                        ))}
                                                                                                                                                                                            </div>
                                                                                                                                                                                              );
                                                                                                                                                                                              };