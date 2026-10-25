import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Code2,
  Github,
  Globe2,
  LayoutTemplate,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  ShoppingBag,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import { Header } from "./components/Header";
import { SectionHeading } from "./components/SectionHeading";
import { ProjectCard } from "./components/ProjectCard";
import { ContactForm } from "./components/ContactForm";
import { process, projects, services, site } from "./data/site";

const serviceIcons = {
  layout: LayoutTemplate,
  zap: Zap,
  shopping: ShoppingBag,
  wrench: Wrench,
} as const;

const App = () => {
  const whatsapp = /^\d{8,15}$/.test(site.publicWhatsapp)
    ? `https://wa.me/${site.publicWhatsapp}`
    : null;

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-backdrop" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <div className="availability">
                <span className="availability-dot" aria-hidden="true" />{" "}
                DESARROLLO WEB FREELANCE · PERÚ
              </div>
              <h1 id="hero-title">
                Tu idea merece una <em>web que destaque.</em>
              </h1>
              <p>
                Diseño y desarrollo páginas web modernas para emprendedores y
                negocios que quieren mostrar su trabajo, conectar con sus
                clientes y dar el siguiente paso en internet.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contacto">
                  Hablemos de tu proyecto{" "}
                  <ArrowUpRight size={19} aria-hidden="true" />
                </a>
                <a className="btn btn-outline" href="#proyectos">
                  Explorar proyectos <ArrowDown size={18} aria-hidden="true" />
                </a>
              </div>
              <div className="hero-meta">
                <span>
                  <CheckCircle2 size={17} aria-hidden="true" /> Diseño adaptable
                </span>
                <span>
                  <CheckCircle2 size={17} aria-hidden="true" /> Comunicación
                  clara
                </span>
                <span>
                  <CheckCircle2 size={17} aria-hidden="true" /> Soluciones a
                  medida
                </span>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />
              <div className="browser-window">
                <div className="browser-top">
                  <div className="browser-dots">
                    <i />
                    <i />
                    <i />
                  </div>
                  <span>tu-negocio.com</span>
                  <span className="browser-signal">
                    <Globe2 size={12} />
                  </span>
                </div>
                <div className="browser-content">
                  <span className="browser-pill">TU PRÓXIMO PROYECTO</span>
                  <span className="browser-headline">
                    Una presencia digital que inspira confianza.
                  </span>
                  <div className="browser-paragraph">
                    <i />
                    <i />
                    <i />
                  </div>
                  <span className="browser-action">
                    Conoce más <ArrowUpRight size={14} />
                  </span>
                  <div className="browser-tiles">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </div>
              <div className="floating-tag floating-tag-top">
                <MonitorSmartphone size={17} /> Responsive design
              </div>
              <div className="floating-tag floating-tag-bottom">
                <Code2 size={18} /> Código organizado
              </div>
            </div>
          </div>
          <div className="hero-scroll">
            <span>DESLIZA PARA EXPLORAR</span>
            <span className="hero-scroll-line" />
          </div>
        </section>

        <section className="statement" aria-label="Mi enfoque">
          <div className="container statement-inner">
            <span className="statement-icon">
              <Sparkles size={24} aria-hidden="true" />
            </span>
            <p>
              Una página web no debería ser solo bonita. Debe{" "}
              <strong>explicar lo que haces, facilitar el contacto</strong> y
              ofrecer una buena experiencia en cualquier dispositivo.
            </p>
          </div>
        </section>

        <section
          className="section services-section"
          id="servicios"
          aria-label="Servicios"
        >
          <div className="container">
            <SectionHeading
              eyebrow="QUÉ PUEDO HACER POR TI"
              title="Soluciones para dar vida a tus ideas."
              description="Desde una primera página para tu negocio hasta mejoras en una web existente. Busquemos una solución que tenga sentido para tu proyecto."
            />
            <div className="services-grid">
              {services.map((service) => {
                const Icon = serviceIcons[service.icon];
                return (
                  <article className="service-card" key={service.number}>
                    <div className="service-top">
                      <span className="service-icon">
                        <Icon size={27} strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <span className="service-number">{service.number}</span>
                    </div>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <div className="service-bottom">
                      <span>{service.detail}</span>
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="services-note">
              <span>
                <Check size={17} aria-hidden="true" /> Alcance y presupuesto
                definidos antes de empezar.
              </span>
              <a href="#contacto">
                Cuéntame tu idea <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section
          className="section projects-section"
          id="proyectos"
          aria-label="Proyectos"
        >
          <div className="container">
            <div className="projects-heading">
              <SectionHeading
                eyebrow="TRABAJO SELECCIONADO"
                title="Proyectos que hablan por sí mismos."
                description="Una selección de proyectos conceptuales, creativos y académicos donde aplico diseño y desarrollo web."
              />
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link github-heading-link"
              >
                Más en GitHub <Github size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  index={index}
                />
              ))}
            </div>
            <p className="projects-disclaimer">
              Estos proyectos son demostraciones de portafolio, no trabajos
              comerciales atribuidos a clientes reales. Las capturas e imágenes
              referenciales deben verificarse antes de su uso comercial.
            </p>
          </div>
        </section>

        <section
          className="section about-section"
          id="sobre-mi"
          aria-label="Sobre mí"
        >
          <div className="container about-grid">
            <div className="about-visual">
              <img
                src="/media/sobre-desarrollo.webp"
                alt="Espacio de trabajo de desarrollo web con varios monitores; imagen ilustrativa"
                loading="lazy"
                width="1000"
                height="566"
              />
              <div className="about-visual-label">
                <span className="about-visual-icon">
                  <Code2 size={20} aria-hidden="true" />
                </span>
                <span>
                  Siempre aprendiendo.
                  <br />
                  <strong>Siempre construyendo.</strong>
                </span>
              </div>
            </div>
            <div className="about-copy">
              <SectionHeading
                eyebrow="SOBRE MÍ"
                title="Detrás del código hay alguien que escucha."
              />
              <p>
                Soy <strong>Alex Cabana</strong>, desarrollador web freelance en
                Perú. Me interesa transformar ideas en experiencias digitales
                claras y funcionales, cuidando tanto el diseño como la forma en
                que las personas utilizan cada sitio.
              </p>
              <p>
                He desarrollado proyectos personales y académicos con
                tecnologías como React, TypeScript, JavaScript y Node.js. Hoy
                estoy enfocado en ayudar a emprendedores y pequeños negocios a
                construir una presencia digital sólida, sin complicaciones
                innecesarias.
              </p>
              <div className="about-values">
                <div>
                  <CheckCircle2 size={20} aria-hidden="true" />
                  <span>Escucho antes de proponer.</span>
                </div>
                <div>
                  <CheckCircle2 size={20} aria-hidden="true" />
                  <span>
                    Priorizo claridad, accesibilidad y adaptación móvil.
                  </span>
                </div>
                <div>
                  <CheckCircle2 size={20} aria-hidden="true" />
                  <span>Busco soluciones que puedas mantener y ampliar.</span>
                </div>
              </div>
              <div className="about-tools">
                <span>TECNOLOGÍAS CON LAS QUE TRABAJO</span>
                <div>
                  {[
                    "HTML & CSS",
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Node.js",
                    "Git",
                  ].map((x) => (
                    <span key={x}>{x}</span>
                  ))}
                </div>
              </div>
              <a className="text-link" href="#contacto">
                ¿Trabajamos juntos?{" "}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section
          className="section process-section"
          id="proceso"
          aria-label="Cómo trabajo"
        >
          <div className="container">
            <SectionHeading
              centered
              eyebrow="CÓMO TRABAJO"
              title="Un proceso sencillo, de principio a fin."
              description="Prefiero que sepas qué esperar en cada etapa del proyecto."
            />
            <div className="process-grid">
              {process.map((phase) => (
                <article className="process-step" key={phase.step}>
                  <span className="process-number">{phase.step}</span>
                  <h3>{phase.title}</h3>
                  <p>{phase.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section contact-section"
          id="contacto"
          aria-labelledby="contact-title"
        >
          <div className="container contact-grid">
            <div className="contact-info">
              <span className="eyebrow">
                <span className="eyebrow-line" aria-hidden="true" /> HABLEMOS
              </span>
              <h2 id="contact-title">
                ¿Tienes una idea?
                <br />
                <em>Hagámosla realidad.</em>
              </h2>
              <p>
                Cuéntame sobre tu negocio y qué necesitas. Revisaremos el
                alcance y las opciones antes de preparar una propuesta.
              </p>
              <div className="contact-benefits">
                <div>
                  <MessageCircle size={20} aria-hidden="true" />
                  <span>Conversemos sin compromiso</span>
                </div>
                <div>
                  <MapPin size={20} aria-hidden="true" />
                  <span>Trabajo remoto · Perú</span>
                </div>
                <div>
                  <CheckCircle2 size={20} aria-hidden="true" />
                  <span>Propuesta según tus necesidades</span>
                </div>
              </div>
              <div className="contact-alternatives">
                <span>PUEDES ENCONTRARME TAMBIÉN EN</span>
                <div>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={19} aria-hidden="true" /> GitHub{" "}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                  {site.publicEmail && (
                    <a href={`mailto:${site.publicEmail}`}>
                      <Mail size={19} aria-hidden="true" /> Correo{" "}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  )}
                  {whatsapp && (
                    <a
                      href={whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle size={19} aria-hidden="true" /> WhatsApp{" "}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="contact-form-panel">
              <div className="form-panel-header">
                <span>CUÉNTAME TU IDEA</span>
                <h3>Solicita una propuesta</h3>
                <p>Completa los datos y te responderé por correo.</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-main">
          <a className="footer-brand" href="#inicio">
            <img
              src="/media/marca.png"
              alt=""
              aria-hidden="true"
              width="37"
              height="37"
            />
            <span>
              <strong>Alex Cabana</strong>
              <small>Desarrollo web freelance</small>
            </span>
          </a>
          <p>
            Ideas claras. Diseño con propósito.
            <br />
            Webs pensadas para personas.
          </p>
          <div className="footer-links">
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Alex Cabana. Portafolio personal.
          </span>
          <div>
            <a href="/privacidad.html">Privacidad</a>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
