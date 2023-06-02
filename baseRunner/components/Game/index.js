import React from 'react';
import styles from './index.module.css';
import DropDown from '../Form/DropDown';
import { useDispatch } from 'react-redux';
import { addAwayTeam, addHomeTeam, addOrganization } from '../../store/reducer/gameTracker';

const GamePage = ({
  allOrganizations,
  selectedOrganization,
  setSelectedOrganization,
  allTeams,
  homeTeam,
  awayTeam,
  setHomeTeam,
  setAwayTeam,
}) => {
  const dispatch = useDispatch();

  if (!allOrganizations) {
    return <div>Loading...</div>; // Display a loading state when allOrganizations is undefined
  }

  const handleOrganizationChange = (event) => {
    const selectedOrg = event.target.value;
    setSelectedOrganization(selectedOrg);
    dispatch(addOrganization(selectedOrg));
  };

  const handleHomeTeamChange = (event) => {
    const selected = event.target.value;
    setHomeTeam(selected);
    dispatch(addHomeTeam(selected));
  };

  const handleAwayTeamChange = (event) => {
    const selected = event.target.value;
    setAwayTeam(selected);
    dispatch(addAwayTeam(selected));
  };

  return (
    <div className={styles.gameStartPage}>
      <DropDown
        placeholder={'Select Organization'}
        onChange={handleOrganizationChange}
        options={allOrganizations}
        value={selectedOrganization}
      />
      {!selectedOrganization ? null : (
        <>
          <DropDown
            placeholder={'Select Home Team'}
            onChange={handleHomeTeamChange}
            options={allTeams}
            value={homeTeam}
          />

          <DropDown
            placeholder={'Select Away Team'}
            onChange={handleAwayTeamChange}
            options={allTeams}
            value={awayTeam}
          />
        </>
      )}
    </div>
  );
};

export default GamePage;
