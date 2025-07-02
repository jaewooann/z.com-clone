import Home from "@/app/(afterLogin)/home/page";

interface PhotoPageProps {
  username: string;
  id: string;
  photoId: string;
}

export default function PhotoPage({ params }: PhotoPageProps) {
  return <Home />;
}
