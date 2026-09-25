import TarjetaActividad from "../components/TarjetaActividad";

function Misinscripciones({inscripciones, onEliminar}) {
    return (
        <div className="row g-4">
            <h2>Mis inscripciones</h2>
            {inscripciones.map((inscripcion) => (
            <div className="col-12 col-md-6 col-lg-4" key={inscripcion.id}>
                <TarjetaActividad
                inscripcion={inscripcion}
                onEliminar={onEliminar}
                />
            </div>
            ))}
        </div>
    );
}

export default Misinscripciones;