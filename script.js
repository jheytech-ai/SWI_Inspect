// DICIONÁRIO DE TRADUÇÃO (PT / EN)
const translations = {
    pt: {
        "nav-about": "Quem Somos",
        "nav-services": "Serviços",
        "nav-certs": "Certificações",
        "nav-cta": "Solicitar Vistoria",
        "hero-tagline": "Excelência Operacional Marítima",
        "hero-title": "Vistorias Técnicas de Alta Precision e Conformidade IHM",
        "hero-desc": "Garantindo segurança jurídica, controle rigoroso de perdas e conformidade internacional para navios, cargas e operações de bunker nos principais portos.",
        "btn-inspector": "Falar com Inspetor Técnico",
        "btn-services": "Conhecer Serviços",
        "certs-title": "Credenciais e Certificações Internacionais",
        "certs-subtitle": "Qualificações técnicas de alto padrão que posicionam a SWI no mercado global.",
        "cert-dnv-title": "Certificação DNV GL",
        "cert-dnv-desc": "<strong>HazMat Training LITE</strong>. Qualificação técnica oficial para o desenvolvimento e elaboração do Inventário de Materiais Perigosos (IHM) em total conformidade com a Regulamentação de Reciclagem de Navios da União Europeia.",
        "cert-ukata-title": "Certificação UKATA",
        "cert-ukata-desc": "<strong>Asbestos Awareness</strong>. Especialização internacional voltada para a identificação, mapeamento e gerenciamento seguro de amianto em estruturas navais, atendendo à Regulação 10 do Control of Asbestos Regulations.",
        "services-title": "Serviços Periciais Especializados",
        "services-subtitle": "Atuação analítica e imparcial para a completa mitigação de riscos operacionais.",
        "cat1-title": "Eficiência & Combustível",
        "cat2-title": "Carga & Integridade",
        "cat3-title": "Contratos & Meio Ambiente",
        "about-title": "Sobre a SWI Sea World Inspection",
        "about-p1": "Sob a direção do inspetor técnico <strong>Vagner Ribeiro</strong>, a SWI consolida sólida bagagem prática em vistorias navais e perícias operacionais portuárias. Nosso compromisso fundamental é emitir laudos técnicos de alta confiabilidade, precisão e total isenção jurídica, protegendo os ativos de nossos clientes.",
        "about-p2": "Com qualificações obtidas junto a autoridades marítimas globais de prestígio (como a DNV GL nas sedes de Hamburgo e Singapura), oferecemos respostas ágeis e atendimento focado na estrita conformidade técnica exigida internacionalmente.",
        "footer-brand-desc": "Soluções periciais de engenharia naval e conformidade ambiental regulatória.",
        "footer-contact-title": "Canais de Atendimento",
        "btn-whatsapp-footer": "Solicitar Inspetor no WhatsApp",
        "footer-rights": "Todos os direitos reservados."
    },
    en: {
        "nav-about": "About Us",
        "nav-services": "Services",
        "nav-certs": "Certifications",
        "nav-cta": "Request Survey",
        "hero-tagline": "Maritime Operational Excellence",
        "hero-title": "High-Precision Marine Surveys & IHM Compliance",
        "hero-desc": "Ensuring legal security, strict loss control, and international compliance for vessels, cargo, and bunker operations across major ports.",
        "btn-inspector": "Contact Technical Inspector",
        "btn-services": "View Services",
        "certs-title": "International Credentials & Certifications",
        "certs-subtitle": "High-level technical qualifications that position SWI in the global market.",
        "cert-dnv-title": "DNV GL Certification",
        "cert-dnv-desc": "<strong>HazMat Training LITE</strong>. Official technical qualification for the development and preparation of the Inventory of Hazardous Materials (IHM) in full compliance with the EU Ship Recycling Regulation.",
        "cert-ukata-title": "UKATA Certification",
        "cert-ukata-desc": "<strong>Asbestos Awareness</strong>. International specialization focused on the safe identification, mapping, and management of asbestos in marine structures, meeting Regulation 10 of the Control of Asbestos Regulations.",
        "services-title": "Specialized Surveying Services",
        "services-subtitle": "Analytical and impartial performance for complete mitigation of operational risks.",
        "cat1-title": "Fuel & Efficiency",
        "cat2-title": "Cargo & Vessel Integrity",
        "cat3-title": "Contracts & Environment",
        "about-title": "About SWI Sea World Inspection",
        "about-p1": "Under the technical direction of surveyor <strong>Vagner Ribeiro</strong>, SWI delivers extensive practical experience in marine surveys and port operational auditing. Our core commitment is to issue highly reliable, accurate, and legally impartial technical reports, protecting our clients' assets.",
        "about-p2": "With qualifications acquired from prestigious global maritime academies (such as DNV GL Headquarters in Hamburg and Singapore), we provide fast responses and services strictly focused on international regulatory compliance.",
        "footer-brand-desc": "Expert marine surveying solutions and environmental regulatory compliance.",
        "footer-contact-title": "Customer Service",
        "btn-whatsapp-footer": "Request Inspector via WhatsApp",
        "footer-rights": "All rights reserved."
    }
};

// CONTROLE DE IDIOMA
const langButtons = document.querySelectorAll('.lang-btn');

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    langButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    localStorage.setItem('swi-lang', lang);
}

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        setLanguage(button.getAttribute('data-lang'));
    });
});

// CONTROLE DE TEMA (CLARO/ESCURO)
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('swi-theme', newTheme);
    
    // Altera o ícone do botão
    const icon = themeToggle.querySelector('i');
    if (newTheme === 'light') {
        icon.className = 'fa-solid fa-moon';
    } else {
        icon.className = 'fa-solid fa-sun';
    }
});

// INICIALIZAÇÃO COM PREFERÊNCIAS SALVAS
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('swi-lang') || 'pt';
    const savedTheme = localStorage.getItem('swi-theme') || 'dark';
    
    setLanguage(savedLang);
    htmlElement.setAttribute('data-theme', savedTheme);
    
    const icon = themeToggle.querySelector('i');
    icon.className = savedTheme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
});