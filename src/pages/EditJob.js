import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/EditJob.css';


const EditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('Applied');
  const [appliedDate, setAppliedDate] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`http://localhost:8080/api/jobs/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const job = res.data;
        setCompany(job.company);
        setRole(job.role);
        setStatus(job.status);
        setAppliedDate(job.appliedDate?.slice(0, 10));
        setNotes(job.notes);
      } catch (err) {
        console.error('❌ Error fetching job:', err.response?.data || err.message);
        alert('Failed to fetch job');
      }
    };

    fetchJob();
  }, [id]);

 const handleUpdate = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem('token');

    await axios.put(
      `http://localhost:8080/api/jobs/${id}`,
      { company, role, status, appliedDate, notes },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // ✅ Redirect after successful update
    navigate('/dashboard');
  } catch (err) {
    console.error('❌ Update failed:', err.response?.data || err.message);
    alert('Failed to update job');
  }
};

  return (
    <div className="job-form-page">
      <form className="job-form" onSubmit={handleUpdate}>
      <h2>✏️ Edit Job</h2>
      <div>
          <label>Company:</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Role:</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
            <option value="Selected">Selected</option>
          </select>
        </div>

        <div>
          <label>Applied Date:</label>
          <input
            type="date"
            value={appliedDate}
            onChange={(e) => setAppliedDate(e.target.value)}
          />
        </div>

        <div>
          <label>Notes:</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows="3"
          />
        </div>

        <button type="submit">Update Job</button>
      </form>
    </div>
  );
};

export default EditJob;
