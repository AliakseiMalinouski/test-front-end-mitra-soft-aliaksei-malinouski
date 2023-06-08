import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Progress } from "../components/Progress";

const HomeLazy = lazy(() => import('../Pages/PageHome'));
const AboutLazy = lazy(() => import('../Pages/PageAbout'));
const UserDetailsLazy = lazy(() => import('../Pages/PageUserDetails'));

export const PageRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Suspense fallback={<Progress/>}>
                <HomeLazy/>
            </Suspense>}/>
            <Route path="/about" element={<Suspense fallback={<Progress/>}>
                <AboutLazy/>
            </Suspense>}/>
            <Route path="/details/:user" element={<Suspense fallback={<Progress/>}>
                <UserDetailsLazy/>
            </Suspense>}/>
        </Routes>
    )
}