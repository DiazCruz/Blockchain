import React from "react";
import logo from './imagenes/logo_itv.png';
import ContenedorCandidatos from './ContenedorCandidatos';
import imagenCandidato1 from './imagenes/candidato1.jpg';
import imagenCandidato2 from './imagenes/candidato2.jpg';
import imagenCandidato3 from './imagenes/candidato3.jpg';
import imagenCandidato4 from './imagenes/candidato4.jpg';

const Connected = (props) => {
    const initialCandidates = [
        { name: "Juan Carlos López Revilla" }, { name: "María Teresa García Montiel" }, { name: "Hugo Esteban Jiménez Aguilera" }, { name: "Claudia Serrano Flores" },
    ];

    return (
        <div>
            <div className="login-franja">
                <img src={logo} alt="Logo" className="logo" />
                <h1 className="escuela">Instituto Tecnológico de Veracruz</h1>
            </div>

            <div>
            <h1 className="titulo-can">CANDIDATOS</h1>    
            <ContenedorCandidatos
                nombre="Juan Carlos López Revilla"
                carrera="Ing. Industrial"
                semestre="2°"
                propuestas="Implementación de tecnología educativa avanzada, acceso a dispositivos y capacitación para profesores y estudiantes.Organización de eventos, talleres y exposiciones para fomentar la expresión artística y cultural."
                imagen={imagenCandidato1}
            />
            <ContenedorCandidatos
                nombre="María Teresa García Montiel"
                carrera="Ing. Sistemas Computacionales"
                semestre="6°"
                propuestas="Renovación de aulas, laboratorios y áreas comunes para crear un entorno más propicio para el aprendizaje.Creación de programas de becas para estudiantes con mérito académico o necesidades económicas."
                imagen={imagenCandidato2}
            />
            <ContenedorCandidatos
                nombre="Hugo Esteban Jiménez Aguilera"
                carrera="Ing. Bioquímica"
                semestre="3°"
                propuestas="Apoyo a la investigación, desarrollo de programas académicos innovadores y acceso a recursos educativos actualizados. Implementación de medidas de seguridad para garantizar un entorno seguro para los estudiantes y el personal."
                imagen={imagenCandidato3}
            />
            <ContenedorCandidatos
                nombre="Claudia Serrano Flores"
                carrera="Ing. Mecatrónica"
                semestre="11°"
                propuestas="Campañas de concienciación sobre salud mental, promoción de hábitos saludables y acceso a servicios médicos en la escuela. Creación de espacios para la participación estudiantil en la toma de decisiones y el desarrollo de proyectos escolares."
                imagen={imagenCandidato4}
            />
        </div>

            <div className="connected-container">
                <p className="connected-account">Usuario .{props.account}</p>
                <h1 className="connected-header">Es tu momento de cambiar tu escuela. Selecciona al candidato de tu preferencia.</h1>
                {props.showButton ? (
                    <p className="connected-account">Usted ya ha realizado su voto</p>
                ) : (
                    <div>
                        <input type="number" placeholder="Enter Candidate Index" value={props.number} onChange={props.handleNumberChange} />
                        <br />
                        <button className="login-button" onClick={props.voteFunction}>Vote</button>
                    </div>
                )}

                <table id="myTable" className="candidates-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>CANDIDATOS</th>
                            <th>VOTOS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.candidates.map((candidate, index) => (
                            <tr key={index}>
                                <td>{candidate.index}</td>
                                <td>{initialCandidates[index].name}</td>
                                <td>{candidate.voteCount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Connected;
