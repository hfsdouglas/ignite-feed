import './global.css'
import { Header } from "./components/header";

import styles from './app.module.css'

import { Post } from './components/post';
import { Sidebar } from './components/sidebar';

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}