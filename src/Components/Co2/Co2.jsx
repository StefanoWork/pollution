import styles from "../Co2/Co2.module.css";
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

export default function Methane() {
  const [pollution, setPollution] = useState([]);
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getApiData(
          "https://global-warming.org/api/co2-api"
        );
        setPollution(response.co2);
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
    <section className={styles.sectionC}>
      <div className={styles.line}></div>
      <h2 className={styles.titleSection}>
        L&#39;innalzamento della
        <span className={styles.changeText}>CO2</span> in atmosfera, un fenomeno
        senza precedenti
      </h2>
      <div className={styles.chartText}>
        <ResponsiveContainer width="100%" height={450}>
          <LineChart data={pollution}>
            <Line type="monotone" dataKey="trend" name="Ppm" stroke="#42627d" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="year" name="Anno" />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>

        <div className={styles.divDx}>
          <p className={styles.subtitle}>
            Questo grafico mostra come la concentrazione di anidride carbonica
            &#40;CO2&#41; nell&#39;atmosfera sia passata da circa 315 ppm
            &#40;parti per milione&#41; nel 1958 a oltre 420 ppm nel 2023. Si
            tratta di un livello mai raggiunto negli ultimi 800 mila anni. La
            CO2 è il principale gas serra responsabile dell effetto serra
            antropogenico, che trattiene il calore solare e contribuisce al
            riscaldamento globale.
          </p>
          <button className={styles.bt} onClick={toggleChart}>
            Analizza
          </button>
        </div>
      </div>

      <div
        className={styles.bigChart}
        style={{ display: showChart ? "block" : "none" }}
      >
        <ResponsiveContainer width="100%" height={700}>
          <LineChart data={pollution}>
            <Line type="monotone" dataKey="trend" name="Ppm" stroke="#42627d" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="year" name="Anno" />
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
