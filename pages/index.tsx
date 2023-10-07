import React from 'react';
import Head from 'next/head';
import styles from "@/styles/Homepage.module.css";
import Slider from './components/Slider';
import ListProduct from './components/ListProduct';
import Tutorial from './components/Tutorial';
const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to VTMK</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link href='https://fonts.googleapis.com/css?family=MuseoModerno' rel='stylesheet'>
        </link>
        <link href='https://fonts.googleapis.com/css?family=Saira Stencil One' rel='stylesheet'>
        </link>
        <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
        </link>
        <link href='https://fonts.googleapis.com/css?family=Mali' rel='stylesheet'>
        </link>
      </Head>
      <Slider />

      <ListProduct />
      <Tutorial />
      HomePage
    </div>
  )
}
export default Home;