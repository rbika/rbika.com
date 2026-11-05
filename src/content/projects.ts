export type Project = {
  name: string;
  description: string;
  githubUrl?: string;
  websiteUrl?: string;
};

export const projects: Project[] = [
  {
    name: 'rbika.com',
    description: 'My personal website and blog (this website).',
    githubUrl: 'https://github.com/rbika/rbika.com',
    websiteUrl: 'https://rbika.com',
  },
  {
    name: 'Helios Theme',
    description:
      'A clean and modern light theme for VS Code, Cursor and VS Code-compatible editors.',
    githubUrl: 'https://github.com/rbika/helios-theme-vscode',
    websiteUrl:
      'https://marketplace.visualstudio.com/items?itemName=rbika.theme-helios',
  },
  {
    name: 'JSON CV Generator',
    description: 'CV generator from JSON file.',
    githubUrl: 'https://github.com/rbika/json-cv-generator',
    websiteUrl: 'https://json-cv-generator.vercel.app/',
  },
  {
    name: 'Focus Time',
    description:
      'A macOS menu bar app to help you stay focused and track your work. Includes a countdown timer, stopwatch, and Pomodoro mode.',
    githubUrl: 'https://github.com/rbika/focus-time',
    websiteUrl: 'https://github.com/rbika/focus-time',
  },
  {
    name: '2048 Game',
    description: 'A React implementation of the popular 2048 game.',
    githubUrl: 'https://github.com/rbika/2048',
    websiteUrl: 'https://rbika.github.io/2048/',
  },
];
