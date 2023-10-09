import express from "express"
import { ControladorHabitacion } from "../controllers/ControladorHabitacion.js"

//para poder llamar al controlador
//debo crear un objeto de la clase controladorHabitaciones
let controladorHabitacion = new ControladorHabitacion();

export let rutas = express.Router()

rutas.post('/api/habitaciones',controladorHabitacion.registrarHabitaciones)
rutas.get('/api/habitacion',controladorHabitacion.buscarHabitacionPorId)
rutas.get('/api/habitaciones',controladorHabitacion.buscarHabitaciones)
rutas.put('/api/habitaciones',controladorHabitacion.modificarHabitaciones)
rutas.delete('/api/habitaciones',controladorHabitacion.borrarHabitaciones)  