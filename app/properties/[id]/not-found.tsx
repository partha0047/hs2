import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <Container>
        <div className="text-center">
          <h1 className="font-serif text-4xl font-medium text-charcoal mb-4">
            Property Not Found
          </h1>
          <p className="text-charcoal/70 mb-8 font-sans">
            The property you're looking for doesn't exist.
          </p>
          <Button asChild className="bg-olive hover:bg-olive/90 text-cream">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
