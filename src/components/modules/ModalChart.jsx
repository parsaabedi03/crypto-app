import { useEffect } from "react";
import { getChartData } from "../../services/cryptoApi";

function ModalChart() {
  useEffect(() => {
    const getChart = async () => {
      const { url, options } = getChartData("bitcoin");
      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json);
    };
    getChart();
  }, []);
  return <div>ModalChart</div>;
}

export default ModalChart;
