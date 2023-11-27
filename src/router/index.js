import { createWebHistory, createRouter } from "vue-router";


import MainComp from "../components/Show/MainComp";
import SelfIntroComp from "../components/Show/SelfIntroComp";
import ProjectComp from "../components/Show/ProjectComp";
import ObjectComp from "../components/Show/ObjectComp";
const routes = [
    {
        path: "/Main",
        component: MainComp,
    },
    {
        path: "/SelfIntro",
        component: SelfIntroComp,
    },
    {
        path: "/Project",
        component: ProjectComp,
    },
    {
        path: "/Object",
        component: ObjectComp,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
