"use client";
import gsap from "gsap";
import { ScrollTrigger, SplitText, ScrollSmoother } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);

const GsapProvider = () => {
    return <div></div>;
};

export default GsapProvider;
