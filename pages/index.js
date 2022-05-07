const styles = {
  container: `h-full`
}

import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
    </div>
  )
}
