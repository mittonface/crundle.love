import { Client, LocalClient } from "tina-graphql-gateway";

export const createClient = () => {
  return process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT === "1"
    ? createLocalClient()
    : createCloudClient();
};

export const createCloudClient = () => {
  const organization = process.env.NEXT_PUBLIC_ORGANIZATION_NAME || "";
  const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "";

  const missingEnv: string[] = [];
  if (!organization) {
    missingEnv.push("NEXT_PUBLIC_ORGANIZATION_NAME");
  }
  if (!clientId) {
    missingEnv.push("NEXT_PUBLIC_TINA_CLIENT_ID");
  }

  if (missingEnv.length) {
    throw new Error(`The following environment variables are required when using the Tina Cloud Client:
     ${missingEnv.join(", ")}`);
  }

  return new Client({
    organizationId: organization,
    clientId,
    branch: "main",
    tokenStorage: "LOCAL_STORAGE",
  });
};

export const createLocalClient = () => {
  return new LocalClient();
};
