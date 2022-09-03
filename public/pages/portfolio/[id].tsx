import type { NextPage } from "next";
import { useRouter } from "next/router";

const PortfolioId: NextPage = () => {
  const router = useRouter();
  console.log(
    "🚀 ~ file: [id].tsx ~ line 7 ~ router.pathname",
    router.pathname
  );
  console.log("🚀 ~ file: [id].tsx ~ line 9 ~ router.query", router.query);

  return (
    <div>
      <h1>The Portfolio ID Page</h1>
    </div>
  );
};

export default PortfolioId;
