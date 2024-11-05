import React, { FC, useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { User } from '../../components/fakeDb/users'
import { AiOutlineUser } from 'react-icons/ai'

import "./../../styles/userdetails.scss"
const UserDetails: FC = () => {

    type tabProps = "General Details" | "Documents" | "Bank Details" | 
    "Loans" | "Savings" | "App and System"

    const { id } = useParams()

    const [user, setuser] = useState<User | undefined>(undefined)

    const [activeTab, setactiveTab] = useState<tabProps>("General Details")

    useEffect(() =>{

        let users: User[] = JSON.parse(localStorage.getItem("users") ?? "[]")

       let search = users.find(user => user.id == Number(id))

      
      
       setuser(search)

      


    }, [])

  return (
    <div className='userdetails'>

     <div className="first goback">
        <img src="/back.png" alt="back" />
        <p>Back to users</p>
     </div>

     <div className="second two-column">
        <p>Users Details</p>
        <div className='row'>
            <p>BLACKLIST USER</p>
            <p>ACTIVATE USER</p>
        </div>
     </div>

     <div className="third">
     <div className="user-profile">
      <div className="user-info">
        <div className='d-flex'>
        <div className="avatar">
          <span className="icon">
           <AiOutlineUser />
            </span>
        </div>
        <div className="details">
          <h3>{user?.username}</h3>
          <p>{user?.personalInformation?.bvn}</p>
        </div>
        </div>

        <div className="tier">
          <span>User’s Tier</span>
          <div className="stars">
          {
            Array.from({length: Number(user?.bankDetails?.tier)}, (_, index) => index + 1)?.
            map((each, index) =>(
              <span key={index} className={`star filled`}>★</span>
             
            ))
          }
          </div>
        </div>

        <div className="balance">
          <h3>N{(user?.bankDetails?.amount)}</h3>
          <p>{user?.bankDetails?.bank_name}</p>
        </div>
      </div>
      <div className="tabs">
        
        {
          [
            "General Details", "Documents", "Bank Details", 
            "Loans", "Savings", "App and System"
          ].map((item: any, i: number) =>(
            <span key={i} onClick={() => setactiveTab(item)} className={`tab ${
              activeTab === item? 'active' : ""
            }`}>{item}</span>
          ))
        }
      </div>
    </div>
     </div>

        
     <div className="fourth">
      <div className="profile">
        <section className="section">
          <h2>Personal Information</h2>
          <div className="row">
            <div>
              <p>Full Name:</p>
              <h6>{user?.personalInformation?.fullname}</h6>
            </div>
            <div>
              <p>Phone Number:</p>
              <h6>{user?.phoneNumber}</h6>
            </div>
            
            <div>
              <p>Email</p>
              <h6>{user?.email}</h6>
            </div>
            <div>
              <p>BVN:</p>
              <h6>{user?.personalInformation?.bvn}</h6>
            </div>
            <div>
              <p>Gender:</p>
              <h6>{user?.personalInformation?.gender}</h6>
            </div>
            
            <div>
              <p>Marital Status</p>
              <h6>{user?.personalInformation?.marital_status}</h6>
            </div>
            <div>
              <p>Children</p>
              <h6>{user?.personalInformation?.children}</h6>
            </div>
            <div>
              <p>Type of Residence</p>
              <h6>{user?.personalInformation?.residence_type}</h6>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Education and Employment</h2>
          <div className="row">
            <div>
              <p>Level of Education:</p>
              <h6>{user?.educationAndEmployment?.level_of_education}</h6>
            </div>
            <div>
              <p>Employment Status:</p>
              <h6>{user?.educationAndEmployment?.employment_status}</h6>
            </div>
            <div>
              <p>Sector of Employment</p>
              <h6>{user?.educationAndEmployment?.sector_of_employment}</h6>
            </div>
            <div>
              <p>Duration Of Employment</p>
              <h6>{user?.educationAndEmployment?.duration_of_employment}</h6>
            </div>
            <div>
              <p>Office Email</p>
              <h6>{user?.educationAndEmployment?.office_email}</h6>
            </div>
            <div>
              <p>Monthly Income</p>
              <h6>{user?.educationAndEmployment?.monthly_income}</h6>
            </div>
            <div>
              <p>Loan Repayment</p>
              <h6>{user?.educationAndEmployment?.loan_repayment}</h6>
            </div>
           
            
          </div>
        </section>

        <section className="section">
          <h2>Socials</h2>
          <div className="row">
            <div>
              <p>Twitter:</p> 
              <h6>{user?.social?.twitter}</h6>
              </div>
            <div>
              <p>Facebook</p>
              <h6>{user?.social?.facebook}</h6>
            </div>
            <div>
              <p>Instagram</p>
              <h6>{user?.social?.instagram}</h6>
            </div>
            
          </div>
        </section>

        <section className="section">
          <h2>Guarantor</h2>
          
            <div className="row">
              <div>
                <p>Full Name:</p>
                <h6>{user?.guarantor?.full_name}</h6>
              </div>
              <div>
                <p>Phone Number</p>
                <h6>{user?.guarantor?.phone}</h6>
              </div>
              <div>
                <p>Email</p>
                <h6>{user?.guarantor?.email}</h6>
              </div>
              <div>
                <p>Relationship</p>
                <h6>{user?.guarantor?.relationship}</h6>
              </div>
            </div>
        
        </section>
      </div>
     </div>

  </div>
  )
}

export default UserDetails