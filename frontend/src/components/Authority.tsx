import React from 'react';
import { Award, Building2, Layers, Grid, ShieldCheck, CheckCircle } from 'lucide-react';
import './Authority.css';

const Authority: React.FC = () => {
    const technologies = [
        {
            name: 'BIM',
            sub: 'Building Information Modeling',
            icon: <Building2 size={32} strokeWidth={1.5} />
        },
        {
            name: 'Revit',
            sub: 'Autodesk Revit',
            icon: <Layers size={32} strokeWidth={1.5} />
        },
        {
            name: 'Eberick',
            sub: 'AltoQi Eberick',
            icon: <Grid size={32} strokeWidth={1.5} />
        },
        {
            name: 'ABNT',
            sub: 'Conformidade Normativa',
            icon: <ShieldCheck size={32} strokeWidth={1.5} />
        }
    ];

    const guarantees = [
        'Projetos em Todo Brasil',
        'Entrega Digital Segura',
        'Suporte Pós-Entrega'
    ];

    return (
        <section className="authority-section">
            <div className="container">

                {/* Top Badge */}
                <div className="authority-header">
                    <div className="authority-pill">
                        <Award className="icon-gold" size={20} />
                        <span>Mais de <span className="highlight-gold">150 Projetos</span> de Estruturas Entregues com Rigor e Segurança</span>
                    </div>
                </div>

                {/* Tech Grid */}
                <div className="tech-grid">
                    {technologies.map((tech, index) => (
                        <div key={index} className="tech-card">
                            <div className="tech-icon-circle">
                                {tech.icon}
                            </div>
                            <h3 className="tech-name">{tech.name}</h3>
                            <p className="tech-sub">{tech.sub}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom Trust Indicators */}
                <div className="trust-indicators">
                    {guarantees.map((item, index) => (
                        <div key={index} className="trust-item">
                            <CheckCircle className="icon-gold-small" size={18} />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Authority;
