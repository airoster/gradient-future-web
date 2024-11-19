const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-800/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
          Welcome to the Future
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Experience the next generation of web design with our futuristic UI components
        </p>
        <button className="glass px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/20 transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;