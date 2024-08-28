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
  const lastElemRef = useRef();

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

  useEffect(() => {
    setLastElem(pollution[pollution.length - 1]?.trend);
  }, [pollution]);

  return (
    <>
      <h1 className="noAbs">
        L&#39;innalzamento della
        <br />
        <span className="changeText textSpanColor">CO2</span> in atmosfera,
        <br /> un fenomeno senza precedenti
      </h1>
      <div className="containerChPage">
        <ResponsiveContainer width="100%" height={700}>
          <LineChart data={pollution}>
            <Line type="monotone" dataKey="trend" name="Ppm" stroke="#42627d" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="year" name="Anno" />
            <YAxis />
            <Tooltip
              formatter={(value, name, props) => {
                const xValue = props.payload.year;
                return (
                  <div>
                    <strong>{value}</strong>
                    <br />
                    Anno: <strong>{xValue}</strong>
                  </div>
                );
              }}
            />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="lastElem">
        Ultima rilevazione registrata:
        <span className="changeText">{lastElem}</span>
      </p>

      <Footer />

      <Navbar />
      <Logo />
    </>
  );
}
