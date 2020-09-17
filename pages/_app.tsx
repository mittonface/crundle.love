import "../css/main.css";
import "../css/bootstrap.css";
import "../css/magnific-popup.css";
import "../css/fonts.css";

import { GithubClient, TinacmsGithubProvider } from "react-tinacms-github";
import { TinaCMS, TinaProvider } from "tinacms";

import App from "next/app";

export default class Site extends App {
  cms: TinaCMS;

  constructor(props: any) {
    super(props);

    this.cms = new TinaCMS({
      enabled: !!props.pageProps.preview,
      apis: {
        github: new GithubClient({
          proxy: "/api/proxy-github",
          authCallbackRoute: "/api/create-github-access-token",
          clientId: process.env.GITHUB_CLIENT_ID || "",
          baseRepoFullName: process.env.REPO_FULL_NAME || "",
        }),
      },
      sidebar: props.pageProps.preview,
      toolbar: props.pageProps.preview,
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <TinaProvider cms={this.cms}>
        <TinacmsGithubProvider
          onLogin={onLogin}
          onLogout={onLogout}
          error={pageProps.error}
        >
          <Component {...pageProps} />
        </TinacmsGithubProvider>
      </TinaProvider>
    );
  }
}

const onLogin = async () => {
  const token = localStorage.getItem("tinacms-github-token") || null;
  const headers = new Headers();

  if (token) {
    headers.append("Authorization", "Bearer " + token);
  }

  const resp = await fetch(`/api/preview`, { headers: headers });
  const data = await resp.json();

  if (resp.status == 200) window.location.href = window.location.pathname;
  else throw new Error(data.message);
};

const onLogout = () => {
  return fetch(`/api/reset-preview`).then(() => {
    window.location.reload();
  });
};
