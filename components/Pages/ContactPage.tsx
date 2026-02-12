import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const location = useLocation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'ESTÁNDAR',
    objective: 'FUERZA',
    message: ''
  });

  // Detect plan passed from Pricing section
  useEffect(() => {
    if (location.state && location.state.plan) {
      setFormState(prev => ({
        ...prev,
        plan: location.state.plan
      }));
    }
  }, [location.state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for submission would go here
    alert(`PROTOCOLO DE INICIACIÓN ENVIADO PARA PLAN: ${formState.plan}. ESPERE CONTACTO.`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="pt-16 max-w-[1600px] mx-auto border-x-0 md:border-x-2 border-white/10 bg-background-dark min-h-screen flex flex-col">
      
      {/* Header */}
      <section className="relative py-20 px-6 border-b-2 border-white/10 bg-neutral-dark">
        <div className="absolute top-4 right-4 animate-pulse">
           <span className="w-3 h-3 bg-red-500 rounded-full inline-block mr-2"></span>
           <span className="font-mono text-xs text-red-500 uppercase tracking-widest">Grabando</span>
        </div>
        
        <div className="max-w-4xl">
          <span className="text-primary font-mono text-xs mb-4 block uppercase tracking-[0.2em]">/// FASE 01: RECLUTAMIENTO</span>
          <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-6">
            INICIAR <br/>
            <span className="text-outline">PROTOCOLO.</span>
          </h1>
          <p className="text-xl text-gray-400 font-mono border-l-4 border-primary pl-6 max-w-2xl">
            Completa el formulario para solicitar acceso. La aprobación no es automática. Buscamos compromiso, no turistas.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 flex-grow">
        
        {/* Form Section */}
        <section className="lg:col-span-8 p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-white/10 bg-background-dark relative">
            <div className="absolute top-0 left-0 p-2 border-r border-b border-white/10 bg-black z-10">
                <span className="font-mono text-[10px] text-gray-500 uppercase">FORM: REG-001</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-12 max-w-3xl">
                
                {/* Personal Data Group */}
                <div className="space-y-6">
                    <h3 className="text-sm font-bold uppercase text-gray-500 tracking-widest border-b border-white/10 pb-2 mb-6">
                        01 // Datos del Operativo
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group">
                            <label className="block font-mono text-xs text-primary mb-2 uppercase">Nombre Completo</label>
                            <input 
                                type="text" 
                                name="name"
                                required
                                value={formState.name}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-white/20 py-3 text-white font-bold text-lg focus:outline-none focus:border-primary transition-colors placeholder-white/10 rounded-none"
                                placeholder="APELLIDO, NOMBRE"
                            />
                        </div>
                        <div className="group">
                            <label className="block font-mono text-xs text-primary mb-2 uppercase">Comunicaciones (Email)</label>
                            <input 
                                type="email" 
                                name="email"
                                required
                                value={formState.email}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-white/20 py-3 text-white font-bold text-lg focus:outline-none focus:border-primary transition-colors placeholder-white/10 rounded-none"
                                placeholder="CORREO@EJEMPLO.COM"
                            />
                        </div>
                    </div>
                     <div className="group">
                        <label className="block font-mono text-xs text-primary mb-2 uppercase">Frecuencia (Teléfono)</label>
                        <input 
                            type="tel" 
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-white/20 py-3 text-white font-bold text-lg focus:outline-none focus:border-primary transition-colors placeholder-white/10 rounded-none"
                            placeholder="+52 (00) 0000 0000"
                        />
                    </div>
                </div>

                {/* Objective Group */}
                <div className="space-y-6">
                    <h3 className="text-sm font-bold uppercase text-gray-500 tracking-widest border-b border-white/10 pb-2 mb-6">
                        02 // Misión y Acceso
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group relative">
                            <label className="block font-mono text-xs text-primary mb-2 uppercase">Objetivo Principal</label>
                            <select 
                                name="objective"
                                value={formState.objective}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-white/20 py-3 text-white font-bold text-lg focus:outline-none focus:border-primary transition-colors appearance-none rounded-none cursor-pointer"
                            >
                                <option value="FUERZA" className="bg-neutral-dark text-gray-300">INCREMENTO DE FUERZA</option>
                                <option value="HIPERTROFIA" className="bg-neutral-dark text-gray-300">HIPERTROFIA / ESTÉTICA</option>
                                <option value="RENDIMIENTO" className="bg-neutral-dark text-gray-300">RENDIMIENTO ATLÉTICO</option>
                                <option value="SALUD" className="bg-neutral-dark text-gray-300">REHABILITACIÓN / SALUD</option>
                            </select>
                            <span className="material-icons absolute right-0 bottom-3 pointer-events-none text-white/20">arrow_drop_down</span>
                        </div>
                        <div className="group relative">
                            <label className="block font-mono text-xs text-primary mb-2 uppercase">Nivel de Acceso</label>
                            <select 
                                name="plan"
                                value={formState.plan}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-white/20 py-3 text-white font-bold text-lg focus:outline-none focus:border-primary transition-colors appearance-none rounded-none cursor-pointer"
                            >
                                <option value="ESTÁNDAR" className="bg-neutral-dark text-gray-300">ACCESO ESTÁNDAR ($900)</option>
                                <option value="MAESTRA" className="bg-neutral-dark text-gray-300">LLAVE MAESTRA ($1200)</option>
                            </select>
                             <span className="material-icons absolute right-0 bottom-3 pointer-events-none text-white/20">arrow_drop_down</span>
                        </div>
                    </div>
                </div>

                {/* Message */}
                <div className="space-y-6">
                    <div className="group">
                        <label className="block font-mono text-xs text-primary mb-2 uppercase">Informe Adicional (Opcional)</label>
                        <textarea 
                            name="message"
                            rows={4}
                            value={formState.message}
                            onChange={handleChange}
                            className="w-full bg-transparent border border-white/20 p-4 text-white font-mono text-sm focus:outline-none focus:border-primary transition-colors placeholder-white/10 rounded-none resize-none"
                            placeholder="LESIONES PREVIAS, EXPERIENCIA, DUDAS ESPECÍFICAS..."
                        />
                    </div>
                </div>

                {/* Submit */}
                <div className="pt-6">
                    <button type="submit" className="group relative w-full md:w-auto px-12 py-5 bg-white text-black font-bold uppercase tracking-widest overflow-hidden hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                        <span className="relative z-10 group-hover:text-white transition-colors">Enviar Solicitud</span>
                        <div className="absolute inset-0 bg-primary transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                    </button>
                    <p className="mt-4 text-[10px] font-mono text-gray-600 uppercase">
                        * Al enviar este formulario aceptas renunciar a la debilidad.
                    </p>
                </div>

            </form>
        </section>

        {/* Sidebar Info */}
        <section className="lg:col-span-4 bg-neutral-dark p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
             {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')"}}></div>
            
            <div className="relative z-10">
                <h3 className="text-2xl font-bold uppercase mb-8 border-l-4 border-white pl-4">
                    Cuartel <br/> General
                </h3>
                
                <div className="space-y-8">
                    <div>
                        <span className="block font-mono text-xs text-primary mb-1 uppercase">Ubicación Primaria</span>
                        <p className="text-lg font-bold text-white">Av. Concreto 1984, Sótano</p>
                        <p className="text-sm text-gray-400">Zona Industrial, CDMX</p>
                    </div>

                    <div>
                        <span className="block font-mono text-xs text-primary mb-1 uppercase">Canal Directo</span>
                        <p className="text-lg font-bold text-white">55 1234 5678</p>
                        <p className="text-sm text-gray-400">fuerza@ironbloc.mx</p>
                    </div>

                    <div>
                        <span className="block font-mono text-xs text-primary mb-1 uppercase">Horario Operativo</span>
                        <table className="w-full text-sm text-left mt-2">
                            <tbody>
                                <tr className="border-b border-white/10">
                                    <td className="py-2 text-gray-400">Lunes - Viernes</td>
                                    <td className="py-2 text-right font-mono font-bold text-white">05:00 - 23:00</td>
                                </tr>
                                <tr className="border-b border-white/10">
                                    <td className="py-2 text-gray-400">Sábado</td>
                                    <td className="py-2 text-right font-mono font-bold text-white">07:00 - 21:00</td>
                                </tr>
                                <tr>
                                    <td className="py-2 text-gray-400">Domingo</td>
                                    <td className="py-2 text-right font-mono font-bold text-white">08:00 - 18:00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="relative z-10 mt-12 pt-12 border-t border-white/10">
                 <div className="flex items-center gap-4 opacity-50">
                    <span className="material-icons text-4xl">security</span>
                    <p className="text-[10px] font-mono leading-tight uppercase">
                        Área videovigilada 24/7.<br/>
                        Acceso biométrico exclusivo.<br/>
                        Seguridad privada armada.
                    </p>
                 </div>
            </div>

        </section>

      </div>
    </main>
  );
};

export default ContactPage;