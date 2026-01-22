import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/src/content/site";
import { ArrowLeft, Bed, Bath, Square, ExternalLink, MapPin } from "lucide-react";

interface PropertyPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return siteConfig.properties.map((property) => ({
    id: property.id,
  }));
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;
  const property = siteConfig.properties.find((p) => p.id === id);

  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navigation links={siteConfig.navLinks} />
      
      <Container className="py-6 sm:py-8 lg:py-12">
        <Button
          asChild
          variant="ghost"
          className="mb-6 sm:mb-8 text-olive hover:text-olive/80 text-[15px] sm:text-base"
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        {/* Hero Image */}
        <div className="relative aspect-video lg:aspect-[21/9] mb-8 sm:mb-12 rounded-lg overflow-hidden">
          <Image
            src={property.heroImage}
            alt={property.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
        </div>

        {/* Property Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          <div className="lg:col-span-2">
            <SectionTitle className="mb-3 sm:mb-4 text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px]">{property.title}</SectionTitle>
            <p className="text-olive font-sans text-[18px] sm:text-[20px] md:text-[22px] mb-4 sm:mb-6">{property.location}</p>
            <p className="text-charcoal/80 leading-relaxed mb-6 sm:mb-8 font-sans text-[18px] sm:text-[20px] md:text-[22px]">
              {property.description}
            </p>

            {/* Specs */}
            <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 text-charcoal/70">
                <Bed className="h-5 w-5 text-olive" />
                <span className="font-sans">{property.beds} {property.beds === 1 ? 'Bed' : 'Beds'}</span>
              </div>
              <div className="flex items-center gap-2 text-charcoal/70">
                <Bath className="h-5 w-5 text-olive" />
                <span className="font-sans">{property.baths} {property.baths === 1 ? 'Bath' : 'Baths'}</span>
              </div>
              <div className="flex items-center gap-2 text-charcoal/70">
                <Square className="h-5 w-5 text-olive" />
                <span className="font-sans">{property.sqft} sqft</span>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="font-serif text-[24px] sm:text-[26px] md:text-[28px] font-medium text-charcoal mb-3 sm:mb-4">
                Amenities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {property.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-2 text-charcoal/80 font-sans text-[15px] sm:text-[17px]"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-olive flex-shrink-0" />
                    {amenity}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 bg-sage/30 p-4 sm:p-6 rounded-lg">
              <h3 className="font-serif text-[20px] sm:text-[22px] md:text-[24px] font-medium text-charcoal mb-3 sm:mb-4">
                Book Your Stay
              </h3>
              <p className="text-charcoal/70 mb-4 sm:mb-6 font-sans text-[15px] sm:text-[17px]">
                Check availability and book on your preferred platform.
              </p>
              <div className="flex flex-col gap-2 sm:gap-3">
                {property.bookingUrl && (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-olive text-olive hover:bg-olive hover:text-cream"
                  >
                    <a href={property.bookingUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Book on Booking.com
                    </a>
                  </Button>
                )}
                {property.airbnbUrl && (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-olive text-olive hover:bg-olive hover:text-cream"
                  >
                    <a href={property.airbnbUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Book on Airbnb
                    </a>
                  </Button>
                )}
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-olive text-olive hover:bg-olive hover:text-cream"
                >
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(property.location)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    View on Google Maps
                  </a>
                </Button>
                <Button asChild className="w-full bg-olive hover:bg-olive/90 text-cream mt-2">
                  <Link href="#contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        {property.images.length > 1 && (
          <div>
            <h3 className="font-serif text-[24px] sm:text-[26px] md:text-[28px] font-medium text-charcoal mb-4 sm:mb-6">
              Gallery
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {property.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg"
                >
                  <Image
                    src={image}
                    alt={`${property.name} - Image ${index + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
      <Footer />
    </div>
  );
}
