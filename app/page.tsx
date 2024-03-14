import './home.css';
import NavBar from './components/home/NavBar';
import { Metadata } from 'next';
import Intro from './components/home/Intro';
import Divider from './components/home/Divider';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '首页 - wangsz12',
};

export default function Home() {
  return (
    <>
      <NavBar />
      <Intro />
      <Divider>Gallery</Divider>
      <Divider>Blogs</Divider>
      <Divider />
    </>
  );
}