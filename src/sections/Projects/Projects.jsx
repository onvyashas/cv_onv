import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/space.png';
import freshBurger from '../../assets/vrp.png';
import hipsster from '../../assets/tot.png';
import fitLift from '../../assets/cnsl.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://onvsp.vercel.app/"
          h3="Cosmos"
          p="Explore Beyond"
        />
        <ProjectCard
          src={freshBurger}
          link="https://onvvr.vercel.app/"
          h3="Immersi"
          p="Future Ready"
        />
        <ProjectCard
          src={hipsster}
          link="https://onvtat.vercel.app/"
          h3="Wanderly"
          p="Book Escape"
        />
        <ProjectCard
          src={fitLift}
          link="https://yavru.vercel.app/"
          h3="PixLock"
          p="Encrypt in Images"
        />
      </div>
    </section>
  );
}

export default Projects;
