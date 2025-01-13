import { produktData } from "../../data/data"
import ProductCard from "../../components/productcard"
export default function Productpage(){
    
    return(
        <div>
              <header className="bg-black text-yellow-400 p-6 text-center">
        <h1 className="text-4xl font-bold uppercase">Velkommen til vores produkter</h1>
        <p className="text-lg mt-2">Din ekspert i isoleringsløsninger</p>
      </header>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {produktData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
        </div>
    )
}