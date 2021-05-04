import IndexPage, { PageQueryResponseType, query } from "..";

import React from "react";
import { useGraphqlForms } from "tina-graphql-gateway";

export default function AdminPage() {
  const [payload, isLoading] = useGraphqlForms<PageQueryResponseType>({
    query,
    variables: {},
  });

  return isLoading ? <p>Loading...</p> : <IndexPage {...payload} />;
}
