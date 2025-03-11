import React, { useState } from 'react';
import { Heart, Phone, MessageCircle, Users, BookOpen, ArrowRight, Mail, Star, Coffee, Brain, Smile, Sparkles } from 'lucide-react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  const handleResourceClick = (title: string, content: string) => {
    setModalContent({ title, content });
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 animate-gradient">
      {/* Navbar com Logo */}
      <nav className="fixed w-full z-50 glass-effect">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Heart className="w-8 h-8 text-purple-600 animate-pulse-slow" />
                <Sparkles className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="text-2xl font-bold logo-text">ApoioEmocional</span>
            </div>
            <div className="flex gap-6">
              <a href="#recursos" className="text-gray-600 hover:text-purple-600 transition-colors">Recursos</a>
              <a href="#mentoria" className="text-gray-600 hover:text-purple-600 transition-colors">Mentoria</a>
              <a href="#contato" className="text-gray-600 hover:text-purple-600 transition-colors">Contato</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Seção Hero */}
      <header className="px-4 pt-32 pb-24 max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 logo-text">
            Você Não Está Sozinho
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Um espaço seguro para encontrar apoio, compreensão e recursos para sua jornada de saúde mental
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => window.location.href = 'tel:188'} 
              className="btn-primary animate-pulse-slow px-8 py-4">
              Preciso de Ajuda Agora
            </button>
            <button 
              onClick={() => document.getElementById('recursos')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary px-8 py-4">
              Saiba Mais
            </button>
          </div>
        </div>
      </header>

      {/* Imagens Interativas */}
      <section className="py-16 bg-gradient-to-br from-purple-500/5 via-indigo-500/5 to-pink-500/5">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 logo-text">Como Ajudar o Próximo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Escute Ativamente",
                description: "Às vezes, tudo que alguém precisa é ser ouvido sem julgamentos"
              },
              {
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Ofereça Suporte",
                description: "Pequenos gestos de apoio podem fazer uma grande diferença"
              },
              {
                image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Pratique Empatia",
                description: "Coloque-se no lugar do outro para entender melhor seus sentimentos"
              }
            ].map((item, index) => (
              <div key={index} className="card-hover rounded-xl overflow-hidden glass-effect">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-purple-600">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorias */}
      <section id="mentoria" className="py-16 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-indigo-500/5 animate-gradient">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 logo-text">Programa de Mentoria</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-12 h-12 text-yellow-500" />,
                title: "Mentoria Básica",
                features: ["Treinamento em escuta ativa", "Técnicas de apoio emocional", "Certificado de participação"],
                price: "Gratuito"
              },
              {
                icon: <Coffee className="w-12 h-12 text-purple-500" />,
                title: "Mentoria Avançada",
                features: ["Workshops mensais", "Supervisão especializada", "Material exclusivo"],
                price: "R$ 97/mês"
              },
              {
                icon: <Brain className="w-12 h-12 text-blue-500" />,
                title: "Mentoria Profissional",
                features: ["Formação completa", "Suporte individual", "Práticas supervisionadas"],
                price: "R$ 197/mês"
              }
            ].map((plan, index) => (
              <div key={index} className="mentor-card glass-effect">
                <div className="flex justify-center mb-4 animate-float">{plan.icon}</div>
                <h3 className="text-xl font-bold text-center mb-4 text-purple-600">{plan.title}</h3>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Smile className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-2xl font-bold text-center text-purple-600 mb-4">{plan.price}</p>
                <button 
                  onClick={() => handleResourceClick(plan.title, 'Entre em contato para mais informações sobre este programa de mentoria.')}
                  className="w-full btn-primary">
                  Saiba Mais
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section id="recursos" className="py-16 bg-gradient-to-br from-indigo-500/5 via-pink-500/5 to-purple-500/5 animate-gradient">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 logo-text">Recursos para Você</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Guia de Meditação",
                description: "Técnicas simples para acalmar a mente",
                content: "Aprenda técnicas de meditação mindfulness para reduzir ansiedade e estresse."
              },
              {
                title: "Exercícios de Respiração",
                description: "Aprenda a controlar a ansiedade",
                content: "Técnicas de respiração diafragmática e exercícios para momentos de ansiedade."
              },
              {
                title: "Diário de Gratidão",
                description: "Cultive pensamentos positivos",
                content: "Como manter um diário de gratidão e seus benefícios para a saúde mental."
              },
              {
                title: "Técnicas de Relaxamento",
                description: "Reduza o estresse diário",
                content: "Exercícios práticos de relaxamento muscular progressivo e visualização."
              }
            ].map((resource, index) => (
              <div 
                key={index} 
                onClick={() => handleResourceClick(resource.title, resource.content)}
                className="glass-effect p-6 rounded-xl hover:shadow-lg transition-all cursor-pointer card-hover">
                <h3 className="text-xl font-semibold mb-2 text-purple-600">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center text-purple-600 font-medium">
                  Saiba mais
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full animate-fade-in glass-effect">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">{modalContent.title}</h3>
            <p className="text-gray-600 mb-6">{modalContent.content}</p>
            <button 
              onClick={() => setShowModal(false)}
              className="btn-primary">
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Rodapé */}
      <footer id="contato" className="bg-gradient-to-br from-gray-900 to-purple-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-purple-400 animate-pulse" />
                <span className="text-xl font-bold logo-text">ApoioEmocional</span>
              </div>
              <p className="text-gray-300">
                Dedicados a apoiar sua jornada de saúde mental com compaixão e compreensão.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-300">Contato</h3>
              <div className="flex items-center gap-2 mb-2 hover:text-purple-400 transition-colors">
                <Phone className="w-4 h-4" />
                <a href="tel:188">188 (CVV)</a>
              </div>
              <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <Mail className="w-4 h-4" />
                <a href="mailto:contato@apoioemocional.org">contato@apoioemocional.org</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-300">Redes Sociais</h3>
              <div className="flex gap-4">
                <MessageCircle className="w-6 h-6 cursor-pointer hover:text-purple-400 transition-colors" />
                <Users className="w-6 h-6 cursor-pointer hover:text-purple-400 transition-colors" />
                <Mail className="w-6 h-6 cursor-pointer hover:text-purple-400 transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© Feito para ajudar Vocês</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;