import styles from "../styles/App.module.css";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div className={styles.app}>
      <AppRoutes />
    </div>
  );
}

export default App;
