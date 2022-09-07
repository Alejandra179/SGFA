import React from 'react'
import { useState } from 'react';

export default function Alert(props) {
    const [mensaje, setMensaje] = useState(props.msj);
    
  return (
    <div>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            {mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}
