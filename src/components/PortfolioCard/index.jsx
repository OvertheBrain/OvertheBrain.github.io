import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Typography,
} from '@mui/material';

import { GitHub, Link, SportsEsports } from '@mui/icons-material';

export default function PortfolioCard({ item }) {
  const {
    name, url, image, description, tags, page,
  } = item;
  const Icons = (
    <>
      {
        url.website && (
        <IconButton aria-label="Website" href={url.website}>
          <Link />
        </IconButton>
        )
      }
      {
        url.game && (
        <IconButton aria-label="Website" href={url.game}>
          <SportsEsports />
        </IconButton>
        )
      }
      {
        url.github && (
        <IconButton aria-label="Github" href={url.github}>
          <GitHub />
        </IconButton>
        )
      }
    </>
  );
  const Tags = (
    <>
      {
        tags && tags.category && tags.category.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            color="secondary"
            size="small"
            sx={{ marginTop: 1, marginRight: 1 }}
          />
        ))
      }
      {
        tags && tags.language && tags.language.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            sx={{ marginTop: 1, marginRight: 1 }}
          />
        ))
      }
      {
        tags && tags.tech && tags.tech.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            sx={{
              marginTop: 1,
              marginRight: 1
            }}
          />
        ))
      }
    </>
  );
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={name}
        sx={{
          boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          height={80}
          paragraph
        >
          {description}
        </Typography>
        {Tags}
      </CardContent>
      <CardActions disableSpacing>
        {Icons}
        {page && (
        <Button
          size="small"
          style={{ marginLeft: 'auto' }}
          href={page}
        >
          Learn More
        </Button>
        )}
      </CardActions>
    </Card>
  );
}
