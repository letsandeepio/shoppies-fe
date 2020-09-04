import React from 'react';
import { useParams } from 'react-router-dom';
import Logo from './Logo';
import Nomination from './Nomination';
import './ViewNominations.css';
import { gql, useQuery } from '@apollo/client';
import Loader from './Loader';

const GET_NOMINATIONS = gql`
  query getNominations($uuid: String!) {
    getNominations(uuid: $uuid)
  }
`;

const ViewNominations = () => {
  let { id } = useParams();
  const { loading, error, data } = useQuery(GET_NOMINATIONS, {
    variables: {
      uuid: id
    }
  });

  return (
    <div className="viewnominations">
      <div className="viewnominations__container">
        <Logo />
        {error && error.message}
        {loading && <Loader invert="true" />}
        {data && (
          <Nomination
            mode="view"
            nominatedMoviesList={JSON.parse(data.getNominations)}
          />
        )}
      </div>
    </div>
  );
};

export default ViewNominations;
