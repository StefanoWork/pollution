import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Logo from "../Components/Logo/Logo";
import { getApiData } from "../Components/ApiClient";
import { useRef } from "react";
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
  const [lastElem, setLastElem] = useState(null);

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

  useEffect(() => {
    setLastElem(pollution[pollution.length - 1]?.station);
  }, [pollution]);

  return (
    <>
      <h1 className="noAbs">
        Andamento delle <br />
        <span className="changeText textSpanColor">
          temperature globali
        </span>. <br />
        Come il clima sta cambiando
      </h1>
      <div className="containerChPage">
        <ResponsiveContainer width="100%" height={650}>
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
            <Tooltip
              formatter={(value, name, props) => {
                const xValue = props.payload.time;
                const xValueS = xValue.slice(0, -3);

                return (
                  <div>
                    <strong>{value}</strong>
                    <br />
                    Anno: <strong>{xValueS}</strong>
                  </div>
                );
              }}
            />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="lastElem">
        Ultima temperatura registrata:
        <span className="changeText">{lastElem}</span>
      </p>

      <Footer />

      <Navbar />
      <Logo />
    </>
  );
}
