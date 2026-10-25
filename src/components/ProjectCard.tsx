import { ArrowUpRight, CakeSlice, Github, MonitorPlay } from "lucide-react";
import type { Project } from "../data/site";

type Props = { project: Project; index: number };

/** Los enlaces externos se mantienen en src/data/site.ts para evitar destinos ficticios. */
export const ProjectCard = ({ project, index }: Props) => (
  <article className={`project-card project-${project.visual}`}>
    <div className="project-visual">
      {project.image ? (
        <img
          src={project.image}
          alt={project.imageAlt ?? ""}
          loading="lazy"
          width="800"
          height="480"
        />
      ) : project.visual === "bakery" ? (
        <div className="bakery-art" role="img" aria-label="Ilustración tipográfica de SweetBakery">
          <CakeSlice size={54} strokeWidth={1.5} aria-hidden="true" />
          <strong>SweetBakery</strong>
          <span>Hecho para endulzar tus momentos</span>
        </div>
      ) : (
        <div
          className="screenora-art"
          aria-label="Arte tipográfico de Screenora"
          role="img"
        >
          <div className="screenora-top">
            <span className="screenora-symbol">S</span>
            <span>SCREENORA</span>
          </div>
          <span className="screenora-display">Historias para descubrir.</span>
          <div className="screenora-faux-cards" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      )}
      {project.visual === "burger" && (
        <span className="visual-brand visual-brand-burger" aria-hidden="true">
          ELDER<span>BURGER</span>
        </span>
      )}
      <span className="project-number">0{index + 1}</span>
    </div>
    <div className="project-info">
      <div className="project-meta">
        <span>{project.type}</span>
        <span>{project.year}</span>
      </div>
      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-tags" aria-label="Tecnologías utilizadas">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="project-actions">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Ver proyecto <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        )}
        {project.repository && (
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="project-code"
            aria-label={`Ver repositorio de ${project.name}`}
          >
            <Github size={18} aria-hidden="true" />
            <span>Código</span>
          </a>
        )}
        {!project.demo && (
          <span className="project-unavailable">
            <MonitorPlay size={16} aria-hidden="true" /> Demostración no
            disponible
          </span>
        )}
      </div>
      {project.note && <p className="project-note">{project.note}</p>}
    </div>
  </article>
);
