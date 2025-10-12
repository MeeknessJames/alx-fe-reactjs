import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div style={{ padding: 20 }}>
      <h2>Blog Post #{id}</h2>
      <p>This demonstrates dynamic routing using /blog/:id.</p>
    </div>
  );
}
