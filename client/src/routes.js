import ContactUs from './views/ContactUs.vue'
import Contributions from './views/Contributions.vue'
import FeedMe from './views/FeedMe.vue'
import Home from './views/Home.vue'
import Landing from './views/Landing.vue'
import Leaderboard from './views/Leaderboard.vue'
import Login from './views/Login.vue'
import SignUp from "./views/SignUp.vue"
import Transactions from "./views/Transactions.vue"

import Payment from './views/Payment.vue'
import PaymentSuccess from './views/PaymentSuccess.vue'
// import FeastPayment from './views/FeastPayment.vue'
// import SuccessfulFeast from './views/SuccessfulFeast.vue'

import Dashboard from "./views/Dashboard.vue"
import DashboardHome from './views/DashboardHome.vue'

export default [
    { path: '/', component: Landing},
    { path: '/landing', component: Landing },
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp },
    { path: '/home', name:'home', component: Home },
    { path: '/contactus', component: ContactUs},
    { path: '/contributions', component: Contributions},
    { path: '/leaderboard', component: Leaderboard},
    { path: '/feedme', name:'feedme', component: FeedMe, props:true},
    { path: '/payment', name:'Payment', component: Payment, props:true},
    { path: '/paymentsuccess', name:'paymentsuccess', component: PaymentSuccess, props:true},
    // { path: '/feastpayment', name:'feastpayment', component: FeastPayment, props:true},
    // { path: '/successfulfeast', name:'successfulfeast', component: SuccessfulFeast, props:true},
    { path: '/dashboard', component: Dashboard},
    { path: '/dashboardhome', component:  DashboardHome},
    { path: '/transactions', component: Transactions}
]


