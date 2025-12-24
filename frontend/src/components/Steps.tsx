import React from 'react';
import './Steps.css';

const Steps: React.FC = () => {
    const steps = [
        {
            number: '1',
            title: 'Análise Online',
            subtitle: 'Diagnóstico Gratuito',
            desc: 'Envie seus documentos e receba uma análise inicial completa do seu projeto, sem custos.'
        },
        {
            number: '2',
            title: 'Proposta de Valor',
            subtitle: 'Escopo e Investimento',
            desc: 'Receba uma proposta clara com escopo detalhado, prazos definidos e investimento transparente.'
        },
        {
            number: '3',
            title: 'Entrega Certificada',
            subtitle: 'Projeto com ART',
            desc: 'Projeto completo com Anotação de Responsabilidade Técnica (ART) e conformidade total com a ABNT.'
        }
    ];

    return (
        <section className="steps-section">
            <div className="container">
                <h2 className="section-title">Como Funciona</h2>
                <p className="section-subtitle">
                    Um processo simples, 100% online, que leva seu projeto do conceito à aprovação.
                </p>

                <div className="steps-grid">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card">
                            <div className="step-number">{step.number}</div>
                            <h3 className="step-title">{step.title}</h3>
                            <span className="step-subtitle">{step.subtitle}</span>
                            <p className="step-desc">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Steps;
