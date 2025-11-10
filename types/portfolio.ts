export type SocialLink = {
    name: string;
    url: string;
};

export type Project = {
    slug: string;
    title: string;
    description: string;
    tags?: string[];
    repoUrl?: string;
    demoUrl?: string;
    image?: string;
};

export type Experience = {
    company: string;
    role: string;
    start: string; // e.g. "2023-01"
    end?: string; // e.g. "2024-06" or undefined if current
    location?: string;
    description?: string;
    highlights?: string[];
    logo?: string;
};
