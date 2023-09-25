import React, { useRef, useEffect } from 'react';
import dashmain from './dashmain';

const BarChartWrapper = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const resizeChart = () => {
      const chart = chartRef.current;
      if (chart) {
        chart.resize(window.innerWidth, window.innerHeight);
      }
    };

    resizeChart();
    window.addEventListener('resize', resizeChart);

    return () => {
      window.removeEventListener('resize', resizeChart);
    };
  }, [chartRef]);

  return (
    <dashmain ref={chartRef} />
  );
};

export default BarChartWrapper;