import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Logo from "../Components/Logo/Logo";
import { getApiData } from "../Components/ApiClient";
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
  const [lastElem, setLastElem] = useState(null);

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

  useEffect(() => {
    setLastElem(pollution[pollution.length - 1]?.trend);
  }, [pollution]);

  return (
    <>
      <h1 className="noAbs">
        Emissioni di metano:
        <br />
        <span className="changeText textSpanColor">
          una minaccia silenziosa
        </span>
        <br /> per il clima
      </h1>
      <div className="containerChPage">
        <ResponsiveContainer width="100%" height={700}>
          <LineChart data={pollution}>
            <Line type="monotone" dataKey="trend" name="Ppm" stroke="#42627d" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" name="Anno" />
            <YAxis />
            <Tooltip
              formatter={(value, name, props) => {
                const xValue = props.payload.date;
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
