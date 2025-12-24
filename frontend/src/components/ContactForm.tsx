import React, { useState } from 'react';
import './ContactForm.css';

interface FormData {
    name: string;
    email: string;
    phone: string;
    projectType: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        projectType: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const response = await fetch('http://localhost:8080/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    project_type: formData.projectType
                }),
            });

            if (response.ok) {
                setMessage('Solicitação enviada com sucesso! Entraremos em contato em breve.');
                setFormData({ name: '', email: '', phone: '', projectType: '' });
            } else {
                setMessage('Erro ao enviar. Tente novamente.');
            }
        } catch (error) {
            console.error(error);
            setMessage('Erro de conexão.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-form-card">
            <h3>Solicite Sua Análise Técnica Gratuita</h3>
            <p className="subtitle">Receba um diagnóstico rápido e personalizado</p>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome Completo *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Corporativo *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Telefone/WhatsApp *</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="projectType">Tipo de Projeto *</label>
                    <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Selecione o tipo de projeto</option>
                        <option value="residencial">Residencial</option>
                        <option value="comercial">Comercial</option>
                        <option value="industrial">Industrial</option>
                        <option value="reforma">Reforma/Ampliação</option>
                    </select>
                </div>

                <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? 'Enviando...' : 'Enviar para WhatsApp'}
                </button>

                {message && <p className="form-message">{message}</p>}

                <p className="disclaimer">
                    Ao enviar, você concorda com nossa política de privacidade. Seus dados estão seguros conosco.
                </p>
            </form>
        </div>
    );
};

export default ContactForm;
