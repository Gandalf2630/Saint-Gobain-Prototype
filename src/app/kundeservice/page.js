import { serviceData } from "../../data/data";
import ServiceCard  from "../../components/servicecard"
export default function Kundeservice() {
    return (
      <div className="bg-gray-100 min-h-screen p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Kundeservice Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData.map((service) => (
            <ServiceCard
              key={service.id}
              navn={service.navn}
              telefonNummer={service.telefonNummer}
              occupation={service.occupation}
              afdeling={service.afdeling}
              image={service.image[0]}
            />
          ))}
        </div>
      </div>
    );
  }