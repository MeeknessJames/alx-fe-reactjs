import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();
  return <h3>Viewing Blog Post with ID: {id}</h3>;
}
