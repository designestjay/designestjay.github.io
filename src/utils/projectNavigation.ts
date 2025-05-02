// Define the Project type
export type Project = {
  id: number
  title: string
  category: string
  image: string
  slug: string
  hidden?: boolean
}

// Project data
export const projects: Project[] = [
  {
    id: 1,
    title: 'World of Volvo',
    category: 'Interactive Media',
    image: '/images/assets/Home/WOV.png',
    slug: '/works/world-of-volvo',
  },
  {
    id: 2,
    title: 'LF Digital Derby',
    category: 'Advertisement',
    image: '/images/assets/Home/LFDigital FifaDerby.png',
    slug: '/works/lf-digital-derby',
  },
  {
    id: 3,
    title: 'Volvo Cars AR',
    category: 'Augmented Reality',
    image: '/images/assets/Home/VolvoAR.png',
    slug: '/works/volvo-cars-ar',
  },
  {
    id: 4,
    title: 'Future of Cockpit',
    category: 'Automotive HMI',
    image: '/images/assets/Home/Faurecia.png',
    slug: '/works/faurecia',
  },
  {
    id: 5,
    title: 'Weret Watch',
    category: 'Product Design',
    image: '/images/assets/Home/Weret.png',
    slug: '/works/weret-watch',
  },
  {
    id: 6,
    title: 'Google Chromebook UI',
    category: 'Interface Design',
    image: '/images/assets/Home/GoogleChromebook.png',
    slug: '/works/google-chromebook',
  },
  {
    id: 7,
    title: 'Gordon Murray Design',
    category: 'Automotive HMI',
    image: '/images/assets/Home/GMA.png',
    slug: '/works/gordon-murray',
    hidden: true
  },
];

/**
 * Get the current project index from the slug
 */
export const getCurrentProjectIndex = (currentSlug: string): number => {
  const slugParts = currentSlug.split('/');
  const projectSlug = slugParts[slugParts.length - 1];
  
  return projects.findIndex(project => {
    const projectSlugParts = project.slug.split('/');
    return projectSlugParts[projectSlugParts.length - 1] === projectSlug;
  });
};

/**
 * Get the previous project
 */
export const getPreviousProject = (currentSlug: string): Project | null => {
  const currentIndex = getCurrentProjectIndex(currentSlug);
  if (currentIndex === -1) return null;
  
  // If we're at the first project, return the last one
  const previousIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
  return projects[previousIndex];
};

/**
 * Get the next project
 */
export const getNextProject = (currentSlug: string): Project | null => {
  const currentIndex = getCurrentProjectIndex(currentSlug);
  if (currentIndex === -1) return null;
  
  // If we're at the last project, return the first one
  const nextIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
  return projects[nextIndex];
}; 