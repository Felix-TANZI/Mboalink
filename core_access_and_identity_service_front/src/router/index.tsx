import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import type { ReactElement } from 'react';
import { LoginPage } from '@/pages/auth';
import { LoginMfa } from '@/pages/auth mfa';
import { Home } from '@/pages/home';
import {
  DashboardPage,
  ConfigCodePage,
  ConfigWifiListPage,
  HotelListPage,
  LoginByAddressPage,
  ManualLoginPage,
  MboaAdminDashboardPage,
  NetworkMap3DPage,
  NotificationsPage,
  DeviceManagerPage,
  RoomListPage,
  StatutLoginsPage,
  WebsitesManagerPage,
  WifiCodePage,
} from '@/pages/mboalink';
import { routes } from './routes';
import { getStoredUser } from '@/services/auth/session';

type AppRole = 'ADMIN' | 'SUPPORT' | 'HOTEL_IT' | 'RECEPTIONIST' | 'CLIENT';

function getRoleHome(role?: string) {
  if (role === 'RECEPTIONIST') return routes.public.manualLogin;
  if (role === 'ADMIN') return routes.public.adminMboa;
  if (role === 'ADMIN' || role === 'SUPPORT' || role === 'HOTEL_IT') return routes.public.dashboard;
  return routes.public.home;
}

function ProtectedPage({
  children,
  allowedRoles,
}: {
  children: ReactElement;
  allowedRoles?: AppRole[];
}) {
  const user = getStoredUser();
  const location = useLocation();

  if (!user) {
    const redirectTo = `${location.pathname}${location.search}`;
    return <Navigate to={`${routes.public.login}?redirect=${encodeURIComponent(redirectTo)}`} replace />;
  }

  if (allowedRoles?.length && !allowedRoles.includes(user.role as AppRole)) {
    return <Navigate to={getRoleHome(user.role)} replace />;
  }

  return children;
}

// Importez vos autres pages quand elles seront prêtes
// import { AdminLayout } from '@/pages/AdminLayout';
// import { UserLayout } from '@/pages/UserLayout';
// import { AuthGuard } from '@/guards';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route de login */}
        <Route path={routes.public.login} element={<LoginPage />} />

        {/* Route MFA */}
        <Route path={routes.public.mfa} element={<LoginMfa />} />

        {/* Pages MboaLink */}
        <Route path={routes.public.home} element={<ProtectedPage><Home /></ProtectedPage>} />
        <Route path={routes.public.dashboard} element={<ProtectedPage allowedRoles={['ADMIN', 'SUPPORT', 'HOTEL_IT']}><DashboardPage /></ProtectedPage>} />
        <Route path={routes.public.networkMap} element={<ProtectedPage allowedRoles={['ADMIN', 'SUPPORT', 'HOTEL_IT']}><NetworkMap3DPage /></ProtectedPage>} />
        <Route path={routes.public.devices} element={<ProtectedPage allowedRoles={['ADMIN', 'HOTEL_IT']}><DeviceManagerPage /></ProtectedPage>} />
        <Route path={routes.public.wifiCode} element={<ProtectedPage allowedRoles={['ADMIN', 'SUPPORT', 'HOTEL_IT']}><WifiCodePage /></ProtectedPage>} />
        <Route path={routes.public.loginByAddress} element={<ProtectedPage allowedRoles={['ADMIN', 'SUPPORT']}><LoginByAddressPage /></ProtectedPage>} />
        <Route path={routes.public.statusLogins} element={<ProtectedPage allowedRoles={['ADMIN', 'SUPPORT', 'HOTEL_IT']}><StatutLoginsPage /></ProtectedPage>} />
        <Route path={routes.public.manualLogin} element={<ProtectedPage allowedRoles={['ADMIN', 'SUPPORT', 'RECEPTIONIST']}><ManualLoginPage /></ProtectedPage>} />
        <Route path={routes.public.websitesManager} element={<ProtectedPage allowedRoles={['ADMIN', 'SUPPORT', 'HOTEL_IT']}><WebsitesManagerPage /></ProtectedPage>} />
        <Route path={routes.public.configCode} element={<ProtectedPage allowedRoles={['ADMIN', 'SUPPORT']}><ConfigCodePage /></ProtectedPage>} />
        <Route path={routes.public.hotels} element={<ProtectedPage allowedRoles={['ADMIN']}><HotelListPage /></ProtectedPage>} />
        <Route path={routes.public.rooms} element={<ProtectedPage allowedRoles={['ADMIN', 'HOTEL_IT']}><RoomListPage /></ProtectedPage>} />
        <Route path={routes.public.configWifi} element={<ProtectedPage allowedRoles={['ADMIN', 'HOTEL_IT']}><ConfigWifiListPage /></ProtectedPage>} />
        <Route path={routes.public.adminMboa} element={<ProtectedPage allowedRoles={['ADMIN']}><MboaAdminDashboardPage /></ProtectedPage>} />
        <Route path={routes.public.users} element={<ProtectedPage allowedRoles={['ADMIN']}><MboaAdminDashboardPage /></ProtectedPage>} />
        <Route path={routes.public.notifications} element={<ProtectedPage allowedRoles={['ADMIN', 'SUPPORT', 'HOTEL_IT', 'RECEPTIONIST']}><NotificationsPage /></ProtectedPage>} />

        {/* Routes protégées - à décommenter quand prêt */}
        {/* 
        <Route 
          path="/admin/*" 
          element={
            <AuthGuard requiredRole="admin">
              <AdminLayout />
            </AuthGuard>
          } 
        />
        
        <Route 
          path="/user/*" 
          element={
            <AuthGuard requiredRole="user">
              <UserLayout />
            </AuthGuard>
          } 
        />
        */}
        
        {/* Redirection par défaut vers login */}
        <Route path="/" element={<Navigate to={routes.public.login} replace />} />
        
        {/* 404 - redirige vers login */}
        <Route path="*" element={<Navigate to={routes.public.login} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

// Exporter aussi les routes pour utilisation ailleurs
export { routes } from './routes';
