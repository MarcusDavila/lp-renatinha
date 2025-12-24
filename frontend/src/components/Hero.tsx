import React from 'react';
import ContactForm from './ContactForm';
import { Clock, Users } from 'lucide-react';
import heroImg from '../assets/images/hero.png';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section className="hero-section">
            {/* Abstract Background Shapes */}
            <div className="hero-bg-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
            </div>

            <div className="hero-visual-bg">
                <img src={heroImg} alt="BIM Architecture" className="hero-image" />
            </div>

            <div className="container hero-container">
                <div className="hero-content animate-fade-in">
                    <div className="hero-badge">
                        <span className="dot"></span> Atendimento 100% Online em Todo Brasil
                    </div>

                    <h1 className="hero-title">
                        RIGOR ESTRUTURAL: <br />
                        <span className="highlight">Reduza Custos de Obra</span> em até 20% com Consultoria BIM e Projetos 3D.
                    </h1>

                    <p className="hero-description">
                        Seu projeto estrutural com a precisão digital que elimina imprevistos.
                        Tecnologia de ponta para garantir <strong>segurança</strong>, <strong>economia</strong> e <strong>conformidade ABNT</strong>.
                    </p>

                    <div className="hero-benefits">
                        <div className="benefit-item">
                            <Clock className="icon-gold" size={20} />
                            <span>Orçamento sem compromisso e Resposta em 24h</span>
                        </div>
                        <div className="benefit-item">
                            <Users className="icon-gold" size={20} />
                            <span>+150 projetos entregues</span>
                        </div>
                    </div>
                </div>

                <div className="hero-form-wrapper animate-fade-in delay-200">
                    <div className="glass-panel form-container-glass">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
