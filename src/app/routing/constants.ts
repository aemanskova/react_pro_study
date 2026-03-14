export const routes = {
  home: "/",
  tasks: "/tasks",
  forms: "/forms",
  ref: "/ref",
  wizard: "/wizard"
} as const;

export const sidebarLinks = [
  { label: "Tasks", to: routes.tasks },
  { label: "Forms", to: routes.forms },
  { label: "Ref", to: routes.ref },
  { label: "Wizard", to: routes.wizard }
];
