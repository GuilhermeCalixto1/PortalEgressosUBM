import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ForumPage from "./pages/ForumPage";
import EstagiosPage from "./pages/EstagiosPage";
import CursosPage from "./pages/CursosPage";

export type Page = "login" | "home" | "forum" | "estagios" | "cursos";

export default function App() {
  const [page, setPage] = useState<Page>("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setPage("home");
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen" style={{ background: "#f0f4f9" }}>
      {page === "home" && <HomePage onNavigate={setPage} />}
      {page === "forum" && <ForumPage onNavigate={setPage} />}
      {page === "estagios" && <EstagiosPage onNavigate={setPage} />}
      {page === "cursos" && <CursosPage onNavigate={setPage} />}
    </div>
  );
}
