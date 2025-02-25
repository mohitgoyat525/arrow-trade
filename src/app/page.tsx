import Hero from "@/components/blog/Hero";
import UsdJp from "@/components/blog/UsdJp";
import Header from "@/components/common/Header";
import Image from "next/image";
import BlogCards from "@/components/blog/BlogCards";
import LatestArticles from "@/components/blog/LatestArticles";
import Footer from "@/components/common/Footer";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <UsdJp />
        <Hero />
        <BlogCards />
        <LatestArticles />
        <Footer />
      </Suspense>
    </>
  );
}
