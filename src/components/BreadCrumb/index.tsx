import React from "react";
import { Breadcrumbs, Card, Link } from "@mui/material";

type Route = {
  link: string;
  text: string;
};

type Props = {
  routes?: Route[];
};

const BreadCrumb: React.FC<Props> = ({ routes }) => {
  return (
    <Card sx={{ px: 3, py: 3 }}>
      <Breadcrumbs aria-label="breadcrumb">
        {routes?.map((route) => (
          <Link underline="hover" color="inherit" href={route.link}>
            {route.text}
          </Link>
        ))}
      </Breadcrumbs>
    </Card>
  );
};

export default BreadCrumb;
