import Producto from './components/Producto';
import './App.css';

function App() {
  const productos = [
    {
      id: 1,
      nombre: "Cafe Especial de Juan Valdez",
      descripcion: "Cafe artesanal tostado de las montañas de Colombia.",
      precio: 25000,
      categoria: "Bebidas",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XGjDLaVjYe--o6wbQxNinIS0_38ZYG4QECbh1tWx6w&s=10"
    },
    {
      id: 2,
      nombre: "Taza de Ceremica Artesanal",
      descripcion: "Hecho y pintado a mano por artesanos locales.",
      precio: 18000,
      categoria: "Hogar",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHt8GLTM4NyRsTZbfHETeUkwir0Q_C-Rzfq-OvDI7nKA&s=10"
    },
    {
      id: 3,
      nombre: "Bolsa de Tela Ecologica",
      descripcion: "Algodon 100% orgánico reutilizable y resistente a caidas.",
      precio: 12000,
      categoria: "Accesorios",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTFDHBZ9LSix4SDLHaa2QKVdTCp10-mGmCD1I_bIDOqg&s=10"
    },
    {
      id: 4,
      nombre: "Vela Aromatica",
      descripcion: "Cera de papa natural con fragancia relajante.",
      precio: 22000,
      categoria: "Hogar",
      imagen: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=300&h=200&fit=crop"
    },
    {
      id: 5,
      nombre: "Miel Organica de abejas reina",
      descripcion: "Miel 100% pura cosechada de apicultura sostenible.",
      precio: 20000,
      categoria: "Alimentos",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiWDGbcd9IIKU-XG-ARwrcUsvu0oO1ZnD2T6hQjaFT_w&s=10"
    }
  ];

  return (
    <div className="app-container">
      <header className="header">
        <h1>Catalogo de Productos</h1>
        <p>Emprendimiento Local</p>
      </header>

      <main className="catalogo-grid">
        {productos.map((prod) => (
          <Producto
            key={prod.id}
            nombre={prod.nombre}
            descripcion={prod.descripcion}
            precio={prod.precio}
            categoria={prod.categoria}
            imagen={prod.imagen}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
