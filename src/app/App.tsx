import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { TaskPage } from "@pages/tasks/ui/TaskPage.tsx";

function App() {
  return (
    <MantineProvider>
      <TaskPage />
    </MantineProvider>
  );
}

export default App;
