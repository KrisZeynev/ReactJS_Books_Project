export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Book Haven</h2>
              <p className="text-gray-400 text-sm">Открий. Чети. Споделяй.</p>
            </div>
    
            <ul className="flex space-x-6 text-gray-300 text-sm">
              <li><a href="/about" className="hover:text-white">За нас</a></li>
              <li><a href="/contact" className="hover:text-white">Контакти</a></li>
              <li><a href="/terms" className="hover:text-white">Условия</a></li>
              <li><a href="/privacy" className="hover:text-white">Поверителност</a></li>
            </ul>
    
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
    
          <div className="text-center text-gray-500 text-xs mt-4">
            © {new Date().getFullYear()} Book Haven. Всички права запазени.
          </div>
        </footer>
      );
}