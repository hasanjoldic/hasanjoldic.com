import type { AppContext, AppProps } from "next/app";
import Head from "next/head";

import styled from "@mui/material/styles/styled";
import CssBaseline from "@mui/material/CssBaseline";
import type { PaletteMode } from "@mui/material";

import { ThemeProvider } from "@hasan.joldic/theme";
import { Page } from "@hasan.joldic/components";

import { useRouter } from "next/router";

import "../styles/globals.css";

const Content = styled("div")(({ theme }) => ({
  maxWidth: theme.breakpoints.values.lg,
}));

const pages: {
  path: string;
  label: string;
}[] = [
  {
    path: "https://notes.hasanjoldic.com",
    label: "Notes",
  },
  {
    path: "https://static.hasanjoldic.com/hasanjoldic.com/HasanJoldic_CV.pdf",
    label: "Resume",
  },
];

interface Props extends AppProps {
  paletteMode: PaletteMode;
}

const App = ({ Component, pageProps, paletteMode }: Props) => {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <Head>
        <title>Hasan Joldic</title>
      </Head>
      <ThemeProvider themeOptions={{}} paletteMode={paletteMode}>
        <CssBaseline />
        <Page pages={pages} onNavigate={handleNavigate}>
          <Content>
            <Component {...pageProps} />
          </Content>
        </Page>
      </ThemeProvider>
    </>
  );
};

App.getInitialProps = async (context: AppContext) => {
  const paletteMode =
    getCookie("paletteMode", context.ctx.req?.headers.cookie) || "light";

  return { paletteMode } as unknown as Props;
};

export default App;

function getCookie(name: string, cookie?: string) {
  return cookie
    ?.split(";")
    ?.find((row) => row.includes(name))
    ?.split("=")[1];
}