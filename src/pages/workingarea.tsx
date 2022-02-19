import type { NextPage } from "next";

//components
import { Workingarea } from "views/WorkingArea";

//Styled Component
import { WorkLayout } from "styles/Styled";

const WorkPage: NextPage = () => {
  return (
    <WorkLayout>
      <Workingarea />
    </WorkLayout>
  );
};

export default WorkPage;
