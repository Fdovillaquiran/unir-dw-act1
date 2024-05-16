import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, MoviesPage, ReservaPage } from "../pages"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="movie" element={<MoviesPage />} />
            <Route path="movie" element={<ReservaPage />} />
            <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
    </>
  )
}
