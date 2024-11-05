import React from 'react';
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import './../../styles/table.scss';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

// fakeDb
import users from '../fakeDb/users';

const Table: React.FC = () => (
  <>
 <section className="table-responsive">
   <table className="user-table">
    <thead>
      <tr>
        <th>Organization</th>
        <th>Username</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Date Joined</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index) => (
        <tr key={index}>
          <td>{user.organization}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phoneNumber}</td>
          <td>{new Date(user.dateJoined).toLocaleDateString("en-GB",{
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}</td>
          <td className={`status ${user.status.toLowerCase()}`}>{user.status}</td>
          <td><BsThreeDotsVertical /></td>
        </tr>
      ))}
    </tbody>
  </table>
 </section>

 <section className="pagination">
      <article>
        <p>show</p>
        <select name="" id="">
          <option value="">100</option>
          <option value="">50</option>
          <option value="">10</option>
        </select>
        <p>Out of 100</p>
      </article>
      <article>
        <button>
          <FaLessThan/>
        </button>
          <div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p><BsThreeDots/></p>
            <p>15</p>
            <p>16</p>
          </div>
          <button>
          <FaGreaterThan/>
        </button>
      </article>
 </section>
 </>
);

export default Table;
