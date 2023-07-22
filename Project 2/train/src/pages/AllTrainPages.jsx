// AllTrainsPage.js
import React, { useEffect, useState } from 'react';
import { getTrains } from '../api';
import TrainList from '../components/TrainList';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await getTrains();
        setTrains(response.data);
      } catch (error) {
        console.error('Error fetching trains:', error);
      }
    };

    fetchTrains();
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      <TrainList trains={trains} />
    </div>
  );
};

export default AllTrainsPage;
