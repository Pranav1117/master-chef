"use client"
import { fetchRecipes } from "@/services/getRecipes";
import { useEffect } from "react";

const Cravings = () => {

  useEffect(() => {
    fetchRecipes('cravings')
  }, [])

  return (
    <div>Cravings</div>
  )
}

export default Cravings