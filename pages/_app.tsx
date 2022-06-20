import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <link rel="icon" href="/thaigen_logo.png" />
        <title>Thaigen Storage Management</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colors: {
            thaigenColor: ['#FBE9E7','#FFCCBC','#FFAB91','#FF8A65','#FF7043','#FF5722','#FF5733','#E64A19','#D84315','#BF360C',]
          },
          colorScheme: 'light',
          primaryColor: 'thaigenColor'
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}