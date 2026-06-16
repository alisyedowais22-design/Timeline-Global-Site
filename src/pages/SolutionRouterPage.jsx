import React from 'react';
import { useParams } from 'react-router-dom';

import IndustryDetailPage from './IndustryDetailPage';
import VehicleSolutionDetailPage from './VehicleSolutionDetailPage';
import { vehicleSolutionsBySlug } from '../data/vehicleSolutionsData';

const SolutionRouterPage = () => {
  const { slug } = useParams();

  if (vehicleSolutionsBySlug[slug]) {
    return <VehicleSolutionDetailPage />;
  }

  return <IndustryDetailPage />;
};

export default SolutionRouterPage;