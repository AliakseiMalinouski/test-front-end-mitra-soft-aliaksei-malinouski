import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Progress } from "../components/Progress";

const HomeLazy = lazy(() => import('../Pages/PageHome'));
const AboutLazy = lazy(() => import('../Pages/PageAbout'));
const PostDetailsLazy = lazy(() => import('../Pages/PagePostDetails'));

export const PageRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Suspense fallback={<Progress/>}>
                <HomeLazy/>
            </Suspense>}/>
            <Route path="/about" element={<Suspense fallback={<Progress/>}>
                <AboutLazy/>
            </Suspense>}/>
            <Route path="/details/:postid" element={<Suspense fallback={<Progress/>}>
                <PostDetailsLazy/>
            </Suspense>}/>
        </Routes>
    )
}