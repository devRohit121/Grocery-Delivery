import { Navigate, Outlet } from "react-router-dom"
import { userAuth } from "../context/authContext"
import Loading from "./Loading";

const ProtectedRoute = () => {
  const {user, loading} = userAuth();

  if (loading) return <Loading />
  if (!user) return <Navigate to='/login' replace />
  return (
    <Outlet />
  )
}

export default ProtectedRoute
