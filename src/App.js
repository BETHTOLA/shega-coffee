
import './App.css';

export default function ShegaCoffee() {
  return (
    <div className="bg-green-50 min-h-screen text-gray-800">
      <header className="bg-white shadow-md p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-800">Shega Coffee</h1>
        <nav className="space-x-4">
          <a href="#about" className="text-green-700 hover:underline">About</a>
          <a href="#products" className="text-green-700 hover:underline">Products</a>
          <a href="#gallery" className="text-green-700 hover:underline">Gallery</a>
          <a href="#contact" className="text-green-700 hover:underline">Contact</a>
        </nav>
      </header>

      <section className="text-center py-20 bg-green-100">
        <h2 className="text-4xl font-bold text-green-900 mb-4">Elevate Your Day With Shega Coffee</h2>
        <p className="text-lg max-w-xl mx-auto">Premium Ethiopian coffee crafted to awaken your senses. Explore our bold flavors, smooth blends, and sustainable origins.</p>
        <button className="mt-6 px-6 py-3 bg-green-800 text-white rounded-xl shadow hover:bg-green-700">Shop Now</button>
      </section>

      <section id="about" className="px-6 py-16 max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold text-green-800 mb-4">About Shega Coffee</h3>
        <p>
          Founded with a passion for authentic Ethiopian coffee, Shega Coffee brings the finest beans from the highlands to your cup. We prioritize sustainability, fair trade, and bold taste.
        </p>
      </section>

      <section id="products" className="px-6 py-16 bg-white">
        <h3 className="text-3xl font-semibold text-green-800 mb-10 text-center">Our Signature Coffees</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 shadow rounded-xl bg-green-50">
            <h4 className="text-xl font-bold text-green-900">Shega Sunrise</h4>
            <p>Bright, citrusy, and perfect for your morning brew.</p>
          </div>
          <div className="p-4 shadow rounded-xl bg-green-50">
            <h4 className="text-xl font-bold text-green-900">Highland Roast</h4>
            <p>Bold and earthy with rich chocolate notes.</p>
          </div>
          <div className="p-4 shadow rounded-xl bg-green-50">
            <h4 className="text-xl font-bold text-green-900">Shega Espresso</h4>
            <p>Smooth, strong, and full-bodied for espresso lovers.</p>
          </div>
        </div>
      </section>

      <section id="gallery" className="px-6 py-16">
        <h3 className="text-3xl font-semibold text-green-800 mb-10 text-center">Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="h-40 bg-green-200 rounded-xl"></div>
          <div className="h-40 bg-green-300 rounded-xl"></div>
          <div className="h-40 bg-green-200 rounded-xl"></div>
          <div className="h-40 bg-green-300 rounded-xl"></div>
        </div>
      </section>

      <section id="contact" className="px-6 py-16 bg-green-100">
        <h3 className="text-3xl font-semibold text-green-800 mb-6 text-center">Contact Us</h3>
        <form className="max-w-2xl mx-auto space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 rounded border" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded border" />
          <textarea placeholder="Message" className="w-full p-3 rounded border h-32"></textarea>
          <button type="submit" className="bg-green-800 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700">Send Message</button>
        </form>
      </section>

      <footer className="bg-white text-center p-4 text-sm text-green-800">
        © {new Date().getFullYear()} Shega Coffee. All rights reserved.
      </footer>
    </div>
  );
}
