import { useEffect, useState } from "react";

import Chart from "./Chart";

import { getChartData } from "../../services/cryptoApi";
import { formatChartData } from "../../utils/formatChartData";

import styles from "./ModalChart.module.css";

function ModalChart({
  setShowModal,
  currency,
  coinData: { id, name, image, ath, current_price, market_cap },
}) {
  const [dataChart, setDataChart] = useState([]);
  const [selectedMetric, setSelectedMetric] = useState("prices");

  const formattedData = formatChartData(
    dataChart[selectedMetric] || [],
    selectedMetric
  );

  const metrics = [
    { key: "prices", label: "Prices" },
    { key: "market_caps", label: "Market Caps" },
    { key: "total_volumes", label: "Total Volumes" },
  ];

  const icon = {
    usd: "$",
    eur: "€",
    jpy: "¥",
  };

  useEffect(() => {
    const getChart = async (id) => {
      const { url, options } = getChartData(id);
      const response = await fetch(url, options);
      const json = await response.json();
      setDataChart(json);
    };
    getChart(id);
  }, [id]);

  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={() => setShowModal(false)}>
        X
      </button>
      <div className={styles.modal}>
        <div className={styles.detail}>
          <img src={image} alt={name} />
          <p>{name}</p>
        </div>
        <Chart data={formattedData} metric={selectedMetric} />
        {metrics.map(({ key, label }) => (
          <button
            key={key}
            className={selectedMetric === key ? styles.selected : ""}
            onClick={() => setSelectedMetric(key)}
          >
            {label}
          </button>
        ))}
        <div className={styles.coinStats}>
          <p>
            <span>Price: </span>
            {icon[currency]} {current_price?.toLocaleString()}
          </p>
          <p>
            <span>Ath: </span>
            {icon[currency]} {ath?.toLocaleString()}
          </p>
          <p>
            <span>Market Cap: </span>
            {icon[currency]} {market_cap?.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ModalChart;
