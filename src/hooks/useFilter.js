import React, { useState } from "react" // eslint-disable-line

export default function useFilter() {
  const [filter, setFilter] = useState({
    operacion: "",
    ubicacion: "",
    tipo: "",
    precio: "",
  })

  console.log(filter)

  function handleChange(e) {
    setFilter({ ...filter, [e.target.name]: e.target.value })
  }

  return {
    filter,
    handleChange,
  }
}
