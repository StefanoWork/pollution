import styles from "../Temperature/Temperature.module.css";
import { getApiData } from "../ApiClient";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Temperature() {
  const [pollution, setPollution] = useState([]);
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getApiData(
          "https://global-warming.org/api/temperature-api"
        );
        setPollution(response.result);
      } catch (error) {
        console.error("Errore durante la chiamata API: ", error);
      }
    };

    fetchData();
  }, []);

  const toggleChart = () => {
    setShowChart(!showChart);
  };

  return (
    <section className={styles.sectionT}>
      <div className={styles.line}></div>
      <h2 className={styles.titleSection}>
        Andamento delle
        <span className={styles.changeText}>temperature globali</span>. Come il
        clima sta cambiando
      </h2>
      <div className={styles.chartText}>
        <ResponsiveContainer width="100%" height={450}>
          <LineChart data={pollution}>
            <Line
              type="monotone"
              dataKey="station"
              name="Temperatura"
              stroke="#42627d"
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis
              dataKey="time"
              name="Anno"
              tickFormatter={(value) => value.slice(0, -3)}
            />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>

        <div className={styles.divDx}>
          <p className={styles.subtitle}>
            Questo grafico mostra come la temperatura media della superficie
            terrestre sia aumentata di circa 1,2°C negli ultimi 143 anni. Si può
            notare che il riscaldamento è stato più rapido e intenso negli
            ultimi decenni, con il 2020 e il 2023 che sono stati i due anni più
            caldi mai registrati. Questo trend è causato principalmente dall
            aumento delle emissioni di gas serra dovute alle attività umane.
          </p>
          <button className={styles.bt} onClick={toggleChart}>
            Analizza
          </button>
        </div>
      </div>
      <div className={styles.line}></div>

      <div
        className={styles.bigChart}
        style={{ display: showChart ? "block" : "none" }}
      >
        <ResponsiveContainer width="100%" height={700}>
          <LineChart data={pollution}>
            <Line
              type="monotone"
              dataKey="station"
              name="Temperatura"
              stroke="#42627d"
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis
              dataKey="time"
              name="Anno"
              tickFormatter={(value) => value.slice(0, -3)}
            />
            <YAxis />
            <Tooltip />
            <Legend />
          </LineChart>
        </ResponsiveContainer>

        <button className={styles.noShow} onClick={toggleChart}>
          X
        </button>
      </div>
    </section>
  );
}
