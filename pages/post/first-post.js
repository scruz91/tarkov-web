import Head from 'next/head';
import Link from 'next/link';
//import Image from 'next/image'; 
//import Script from 'next/script'; para cargar JS externos
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Page2</title>
      </Head>
        {/*<Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />*/}
    </Layout>    
  );
}