import productodemo from './producto-demo.png'

export default function Producto() {
  return (
    <article className="producto">
      <img src={productodemo} alt="Producto" />
      <h2>Labial mate</h2>
      <p>Producto para catálogo de belleza.</p>
      <strong>$18.000</strong>
    </article>
  )}