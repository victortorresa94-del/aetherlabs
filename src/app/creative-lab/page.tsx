// app/creative-lab/page.tsx
import CreativeLabClient from "./CreativeLabClient";
import styles from "./styles.module.css";

export const metadata = {
  title: "Creative Laboratory | AetherLabs",
  description:
    "Prueba gratuita: genera una imagen profesional a partir de tu foto de producto.",
};

export default function CreativeLabPage() {
  return (
    <main className={styles.clabPage}>
      <div className={styles.overlay} />

      <section className={styles.clabHeader}>
        <h1 className={styles.title}>
          <span className={styles.titleCreative}>Creative</span>{" "}
          <span className={styles.titleLab}>Laboratory</span>
        </h1>
        <p className={styles.desc}>
          Sube una foto de tu producto y pruébalo en nuestro laboratorio. Te mostraremos
          un resultado de muestra profesional. Después podrás reservar una sesión completa.
        </p>
      </section>

      <section className={styles.section}>
        <CreativeLabClient />
      </section>
    </main>
  );
}
