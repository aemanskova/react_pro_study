export const routes = {
  home: "/",
  tasks: "/tasks",
  forms: "/forms",
  wizard: "/wizard"
} as const;

export const sidebarLinks = [
  { label: "Tasks", to: routes.tasks },
  { label: "Forms", to: routes.forms },
  { label: "Wizard", to: routes.wizard }
];
