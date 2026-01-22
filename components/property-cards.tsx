"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Property } from "@/src/content/site";
import { Card } from "@/components/ui/card";
import { Container } from "./container";
import { Bed, Bath, Square, ArrowRight, ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyCardsProps {
  properties: Property[];
}

export function PropertyCards({ properties }: PropertyCardsProps) {
  return (
    <section className="bg-cream py-16 lg:py-24" id="rooms">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[44px] lg:text-[54px] font-medium text-charcoal mb-4 px-4 sm:px-0">
            Our Homes
          </h2>
          <p className="text-charcoal/70 text-[18px] sm:text-[20px] md:text-[22px] font-sans max-w-2xl mx-auto px-4 sm:px-0">
            Discover our carefully curated collection of premium homes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="overflow-hidden bg-cream border-sage/30 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                <Link 
                  href={`/properties/${property.id}`}
                  prefetch={true}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={property.heroImage}
                      alt={property.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading={index < 3 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
                  
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <Link 
                    href={`/properties/${property.id}`}
                    prefetch={true}
                  >
                    <h3 className="font-serif text-[22px] sm:text-[26px] md:text-[28px] font-medium text-charcoal mb-2 group-hover:text-olive transition-colors">
                      {property.title}
                    </h3>
                  </Link>
                  <p className="text-olive font-sans text-[15px] sm:text-[17px] mb-3 sm:mb-4">{property.location}</p>
                  
                  <p className="text-charcoal/70 leading-relaxed mb-4 sm:mb-6 font-sans text-[15px] sm:text-[17px] flex-1">
                    {property.description}
                  </p>

                  <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 text-[15px] sm:text-[17px] text-charcoal/60">
                    <div className="flex items-center gap-1.5">
                      <Bed className="h-4 w-4 text-olive" />
                      <span className="font-sans">{property.beds} {property.beds === 1 ? 'Bed' : 'Beds'}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bath className="h-4 w-4 text-olive" />
                      <span className="font-sans">{property.baths} {property.baths === 1 ? 'Bath' : 'Baths'}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Square className="h-4 w-4 text-olive" />
                      <span className="font-sans">{property.sqft} sqft</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  {property.amenities && property.amenities.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-serif text-[15px] sm:text-[17px] font-medium text-charcoal mb-2">Key Amenities</h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {property.amenities.slice(0, 4).map((amenity) => (
                          <span
                            key={amenity}
                            className="text-[13px] sm:text-[14px] md:text-[16px] px-2 py-1 bg-sage/30 text-charcoal/70 rounded-md font-sans"
                          >
                            {amenity}
                          </span>
                        ))}
                        {property.amenities.length > 4 && (
                          <span className="text-[13px] sm:text-[14px] md:text-[16px] px-2 py-1 bg-sage/30 text-charcoal/70 rounded-md font-sans">
                            +{property.amenities.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col gap-2">
                    <Link 
                      href={`/properties/${property.id}`}
                      prefetch={true}
                      className="flex items-center text-olive font-sans text-[15px] sm:text-[17px] font-medium group-hover:gap-2 transition-all mb-2"
                    >
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                    
                    <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-sage/30">
                      {property.bookingUrl && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1 text-[13px] sm:text-[14px] md:text-[16px] border-olive/30 text-olive hover:bg-olive hover:text-cream"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a href={property.bookingUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Booking.com
                          </a>
                        </Button>
                      )}
                      {property.airbnbUrl && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1 text-[13px] sm:text-[14px] md:text-[16px] border-olive/30 text-olive hover:bg-olive hover:text-cream"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a href={property.airbnbUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Airbnb
                          </a>
                        </Button>
                      )}
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 text-[13px] sm:text-[14px] md:text-[16px] border-olive/30 text-olive hover:bg-olive hover:text-cream"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a 
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(property.location)}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center justify-center"
                        >
                          <MapPin className="h-3 w-3 mr-1" />
                          View on Map
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
