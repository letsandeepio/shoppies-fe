import React, { useState } from 'react';
import './Notification.css';
import Loader from './Loader';

import { gql, useMutation } from '@apollo/client';
import { useStateValue } from '../context/StateProvider';

import { motion } from 'framer-motion';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const NOMINATION_MUTATION = gql`
  mutation Nominate($nominations: String!) {
    nominate(nominations: $nominations) {
      url
    }
  }
`;

const Notification = () => {
  const [{ nominatedMovies }] = useStateValue();
  const [expanded, expandNotificaton] = useState(false);
  const [link, setLink] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const [nominate] = useMutation(NOMINATION_MUTATION, {
    onCompleted: (data) => {
      setLoading(false);
      setLink(data.nominate.url);
      expandNotificaton(true);
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    }
  });

  const handleSubmit = () => {
    setLoading(true);
    nominate({
      variables: {
        nominations: JSON.stringify(nominatedMovies)
      }
    });
  };

  const Submit = () => {
    return !loading ? (
      <>
        <div className="notification__content">
          <span role="img" alt="celeberation emoji" aria-label="emoji">
            🎉
          </span>
          &nbsp;Thanks for nominating 5 movies.
        </div>
        <div>
          <button
            className="notification__content-button"
            onClick={handleSubmit}
          >
            submit
          </button>
        </div>
      </>
    ) : (
      <Loader />
    );
  };

  return (
    <div className="notification__container">
      <motion.div
        animate={{
          height: expanded ? '120px' : '30px'
        }}
        initial={{
          height: '30px'
        }}
        className="notification"
      >
        {!expanded ? (
          <Submit />
        ) : (
          <>
            <div>
              <div className="notification__success-message">
                Thank you! Your nominations have been submitted. Share the list
                with your friends.
              </div>
              <div className="notification__success">
                <div className="notification__success-container">
                  <input
                    placeholder="link here"
                    className="notification__content-input"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                  ></input>
                </div>
                <div className="notification__success-btn-container">
                  <CopyToClipboard text={link} onCopy={() => setCopied(true)}>
                    <button className="notification__content-button">
                      {copied ? 'Copied' : 'Copy to Clipboard'}
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Notification;
