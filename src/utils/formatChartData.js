const formatChartData = (data, selectedMetric) => {
  if (!Array.isArray(data)) return [];

  return data.map(([timestamp, value]) => ({
    time: new Date(timestamp).toLocaleDateString("en"),
    [selectedMetric]: value,
  }));
};

export { formatChartData };
