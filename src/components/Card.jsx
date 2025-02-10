import React from "react";

function Card({ title, description, imgUrl, isVisible, isVisited, isAdmin }) {
  return (
    <>
    
      <div style={styles.card}>
        <img style={styles.image} src={imgUrl} alt={title} />
        <div style={styles.content}>
          <h2 style={styles.title}>{title}</h2> 
          <p style={styles.description}>{description}</p>
        </div>
        <p>{isVisited ? "Città visitata ✅" : "Città non ancora visitata ❌"}</p>

        {isAdmin && (
          <div>
            <button>Modifica Card</button>
            <button>Elimina Card</button>
            <button>Dettagli</button>
          </div>
        )}
      </div>
    </>
  );
}

const styles = {
  card: {
    backgroundColor: "white",
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    width: "250px",
    textAlign: "center",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
    marginTop: "100px",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
  content: {
    padding: "15px",
  },
  title: {
    fontSize: "1.4rem",
    margin: "10px 0",
    color: "#333",
  },
  description: {
    fontSize: "1rem",
    color: "#666",
  },
};

export default Card;
