import { lazy, Suspense, useMemo } from "react";
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider, Navigate } from "react-router";
import routeNames from "../constants/routeNames";
import { MainLayout } from "../layouts/MainLayout";

const Dashboard = lazy(() =>
    import("../components/pages/Dashboard").then((module) => ({ default: module.Dashboard }))
)
const Login = lazy(() =>
    import("../components/pages/Login").then((module) => ({ default: module.Login }))
)

const Routes = () => {
    const router = useMemo(() => {
        return createBrowserRouter(
            createRoutesFromElements(
                <>
                    <Route errorElement={<>Error 404, page not found</>} path={routeNames.login} element={<Login/>} />

                    <Route element={<MainLayout/>} errorElement={<>Error 404, page not found</>}>
                        <Route index element={<Dashboard/>} />
                        <Route path={routeNames.dashboard} element={<Dashboard/>} />
                    </Route>

                    <Route path="*" element={<>Error 404, page not found</>} />
                </>
            )
        )
    }, [])

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} />
        </Suspense>
    )
}

export { Routes };

