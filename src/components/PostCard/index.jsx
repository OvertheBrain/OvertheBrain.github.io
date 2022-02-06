import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import { Tag } from 'antd';
import style from './postCard.module.less';
import Utils from '../../utils/pageUtils';
import Config from '../../../config';

const PostCard = (props) => {
  const { data: { node: { frontmatter } } } = props;
  const tagPage = Config.pages.tag;
  return (
    <div className={style.postCard}>
      <div
        className={style.postCardImg}
        style={{
          backgroundImage: `url(${frontmatter ? frontmatter.cover.childImageSharp.fluid.src : ''})`,
        }}
      />
      <div className={style.mrTp20}>
        <p>
          <span className={style.dateHolder}>{frontmatter ? moment(frontmatter.date).format('MMM Do YYYY') : ''}</span>
        </p>
        <Link to={Utils.resolvePageUrl(frontmatter.path)}>
          <h3>{frontmatter ? frontmatter.title : ''}</h3>
        </Link>
        <p>{frontmatter ? frontmatter.excerpt : ''}</p>
        <p style={{ color: '#ce6d96', wordSpacing: '10px' }}>
          {

                frontmatter.tags.map((tag) => (
                  <Link to={Utils.resolvePageUrl(tagPage, tag)}>
                    <Tag color="blue">
                      #
                      {tag}
                    </Tag>
                  </Link>
                ))
              }
        </p>
      </div>
    </div>
  );
};

export default PostCard;
