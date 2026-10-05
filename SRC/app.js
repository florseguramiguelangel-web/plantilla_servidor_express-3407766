import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        mensaje:"API de reservas CTPI funcionando correctamente"
    });
});
// crear la ruta GET /api/healtch//PRIMER endpointpunto salida para comunicarme con el servidor
app.get("/api/health", (req, res) => {
    res.status(200).json({
        status: "ok",
        servicio: "sena-reservas-API",

    });
});
export default app;