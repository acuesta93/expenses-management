import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {
  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
  };

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            Gráfica aquí
        </div>

        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
            </p>
            <p>
                <span>Disponible: </span> {formatearCantidad(0)}
            </p>
            <p>
                <span>Gastado: </span> {formatearCantidad(0)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto