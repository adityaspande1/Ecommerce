import Image from "next/image";
import { Music2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold">About Melody Market</h1>
          <div className="mt-6 space-y-4">
            <p className="text-muted-foreground">
              Founded in 2020, Melody Market has grown from a small local music shop to one of the most trusted names in musical instruments and equipment. Our passion for music drives everything we do.
            </p>
            <p className="text-muted-foreground">
              We believe that music has the power to transform lives, and we're dedicated to helping musicians of all levels find the perfect instruments and equipment to express themselves.
            </p>
            <div className="mt-8 flex items-center space-x-4">
              <Music2 className="h-12 w-12 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide musicians with the highest quality instruments and equipment, backed by exceptional service and expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] overflow-hidden rounded-lg md:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&auto=format&fit=crop"
            alt="Music store interior"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}