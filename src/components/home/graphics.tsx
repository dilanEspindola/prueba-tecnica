import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { H1, GraphicsContainer, Graphic, GraphicText } from "@/styles/";
import { FetchData } from "@/interfaces";

interface Props {
  data: FetchData[];
}

export const Graphics = ({ data }: Props) => {
  const filterByFallecidos = data.filter((info) => info.estado === "Fallecido");
  const filterByRecuperados = data.filter(
    (infos) => infos.recuperado === "Recuperado"
  );

  const porcentajeRecuperados =
    (filterByRecuperados.length * 100) / data.length;
  const porcentajeFallecidos = (filterByFallecidos.length * 100) / data.length;

  return (
    <div>
      <H1>
        Estadisticas sobre las personas recuperadas y las personas fallecidas
      </H1>

      <GraphicsContainer>
        <Graphic>
          <CircularProgressbar
            value={porcentajeFallecidos}
            text={`${porcentajeFallecidos}%`}
            styles={buildStyles({
              pathColor: "#A22340",
              strokeLinecap: "butt",
            })}
            strokeWidth={50}
          />
          <GraphicText>Personas fallecidos</GraphicText>
        </Graphic>
        <Graphic>
          <CircularProgressbar
            value={porcentajeRecuperados}
            text={`${porcentajeRecuperados}%`}
            styles={buildStyles({
              strokeLinecap: "butt",
              textColor: "#fff",
            })}
            strokeWidth={50}
          />
          <GraphicText>Personas recuperadas</GraphicText>
        </Graphic>
      </GraphicsContainer>
    </div>
  );
};
