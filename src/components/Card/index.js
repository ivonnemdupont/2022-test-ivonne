import './Card.css'

export default function Card () {
  return (
    <main className="container flex flex--center">
      <article className="cartao post">
        <h2 className="cartao__titulo">{post.title}</h2>
        <p className="carta__texto">{post.body}</p>
      </article>
    </main>
  )
}
