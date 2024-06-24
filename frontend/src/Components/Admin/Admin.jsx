import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminForm from './Jobapp';

const Admin = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (storedUser && storedUser.profile === 'admin') {
      setIsAdmin(true);
    } else {
      // Redirect to home or login if not admin
      navigate("/");
    }
  }, []);

  if (!isAdmin) {
    return null; // Render nothing if not admin
  }

  return (
    <div className="admin-page">
      <AdminForm/>
    </div>
  );
};

export default Admin;
