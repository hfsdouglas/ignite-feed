import './global.css'

import { Header } from "./components/header";
import { Post } from './components/post';
import { Sidebar } from './components/sidebar';

import styles from './app.module.css'

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