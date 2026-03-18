import { App } from "@app/App";
import { FormsPage } from "@pages/forms";
import { HomePage } from "@pages/home";
import { NotFoundPage } from "@pages/not-found";
import { RefPage } from "@pages/ref";
import { TaskPage } from "@pages/tasks";
import { WizardPage } from "@pages/wizard";
import { Route, Routes } from "react-router";

import { routes } from "./constants";

export function Router() {
  return (
    <Routes>
      <Route path={routes.home} element={<App />}>
        <Route index element={<HomePage />} />
        <Route path={routes.tasks} element={<TaskPage />} />
        <Route path={routes.forms} element={<FormsPage />} />
        <Route path={routes.ref} element={<RefPage />} />
        <Route path={routes.wizard} element={<WizardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
