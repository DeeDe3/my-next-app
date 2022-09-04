import type { NextPage } from "next";
import Link from "next/link";

const Clients: NextPage = () => {
  const clients = [
    { id: "sean", name: "Andrico Sean" },
    { id: "miller", name: "River Miller" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((clients) => (
          <li key={clients.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: {
                  id: clients.id,
                },
              }}
            >
              {clients.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
