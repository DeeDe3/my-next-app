import type { NextPage } from "next";
import { useRouter } from "next/router";

const ClientsProject: NextPage = () => {
  const router = useRouter();

  function loadProjectHandler() {
    // *load data..
    router.push({
      pathname: "/clients/[id]/[clientId]",
      query: { id: "sean", clientId: "projectb" },
    });
  }

  return (
    <div>
      <h1>The Porjects of a {router.query.id} Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientsProject;
