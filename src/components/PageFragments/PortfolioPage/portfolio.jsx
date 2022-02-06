import React, { useMemo, useState } from 'react';
import {
  Chip, Collapse, Divider, Fade, Grid, Typography,
} from '@mui/material';
import {
  Card,
  Checkbox,
} from 'antd';
import { Check, Build, Category } from '@mui/icons-material';

import portfolio from '../../../../portfolio/portfolio';
import PortfolioCard from '../../PortfolioCard';

const Portfolio = () => {
  const [tech, setTech] = useState({});
  const [category, setCategory] = useState({});

  const filterFunc = (item, name, stateValue) => {
    if (item && item.tags && item.tags[name] && item.tags[name]) {
      // eslint-disable-next-line no-restricted-syntax
      for (const key of Object.keys(stateValue)) {
        if (stateValue[key] && !item.tags[name].find((e) => e === key)) {
          return false;
        }
      }
      return true;
    }
    return false;
  };

  const Cards = portfolio.filter((item) => filterFunc(item, 'tech', tech))
    .filter((item) => filterFunc(item, 'category', category))
    .map((item) => {
      const fadeIn = filterFunc(item, 'tech', tech) && filterFunc(item,
        'category', category);
      return (
        <Fade in={fadeIn} appear>
          <Grid item xs={12} md={6} xl={4} key={item.name}>
            <PortfolioCard item={item} />
          </Grid>
        </Fade>
      );
    });

  const techTagSet = new Set();
  const categoryTagSet = new Set();
  portfolio.forEach((item) => {
    if (item && item.tags) {
      if (item.tags.tech) {
        item.tags.tech.forEach((tag) => {
          techTagSet.add(tag);
        });
      }
      if (item.tags.category) {
        item.tags.category.forEach((tag) => {
          categoryTagSet.add(tag);
        });
      }
    }
  });

  const tagsFromSets = (inputSet, stateValue, setFunc) => {
    const Tags = Array.from(inputSet).sort().map((tag) => {
      const CollapseIcon = (
        <Collapse
          style={{ height: '100%' }}
          orientation="horizontal"
          in={stateValue && stateValue[tag]}
        >
          <Check style={{ marginTop: '20%' }} />
        </Collapse>
      );
      const Label = (
        <Typography sx={{ fontWeight: 500 }}>
          {tag}
        </Typography>
      );
      const onClick = () => {
        setFunc((prev) => ({
          ...prev,
          [tag]: !prev[tag],
        }));
      };
      return (
        <Grid item key={tag}>
          {/* <Chip */}
          {/*  icon={CollapseIcon} */}
          {/*  label={Label} */}
          {/*  key={tag} */}
          {/*  onClick={onClick} */}
          {/*  variant={stateValue && stateValue[tag] ? 'filled' : 'outlined'} */}
          {/* /> */}
          <Checkbox
            key={tag}
            onChange={onClick}
          >
            {Label}
          </Checkbox>
        </Grid>
      );
    });
    const clearAll = () => {
      setFunc({});
    };
    return (
      <>
        {Tags}
        <Grid item xs="auto">
          <Collapse
            orientation="horizontal"
            in={Cards.length < portfolio.length}
            appear
          >
            <Chip
              label={(
                <Typography sx={{ fontWeight: 500 }}>
                  Clear all
                </Typography>
)}
              key="clear all"
              color="error"
              onDelete={clearAll}
              onClick={clearAll}
              variant="outlined"
            />
          </Collapse>
        </Grid>
      </>
    );
  };

  const techTags = useMemo(
    () => (
      <Grid container spacing={2} mt={2} alignItems="center" rowSpacing={1}>
        <Grid item>
          <Build />
        </Grid>
        {tagsFromSets(techTagSet, tech, setTech)}
      </Grid>
    ), [tech],
  );

  const categoryTags = useMemo(
    () => (
      <Grid container spacing={1} mt={1} alignItems="center" rowSpacing={0.5}>
        <Grid item sx={{ marginRight: 1}}>
          <Category />
        </Grid>
        {tagsFromSets(categoryTagSet, category, setCategory)}
      </Grid>
    ), [category],
  );

  return (
    <>
      <Card title="Filter">
        {categoryTags}
        <Divider sx={{ mt: 2 }} />
        {techTags}
      </Card>
      <Grid
        container
        rowSpacing={3}
        spacing={3}
        justifyContent="flex-start"
        mt={1}
      >
        {Cards}
      </Grid>
    </>
  );
};

export default Portfolio;
