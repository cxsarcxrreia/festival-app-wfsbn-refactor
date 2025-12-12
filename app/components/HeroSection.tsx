import React from 'react';
import Button from './Button'; // Importamos o nosso novo componente de botão
//import tripGreen from '../../public/Home/Trip-pana-verde 1.png;' // Placeholder para a imagem de pessoas a caminhar
import PartnerLogo from "./PartnerLogo";

import faroLogo from "../../public/Home/faro-logo.png";
import santaBarbara from ".../../public/Home/Logo-Santa-barbara.png";   
import aceuaberto from "../../public/Home/Aceuaberto.png";
import motorpor from "../../public/Home/logomotorpor.png";      
import motorporsm from "../../public/Home/motorpor-small.png";     
import algarviana from "../../public/Home/algarvianateam.png";
import nexense from "../../public/Home/associacao-nexense.png";
import bifanas from "../../public/Home/bifanas-team.png";

//import { useT } from '../../i18n';

export default function HeroSection() {

    // Componente para os logótipos dos parceiros
    return (
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Coluna da Esquerda: Conteúdo */}
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        <span className="text-[#165031]">Caminhar</span>{' '}
                        <span className="text-[#191919]">juntos</span>
                        <br />
                        <span className="text-[#191919]">Viver</span>{' '}
                        <span className="text-[#165031]">melhor.</span>
                    </h1>

                    <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-gray-700 font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>29 Jan a 01 Fev 2026</span>
                    </div>

                    <p className="mt-4 text-lg text-gray-600">
                        Vem conhecer o Festival de Caminhadas de Santa Bárbara de Nexe.
                    </p>

                        <div className="mt-6 lg:hidden flex justify-center">
                            <img src="tripGreen"
                            alt="Ilustração de pessoas a caminhar"
                            className="w-64 h-auto"
                            loading="lazy"
                            />
                        </div>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 ">
                        {/*}
                        <Button to="/bilhetes" variant="primary">
                            {t("home.hero.cta.getTickets", "Obter Bilhetes")}
                        </Button>
                        */}
                        <Button to="/bilhetes" variant="primary">
                            Obter Bilhetes
                        </Button>
                        {/*
                        <Button to="/programa" variant="secondary">
                            {t("home.hero.cta.viewProgram", "Ver Programa")}
                        </Button>
                        */}
                        <Button to="/programa" variant="secondary">
                            Ver Programa
                        </Button>
                    </div>

                    

                    <div className="mt-12">
                        <p className="text-sm text-gray-500 font-medium mb-4">
                            Organização
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-8 gap-y-4">
                            <PartnerLogo src={nexense}       alt="Associação Nexense" />
                            <PartnerLogo src={algarviana}    alt="Algarviana Team" />
                            <PartnerLogo src={bifanas}       alt="Bifanas Team" />
                        </div>
                    </div>
                </div>

                {/* Coluna da Direita: Imagem (escondida em telemóveis) */}
                <div className="hidden lg:flex justify-center">
                    <img src="tripGreen" alt="Ilustração de pessoas a caminhar" className="w-full max-w-sm h-auto" />
                </div>

            </div>
        </section>
    );
}