import Head from 'next/head';
import React from 'react';

const MetaTags = ({title = '¡Crea un K-talogo personalizado para tu negocio!'}) => {
  return <Head>
       <title>{title}</title>
  </Head>;
};

export default MetaTags;