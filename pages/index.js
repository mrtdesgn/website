
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RealEstateShowcase() {
  return (
    <div className="bg-gradient-to-br from-[#FDF6E3] to-[#E0F7FA] min-h-screen text-[#1E1E1E] font-sans">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#222]">
            MRT LUXURY INVESTMENTS
          </h1>
          <select className="border border-gray-300 rounded-md px-4 py-2 text-sm bg-white shadow">
            <option value="en">English</option>
            <option value="tr">Türkçe</option>
            <option value="fi">Suomi</option>
          </select>
        </div>

        <p className="text-xl text-gray-600 italic mb-8 text-center max-w-3xl mx-auto">
          "Transforming visionary opportunities and ideas into timeless real estate investments that offer value, comfort and prestige."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[{
            title: "High Best Residence – Dubai",
            price: "€398,000",
            features: "Smart Home Units | Premium Finish",
            desc: "2 Bedroom options with skyline views. Flexible payment plans. Ready Q1 2026.",
            link: "/projects/high-best-residence"
          }, {
            title: "Laguna Residence – Dubai",
            price: "AED 706,800",
            features: "AI-integrated | Lagoon Views",
            desc: "Tiffany & Cyan Towers with Burj Khalifa view. Delivery 2027. Early investment bonuses.",
            link: "/projects/laguna-residence"
          }, {
            title: "Twin Villas – Bodrum",
            price: "€850,000",
            features: "Sea View | Private Pool",
            desc: "Luxury twin villas in the heart of Bodrum. Separate or joint sales available. Exceptional ROI potential.",
            link: "/projects/twin-villas-bodrum"
          }, {
            title: "Ayvalık Luxury Villas",
            price: "€520,000",
            features: "Modern Architecture | Coastal Living",
            desc: "Modern detached villas near Ayvalık coast. Ideal for both summer living and investment.",
            link: "/projects/ayvalik-villas"
          }, {
            title: "Helsinki Kulosaari Project",
            price: "€11,000,000",
            features: "Sea View | Prime Location",
            desc: "Exclusive property in Helsinki's most prestigious district. Breathtaking views & privacy.",
            link: "/projects/helsinki-kulosaari"
          }, {
            title: "Costa Blanca ApartHotel – Spain",
            price: "€5,000,000",
            features: "28 Apartments | Beachfront",
            desc: "Fully operational hotel business with sale option per apartment. Restaurant & spa on-site.",
            link: "/projects/costa-blanca-aparthotel"
          }, {
            title: "Bosphorus Residence – Mudanya",
            price: "€690,000",
            features: "Scenic Views | Elegant Design",
            desc: "Located in Bursa's elite coastal area. Spacious apartments with a luxury lifestyle offering.",
            link: "/projects/bosphorus-residence"
          }].map((project, index) => (
            <Card key={index} className="hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden bg-white">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-[#2B2B2B] mb-1">{project.title}</h2>
                <p className="text-sm text-gray-600 mb-1">From <strong>{project.price}</strong> | {project.features}</p>
                <p className="text-sm text-gray-700 mb-4">{project.desc}</p>
                <Link href={project.link}>
                  <Button className="w-full bg-[#111827] hover:bg-[#1f2937] text-white">View Details</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-2xl font-semibold mb-3">Limited Investment Opportunities</h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Our team is ready to help you build your portfolio with smart, strategic property acquisitions.
          </p>
          <Link href="/contact">
            <Button className="px-8 py-3 text-lg bg-[#111827] hover:bg-[#1f2937] text-white">Contact MRT Team</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
