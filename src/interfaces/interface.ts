export interface ProjectCard {
    title: string,
    description: string,
    image: string, 
    link: string
}

export interface Skill {
    name: string;
    logo: string;
}

export interface Link {
    href: string;
    label: string;
}

export interface Hero {
    title: string;
    description: string;
    image: string;
}
export interface SidebarLink {
    name: string;
    href: string;
  }
  
  export interface SidebarState {
    isOpen: boolean;
  }
  
  export interface SidebarProps {
    links: SidebarLink[];
    state: SidebarState;
  }
  