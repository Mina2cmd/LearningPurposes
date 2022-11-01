import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({allowedRoles}:any) => {
    const {auth} = useAuth() as any;
    const location = useLocation();
    console.log("🚀 ~ file: RequireAuth.tsx ~ line 7 ~ RequireAuth ~ location", location)

    return(
        auth?.user.roles.find((role:string) => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/unauthorized" state={{ from:location}} replace/>
                : <Navigate to="/login" state={{ from:location}} replace/>
    )
}

export default RequireAuth;