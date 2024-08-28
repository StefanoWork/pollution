import styles from "../Methane/Methane.module.css";
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
          "https://global-warming.org/api/methane-api"
        );
        setPollution(response.methane);
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
    <section className={styles.sectionM}>
      <div className={styles.line}></div>
      <h2 className={styles.titleSection}>
        Le emissioni di
        <span className={styles.changeText}>metano</span>, una minaccia
        silenziosa per il clima
      </h2>
      <div className={styles.chartText}>
        <ResponsiveContainer width="100%" height={450}>
          <LineChart data={pollution}>
            <Line type="monotone" dataKey="trend" name="Ppm" stroke="#42627d" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" name="Anno" />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>

        <div className={styles.divDx}>
          <p className={styles.subtitle}>
            Questo grafico mostra come le emissioni globali di metano
            &#40;CH4&#41; siano cresciute da circa 300 Tg &#40;teragrammi&#41;
            nel 1980 a circa 400 Tg nel 2023. Il metano è un altro potente gas
            serra, che ha un impatto sul clima circa 28 volte maggiore della CO2
            in un arco di tempo di 100 anni. Le principali fonti di metano sono
            l&#39;agricoltura, l&#39;allevamento, i rifiuti, le attività
            energetiche e i processi naturali.
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
            <XAxis dataKey="date" name="Anno" />
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
