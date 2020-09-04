import React, { useState } from 'react';
import './Notification.css';
import Loader from './Loader';

import { motion } from 'framer-motion';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Notification = () => {
  const [expanded, expandNotificaton] = useState(false);
  const [link, setLink] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

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
            onClick={() => {
              expandNotificaton(!expanded);
            }}
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
              <div class="notification__success-message">
                Thank you! Your nominations have been submitted. Share with your
                friends.
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
