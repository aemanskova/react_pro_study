import { App } from "@app/App";
import { LoginPage } from "@pages/auth/ui/LoginPage.tsx";
import { FormsPage } from "@pages/forms";
import { HomePage } from "@pages/home";
import { NotFoundPage } from "@pages/not-found";
import { ProtectedProfilePage } from "@pages/profile/ui/ProfilePage.tsx";
import { RefPage } from "@pages/ref";
import { ProtectedTaskPage } from "@pages/tasks";
import { WizardPage } from "@pages/wizard";
import { routes } from "@shared/config/routes.ts";
import { Route, Routes } from "react-router";

export function Router() {
  return (
    <Routes>
      <Route path={routes.home} element={<App />}>
        <Route index element={<HomePage />} />
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.profile} element={<ProtectedProfilePage />} />
        <Route path={routes.tasks} element={<ProtectedTaskPage />} />
        <Route path={routes.forms} element={<FormsPage />} />
        <Route path={routes.ref} element={<RefPage />} />
        <Route path={routes.wizard} element={<WizardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
