import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import "./user.scss"

import usePersistedState from "@/hooks/usePersistedState"

import arrowBack from "@/assets/svgs/backarrow.svg"
import starFilled from "@/assets/svgs/starfilled.svg"
import starUnfilled from "@/assets/svgs/starunfilled.svg"
import useFetch, { base_url } from "@/hooks/useFetch"
import { Button } from "@/components/button"
import Progressbar from "@/components/progress-bar"

const buttonWords = [
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
]

const User = () => {
  const navigate = useNavigate()
  const { user_id } = useParams()
  const { data, loading } = useFetch(`${base_url}/${user_id}`)

  const { state: userCredentials, setState } = usePersistedState({
    key: `user-${user_id}`,
    defaultValue: undefined,
  })

  const handleNavigationUser = () => {
    navigate("/dashboard/users")
  }
  useEffect(() => {
    if (!userCredentials) {
      setState(data)
    }
  }, [data, userCredentials])

  const user_details = [
    {
      name: "Personal Information",
      details: [
        {
          title: "Full name",
          title_details: `${userCredentials?.profile?.firstName} ${userCredentials?.profile?.lastName}`,
        },
        {
          title: "Phone Number",
          title_details: userCredentials?.profile?.phoneNumber,
        },
        { title: "Email", title_details: userCredentials?.email },
        { title: "Bvn", title_details: userCredentials?.profile?.bvn },
        { title: "Gender", title_details: userCredentials?.profile?.gender },
        { title: "Marital Status", title_details: "Single" },
        { title: "Children", title_details: "None" },
        { title: "Type of Residence", title_details: "Parent’s Apartment" },
      ],
    },
    {
      name: "Education and Employment",
      details: [
        {
          title: "level of education",
          title_details: userCredentials?.education?.level,
        },
        {
          title: "employment status",
          title_details: userCredentials?.education?.employmentStatus,
        },
        {
          title: "sector of employment",
          title_details: userCredentials?.education?.sector,
        },
        {
          title: "Duration of employment",
          title_details: userCredentials?.education?.duration,
        },
        {
          title: "office email",
          title_details: userCredentials?.education?.officeEmail,
        },
        {
          title: "Monthly income",
          title_details: `₦${userCredentials?.education?.monthlyIncome[0]} - ₦${userCredentials?.education?.monthlyIncome[1]}`,
        },
        {
          title: "loan repayment",
          title_details: userCredentials?.education?.loanRepayment,
        },
      ],
    },
    {
      name: "Socials",
      details: [
        { title: "Twitter", title_details: userCredentials?.socials?.twitter },
        {
          title: "Facebook",
          title_details: userCredentials?.socials?.facebook,
        },
        {
          title: "Instagram",
          title_details: userCredentials?.socials?.instagram,
        },
      ],
    },
    {
      name: "Guarantor",
      details: [
        {
          title: "full Name",
          title_details: `${userCredentials?.guarantor?.firstName} ${userCredentials?.guarantor?.lastName}`,
        },
        {
          title: "Phone Number",
          title_details: userCredentials?.guarantor?.phoneNumber,
        },
        { title: "Email Address", title_details: "debby@gmail.com" },
        { title: "Relationship", title_details: "Sister" },
      ],
    },
    {
      name: "",
      details: [
        { title: "Full Name", title_details: "Debby Ogana" },
        { title: "Phone Number", title_details: "07060780922" },
        { title: "Email Address", title_details: "debby@gmail.com" },
        { title: "Relationship", title_details: "Sister" },
      ],
    },
  ]

  if (loading && !userCredentials)
    return (
      <div className="user-loader-section">
        <Progressbar />
      </div>
    )
  return (
    <div>
      <section className="user-details-section">
        <div
          onClick={handleNavigationUser}
          className="user-details-arrow-back"
          style={{ cursor: "pointer" }}
        >
          <span>
            <img src={arrowBack} alt="Icon" />
          </span>
          <span>Back to Users</span>
        </div>
        <div className="user-details-header">
          <h3>User Details</h3>
          <dl>
            <Button color="danger" variant="outline">
              BLACKLIST USER
            </Button>
            <Button color="primary" variant="outline">
              ACTIVATE USER
            </Button>
          </dl>
        </div>
        <div className="user-top-details-wrapper">
          <section className="user-details-top">
            <aside className="user-details-avatar-wrapper">
              <span className="avatar-img">
                <img src={userCredentials?.profile?.avatar} alt="User Avatar" />
              </span>
              <div>
                <h4>
                  {userCredentials?.profile?.firstName}{" "}
                  {userCredentials?.profile?.lastName}
                </h4>
                <span>{userCredentials?.accountNumber}</span>
              </div>
            </aside>
            <aside className="user-tier">
              <h3>User's Tier</h3>
              <span>
                <img src={starFilled} alt="Icon" />
                <img src={starUnfilled} alt="Icon" />
                <img src={starUnfilled} alt="Icon" />
              </span>
            </aside>
            <aside className="user-numerics">
              <h4>₦200,000.00</h4>
              <p>9912345678/Providus Bank</p>
            </aside>
          </section>
          <section className="user-tab">
            <button className="active">General Details</button>
            {buttonWords.map((btnword) => (
              <button>{btnword}</button>
            ))}
          </section>
        </div>
        <section className="user-heavy-info">
          <aside className="user-personal-info">
            {user_details?.map((details, idx) => (
              <>
                <h5>{details.name}</h5>
                <div>
                  {details.details.map((details_for_user) => (
                    <dl>
                      <div className="user-name">{details_for_user.title}</div>
                      <div>{details_for_user.title_details}</div>
                    </dl>
                  ))}
                </div>
                {details?.details.length !== idx && <hr />}
              </>
            ))}
          </aside>
        </section>
      </section>
    </div>
  )
}

export default User
