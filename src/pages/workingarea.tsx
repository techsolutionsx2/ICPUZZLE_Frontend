import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
//components
import { Workingarea } from "views/WorkingArea";

//Styled Component
import { WorkLayout } from "styles/Styled";

//loading
import { Loading } from "components/Loading";

const WorkPage: NextPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <WorkLayout>
          <Workingarea />
        </WorkLayout>
      )}
    </>
  );
};

export default WorkPage;
