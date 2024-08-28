import styles from "./Glacier.module.css";
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

import Glacier1 from "../../assets/images/glacier1.png";
import Glacier2 from "../../assets/images/glacier2.png";

export default function Glacier() {
  const [pollution, setPollution] = useState([]);
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getApiData(
          "https://global-warming.org/api/arctic-api"
        );
        setPollution(response.arcticData);
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
    <section className={styles.secGlacier}>
      <div className={styles.line}></div>
      <h2 className={styles.titleSection}>
        I ghiacciai si stanno
        <span className={styles.changeText}>sciogliendo</span>
      </h2>
      <div className={styles.containerImg}>
        <div className={styles.divImg1}>
          <img className={styles.img1} src={Glacier1} alt="Glacier" />
        </div>
        <div className={styles.divImg2}>
          <img className={styles.img2} src={Glacier2} alt="Glacier" />
        </div>
      </div>

      <button className={styles.btGlacier} onClick={toggleChart}>
        Estensione ghiacciai
      </button>

      <div
        className={styles.bigChart}
        style={{ display: showChart ? "block" : "none" }}
      >
        <ResponsiveContainer width="100%" height={700}>
          <LineChart data={pollution}>
            <Line
              type="monotone"
              dataKey="extent"
              name="Estensione"
              stroke="#42627d"
            />
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
