import type { Metadata } from "next";
import { HomeView } from "./HomeView";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function HomePage() {
  return <HomeView />;
}
