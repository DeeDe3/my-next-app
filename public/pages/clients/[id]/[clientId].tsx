import type { NextPage } from "next";
import { useRouter } from "next/router";

const ClientId: NextPage = () => {
  const router = useRouter();
  console.log(
    "🚀 ~ file: [clientId].tsx ~ line 8 ~ router.query",
    router.query
  );

  return (
    <div>
      <h1>The Selected Client roject Page</h1>
    </div>
  );
};

export default ClientId;
