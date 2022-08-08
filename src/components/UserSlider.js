import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./UserSlider.css";

// Configuración de cuántos elementos mostrar por página del slider en función del tamaño de la pantalla
const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1280,
    },
    items: 4,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 480,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1280,
      min: 480,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
}

export default function UserSlider() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Se obtiene la información de los usuarios y se guarda en el Array Users
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div>
      {/* Componente principal, en el se pueden establecer las distintas configuraciones que desees, estas configuracion son las necesarias para un Slider sencillo */}
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className="sliderContainer"
        containerClass="container-with-dots"
        dotListClass=""
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {/* Del contenido leído desde el API de jsonplaceholder.com renderizamos el nombre de los usuarios, solo con la finalidad de notar la diferencia al desplazar el slider. */}
        {users &&
          users.map((user) => (
            <div key={user.id} className="card">
              <img
                src={
                  `https://source.unsplash.com/random/1280x720?random=` +
                  user.id
                }
                alt=""
              />
              {/* Pretende ser la imagen de perfil del usuario, esta URL genera una imagen random */}
              <div className="content">
                <h2>
                  {user.id} - {user.name}
                </h2>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
}
