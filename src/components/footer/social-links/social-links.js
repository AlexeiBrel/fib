import React from 'react';
import {FaTelegram, FaFacebook} from 'react-icons/fa';
import {RiInstagramFill} from 'react-icons/ri';
import {BsTwitter} from 'react-icons/bs';
import classes from "./social-links.module.css";

const SocialLinks = () => {
  return (
    <ul className={classes.socialLinks}>
      <li> <FaTelegram /></li>
      <li> <FaFacebook/></li>
      <li> <BsTwitter /></li>
      <li> <RiInstagramFill /></li>
    </ul>
  );
};

export default SocialLinks;