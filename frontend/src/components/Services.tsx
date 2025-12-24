import React from 'react';
import { Search, Box, FileCheck } from 'lucide-react';
import clashImg from '../assets/images/clash.png';
import structuralImg from '../assets/images/structural.png';
import complianceImg from '../assets/images/compliance.png';
import './Services.css';

const Services: React.FC = () => {
    const services = [
        {
            title: 'Consultoria BIM / Clash Detection',
            subtitle: 'Eliminação de Prejuízo',
            description: 'Identificamos conflitos entre disciplinas antes da execução, evitando retrabalho e desperdício de materiais na obra.',
            badge: 'Até 30% de economia',
            icon: <Search size={32} />,
            image: clashImg
        },
        {
            title: 'Projetos Estruturais 3D',
            subtitle: 'Previsibilidade de Custos e Prazos',
            description: 'Modelagem 3D completa com quantitativos precisos. Você sabe exatamente quanto vai gastar antes de iniciar a obra.',
            badge: 'Orçamentos 100% precisos',
            icon: <Box size={32} />,
            image: structuralImg
        },
        {
            title: 'Laudos Técnicos Remotos',
            subtitle: 'Conformidade Legal Garantida',
            description: 'Laudos e pareceres técnicos com ART, em conformidade com todas as normas ABNT, sem você sair do escritório.',
            badge: '100% conformidade ABNT',
            icon: <FileCheck size={32} />,
            image: complianceImg
        }
    ];

    return (
        <section className="services-section">
            <div className="container">
                <h2 className="section-title">Nossos Serviços</h2>
                <p className="section-subtitle">
                    Soluções de engenharia estrutural digital focadas em <strong>resultados financeiros</strong> para sua empresa.
                </p>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-image-container">
                                <img src={service.image} alt={service.title} className="service-card-img" />
                            </div>
                            <div className="service-icon-wrapper">
                                <div className="service-icon">{service.icon}</div>
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <div className="service-card-subtitle">
                                <span className="subtitle-icon">↝</span> {service.subtitle}
                            </div>
                            <p className="service-desc">{service.description}</p>

                            <div className="service-badge">
                                <span className="dot-small"></span> {service.badge}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
