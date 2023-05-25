import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import './App.css';
import MainPage from './pages/MainPage';
import { useContext, useEffect } from 'react';
import { Context, store } from './index';
import { lazy } from 'react';
import PageLayout from './pages/PageLayout';
import DoctorLayout from './pages/Doctor/DoctorLayout'
import UserLayout from './pages/User/userPath/UserLayout'
import AdminLayout from './pages/Admin/AdminLayout'
import DoctorInfoLayout from './pages/DoctorInfo/DoctorInfoLayout'
import DoctorsUserLayout from './pages/User/Doctors/DoctorsUserLayout'
import MyCabinet from './pages/User/MyCabinet'
import LayoutDocs from './pages/PageDocuments/LayoutDocs'
import { useLayoutEffect } from 'react';

// import DoctorProfile from './pages/Doctor/DoctorProfile'
// import WorkTime from './pages/Doctor/WorkTime'
// import BookedTime from './pages/Doctor/BookedTime'

// import Massage from './pages/User/userPath/Messages'
// import UserProfile from './pages/User/userPath/UserProfile'
// import UserOutpatientCard from './pages/User/userPath/UserOutpatientCard'
// import UserFinances from './pages/User/userPath/UserFinances'
// import BookedTimeUser from './pages/User/userPath/BookedTimeUser'

const BookedTime = lazy(() => import('./pages/Doctor/BookedTime'))
const WorkTime = lazy(() => import('./pages/Doctor/WorkTime'))

const Massage = lazy(() => import('./pages/User/userPath/Messages'))
const BookedTimeUser = lazy(() => import('./pages/User/userPath/BookedTimeUser'))
const UserFinances = lazy(() => import('./pages/User/userPath/UserFinances'))
const UserOutpatientCard = lazy(() => import('./pages/User/userPath/UserOutpatientCard'))
const UserProfile = lazy(() => import('./pages/User/userPath/UserProfile'))


// const MyCabinet = lazy(() => import('./pages/User/MyCabinet'))

// import MyDoctorPage from './pages/User/Doctors/MyDoctorPage'
// import SearchDoctor from './pages/User/Doctors/SearchDoctor'
// import RequestDoctor from './pages/User/Doctors/RequestDoctor'

// import DoctorsAdmin from './pages/Admin/DoctorsAdmin'
// import PatientAdmin from './pages/Admin/PatientAdmin'
// import ImmediateAction from './pages/Admin/ImmediateAction'
// import SetingsAdmin from './pages/Admin/SetingsAdmin'

// import EditProfileDoctorPage from './pages/Admin/EditProfileDoctorPage'
// import EditProfileUserPage from './pages/Admin/EditProfileUserPage'
// import GeneralInformation from './pages/DoctorInfo/GeneralInformation'
// import ListConsultationPage from './pages/DoctorInfo/ListConsultationPage'

const EditProfileDoctorPage = lazy(() => import('./pages/Admin/EditProfileDoctorPage'))
const EditProfileUserPage = lazy(() => import('./pages/Admin/EditProfileUserPage'))
const GeneralInformation = lazy(() => import('./pages/DoctorInfo/GeneralInformation'))
const ListConsultationPage = lazy(() => import('./pages/DoctorInfo/ListConsultationPage'))

const SetingsAdmin = lazy(() => import('./pages/Admin/SetingsAdmin'))
const ImmediateAction = lazy(() => import('./pages/Admin/ImmediateAction'))
const PatientAdmin = lazy(() => import('./pages/Admin/PatientAdmin'))
const DoctorsAdmin = lazy(() => import('./pages/Admin/DoctorsAdmin'))
const LoginAdmin = lazy(() => import('./pages/Admin/LoginAdmin'))

const RequestDoctor = lazy(() => import('./pages/User/Doctors/RequestDoctor'))
const SearchDoctor = lazy(() => import('./pages/User/Doctors/SearchDoctor'))
const MyDoctorPage = lazy(() => import('./pages/User/Doctors/MyDoctorPage'))

const DoctorProfile = lazy(() => import('./pages/Doctor/DoctorProfile'))

const PrivacyPolicy = lazy(() => import('./pages/PageDocuments/PrivacyPolicy'))
const UserAgreement = lazy(() => import('./pages/PageDocuments/UserAgreement'))
const ContractPaidInformation = lazy(() => import('./pages/PageDocuments/ContractPaidInformation'))



function App() {
  // if (store.isLoading) {
  //   alert('Loading...');
  // }

  // if (!store.isAuth) {
  //   return <MainPage />;
  // }

  // if (store.role === 'doctor') {
  //   return (
  //     <Router>
  //       <Routes>
  //         <Route path="/doctor/:tab" element={<Doctor />} />
  //         <Route path="*" element={<Navigate to="/doctor/booked_time" />} />
  //       </Routes>
  //     </Router>
  //   );
  // }

  // if (store.role === 'patient') {
  //   return (
  //     <Router>
  //       <Routes>
  //         <Route path="/user/:tab" element={<User />} />
  //         <Route path="*" element={<Navigate to="/user/booked_time" />} />
  //       </Routes>
  //     </Router>
  //   );
  // }
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<MainPage />} /> */}
        {/* <Route path="/adminPanel" element={<AdminPanel />} /> */}
        {/* <Route path="/doctor/:tab" element={<Doctor />} />
        <Route path="/doctor" element={<Navigate to="/doctor/booked_time" />} />
        <Route path="/user/:tab" element={<User />} />
        <Route path="/user" element={<Navigate to="/user/booked_time" />} /> */}
        <Route path="/" element={<PageLayout />} >
          <Route index element={<MainPage />} />
          <Route path="doctor" element={<DoctorLayout />}>
            <Route path="profile" element={<DoctorProfile />} />
            <Route path="stat" element={<WorkTime />} />
            <Route path="workTime" element={<BookedTime />} />
          </Route>
          <Route path="user" element={<UserLayout />}>
            <Route path="bookedTime" element={<BookedTimeUser />} />
            <Route path="messages" element={<Massage />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="outpatientCard" element={<UserOutpatientCard />} />
            <Route path="finances" element={<UserFinances />} />
          </Route>
          <Route path="myCabinet" element={<MyCabinet />} />
          <Route path="doctors" element={<DoctorsUserLayout />}>
            <Route path="myDoctors" element={<MyDoctorPage />} />
            <Route path="searchDoctor" element={<SearchDoctor />} />
            <Route path="requestDoctor" element={<RequestDoctor />} />
          </Route>
          <Route path="profileDoctor/:id" element={<DoctorInfoLayout />}>
            <Route path="profile" element={<GeneralInformation />} />
            <Route path="listConsultation" element={<ListConsultationPage />} />
          </Route>
        </Route>
        <Route path="adminPanel">
          <Route index element={<LoginAdmin />} />
          <Route element={<AdminLayout />}>
            <Route path="doctorList" element={<DoctorsAdmin />} />
            <Route path="patientAdmin" element={<PatientAdmin />} />
            <Route path="immediateAction" element={<ImmediateAction />} />
            <Route path="setings" element={<SetingsAdmin />} />
            <Route path="doctorEdit/:id" element={<EditProfileDoctorPage />} />
            <Route path="userEdit/:id" element={<EditProfileUserPage />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={<><h1 style={{ color: 'white' }}>No page</h1></>} />
        <Route path='docs' element={<LayoutDocs />} >
          <Route path='PrivacyPolicy' element={<PrivacyPolicy />} />
          <Route path='UserAgreement' element={<UserAgreement />} />
          <Route path='ContractPaidInformation' element={<ContractPaidInformation />} />
        </Route>
      </Routes>

    </Router>
  );
}


export default observer(App);
