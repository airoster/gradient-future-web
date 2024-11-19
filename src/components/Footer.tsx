const Footer = () => {
  return (
    <footer className="glass mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Security</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400">
            © 2024 FutureUI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;