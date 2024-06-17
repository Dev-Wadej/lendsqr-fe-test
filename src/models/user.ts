export type UserType = {
  createdAt: Date
  orgName: string
  email: string
  id: string
  userName: string
  phoneNumber: string
  accountNumber: string
  profile: {
    firstName: string
    lastName: string
    phoneNumber: string
    avatar: string
    gender: string
    bvn: string
  }
  guarantor: {
    firstName: string
    lastName: string
    phoneNumber: string
  }
  education: {
    level: string
    employmentStatus: string
    sector: string
    duration: string
    officeEmail: string
    monthlyIncome: string[]
    loanRepayment: string
  }
  socials: {
    facebook: string
    instagram: string
    twitter: string
  }
}

export type QueryUserRes = UserType[]
