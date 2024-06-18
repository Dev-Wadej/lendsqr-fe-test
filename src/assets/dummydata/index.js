//==============================Imports for sidebar 'Customers'======================================//
import Users from "../svgs/userfriends.svg";
import Guarantors from "../svgs/guarantors.svg";
import Loans from "../svgs/loans.svg";
import DecisionModels from "../svgs/decisionmodels.svg";
import Savings from "../svgs/savings.svg";
import LoanRequest from "../svgs/loanrequest.svg";
import Whitelist from "../svgs/whitelist.svg";
import Karma from "../svgs/karma.svg";
//================================================================================================//
//==============================Imports for sidebar 'Businesses'======================================//
import Organization from "../svgs/briefcase.svg";
import LoanProducts from "../svgs/loanrequest.svg";
import SavingsProduct from "../svgs/savingsproduct.svg";
import FeesAndCharge from "../svgs/feesandcharges.svg";
import Transactions from "../svgs/transactions.svg";
import Services from "../svgs/services.svg";
import ServiceAccount from "../svgs/servicesaccount.svg";
import Settlements from "../svgs/settlements.svg";
import Reports from "../svgs/reports.svg";
//================================================================================================//
//==============================Imports for sidebar 'settings'======================================//
import Preferences from "../svgs/preferences.svg";
import FeesAndPricing from "../svgs/feesandpricing.svg";
import AuditLogs from "../svgs/auditlogs.svg";
//================================================================================================//
export var sidebar = [
    {
        title: "customers",
        links: [
            { id: "active", icons: Users, name: "Useers", path: "/dashboard/users" },
            {
                icons: Guarantors,
                name: "Guarantors",
            },
            {
                icons: Loans,
                name: "Loans",
            },
            {
                icons: DecisionModels,
                name: "Decision Models",
            },
            {
                icons: Savings,
                name: "Savings",
            },
            {
                icons: LoanRequest,
                name: "Loan Request",
            },
            {
                icons: Whitelist,
                name: "Whitelist",
            },
            {
                icons: Karma,
                name: "Karma",
            },
        ],
    },
    {
        title: "Businesses",
        links: [
            {
                icons: Organization,
                name: "Organization",
            },
            {
                icons: LoanProducts,
                name: "Loan Products",
            },
            {
                icons: SavingsProduct,
                name: "Savings Products",
            },
            {
                icons: FeesAndCharge,
                name: "Fees And Charges",
            },
            {
                icons: Transactions,
                name: "Transactions",
            },
            {
                icons: Services,
                name: "Services",
            },
            {
                icons: ServiceAccount,
                name: "Service Account",
            },
            {
                icons: Settlements,
                name: "Settlements",
            },
            {
                icons: Reports,
                name: "Reports",
            },
        ],
    },
    {
        title: "Settings",
        links: [
            {
                icons: Preferences,
                name: "Preferences",
            },
            {
                icons: FeesAndPricing,
                name: "Fees And Pricing",
            },
            {
                icons: AuditLogs,
                name: "Audit Logs",
            },
        ],
    },
];
