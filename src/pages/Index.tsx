import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { ArrowRight, Clock, Star, Utensils } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1 bg-brand-100 text-brand-600 rounded-full text-sm font-medium mb-4">
              Entrega Rápida e Segura
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Comida Caseira no
              <span className="text-brand-500"> Conforto da sua Casa</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Desfrute do sabor autêntico da comida caseira, preparada com ingredientes frescos
              e entregue diretamente na sua porta.
            </p>
            <a
              href="#menu"
              className="inline-flex items-center px-6 py-3 bg-brand-500 text-white rounded-full hover:bg-brand-600 transition-colors duration-300"
            >
              Ver Cardápio
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Feature
              icon={<Clock className="h-8 w-8" />}
              title="Entrega Rápida"
              description="Seu pedido entregue em até 45 minutos"
            />
            <Feature
              icon={<Utensils className="h-8 w-8" />}
              title="Comida Fresca"
              description="Preparada na hora do seu pedido"
            />
            <Feature
              icon={<Star className="h-8 w-8" />}
              title="Qualidade Premium"
              description="Ingredientes selecionados com cuidado"
            />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-brand-100 text-brand-600 rounded-full text-sm font-medium mb-4">
              Nosso Cardápio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Escolha sua Marmita Favorita
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MenuItem
              title="Marmitex Tradicional"
              price="R$ 25,90"
              description="Arroz, feijão, bife acebolado, batata frita e salada"
              image="/lovable-uploads/63627da4-0c56-4bae-ad6e-a6aa66ab3868.png"
            />
            <MenuItem
              title="Marmitex Fit"
              price="R$ 28,90"
              description="Arroz integral, frango grelhado, legumes no vapor"
              image="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80"
            />
            <MenuItem
              title="Marmitex Executiva"
              price="R$ 32,90"
              description="Arroz, filé mignon, legumes salteados e purê de batata"
              image="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-brand-100 text-brand-600 rounded-full text-sm font-medium mb-4">
              Contato
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Faça seu Pedido
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600">
                Telefone: (11) 99999-9999
              </p>
              <p className="text-lg text-gray-600">
                WhatsApp: (11) 99999-9999
              </p>
              <p className="text-lg text-gray-600">
                Horário: Segunda a Domingo, das 11h às 22h
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Marmitex Express</h3>
            <p className="text-gray-400 mb-8">Sabor e qualidade em cada entrega</p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Marmitex Express. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Feature = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="flex flex-col items-center text-center p-6"
  >
    <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center text-brand-500 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const MenuItem = ({
  title,
  price,
  description,
  image,
}: {
  title: string;
  price: string;
  description: string;
  image: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
  >
    <div className="aspect-w-16 aspect-h-9">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <span className="text-brand-500 font-semibold">{price}</span>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

export default Index;
