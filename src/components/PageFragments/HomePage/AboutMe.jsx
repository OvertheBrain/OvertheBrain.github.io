import React from 'react';
import { stripTags } from '../../../utils/stripTags';
import config from '../../../../config';
import SEO from '../../Seo';

const AboutMe = () => {
  let description = '';
  (config.aboutMe).forEach((para) => {
    description += para;
  });
  description = stripTags(description);
  return (
    <>
      <div>
        <SEO
          title="About"
          description="Brian Han's self introduction"
          path="/"
        />
        <h1 className="titleSeparate">About Me</h1>
        <div>
          {
              config.aboutMe.map((para, index) => (
                <p key={index}>{para}</p>
              ))
          }
        </div>
      </div>

    </>
  );
};
export default AboutMe;
