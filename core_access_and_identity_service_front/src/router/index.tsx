import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, type ReactElement } from 'react';
import { LoginPage, SuperAdminLoginPage } from '@/pages/auth';
import { LoginMfa } from '@/pages/auth mfa';
import { Home } from '@/pages/home';
import {
  DashboardPage,
  ConfigCodePage,
  ConfigWifiListPage,
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
  if (role === 'SUPPORT' || role === 'HOTEL_IT') return routes.public.dashboard;
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

const appSurface = import.meta.env.VITE_APP_SURFACE ?? 'main';
const isSuperAdminSurface = appSurface === 'super-admin';
const superAdminUrl = import.meta.env.VITE_SUPER_ADMIN_URL ?? `${window.location.protocol}//${window.location.hostname}:5174`;

function ExternalRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return null;
}

function SuperAdminRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.public.login} element={<SuperAdminLoginPage />} />
        <Route path={routes.public.mfa} element={<LoginMfa />} />
        <Route path={routes.public.adminMboa} element={<ProtectedPage allowedRoles={['ADMIN']}><MboaAdminDashboardPage /></ProtectedPage>} />
        <Route path={routes.public.superAdmin} element={<Navigate to={routes.public.adminMboa} replace />} />
        <Route path="/" element={<Navigate to={routes.public.adminMboa} replace />} />
        <Route path="*" element={<Navigate to={routes.public.adminMboa} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

// Importez vos autres pages quand elles seront prêtes
// import { AdminLayout } from '@/pages/AdminLayout';
// import { UserLayout } from '@/pages/UserLayout';
// import { AuthGuard } from '@/guards';

export const AppRouter = () => {
  if (isSuperAdminSurface) return <SuperAdminRoutes />;

  return (
    <BrowserRouter>
      <Routes>
        {/* Route de login */}
        <Route path={routes.public.login} element={<LoginPage />} />

        {/* Route MFA */}
        <Route path={routes.public.mfa} element={<LoginMfa />} />

        {/* Pages MboaLink */}
        <Route path={routes.public.home} element={<ProtectedPage><Home /></ProtectedPage>} />
        <Route path={routes.public.dashboard} element={<ProtectedPage allowedRoles={['SUPPORT', 'HOTEL_IT']}><DashboardPage /></ProtectedPage>} />
        <Route path={routes.public.networkMap} element={<ProtectedPage allowedRoles={['SUPPORT', 'HOTEL_IT']}><NetworkMap3DPage /></ProtectedPage>} />
        <Route path={routes.public.devices} element={<ProtectedPage allowedRoles={['ADMIN', 'HOTEL_IT']}><DeviceManagerPage /></ProtectedPage>} />
        <Route path={routes.public.wifiCode} element={<ProtectedPage allowedRoles={['SUPPORT', 'HOTEL_IT']}><WifiCodePage /></ProtectedPage>} />
        <Route path={routes.public.loginByAddress} element={<ProtectedPage allowedRoles={['SUPPORT']}><LoginByAddressPage /></ProtectedPage>} />
        <Route path={routes.public.statusLogins} element={<ProtectedPage allowedRoles={['SUPPORT', 'HOTEL_IT']}><StatutLoginsPage /></ProtectedPage>} />
        <Route path={routes.public.manualLogin} element={<ProtectedPage allowedRoles={['SUPPORT', 'RECEPTIONIST']}><ManualLoginPage /></ProtectedPage>} />
        <Route path={routes.public.websitesManager} element={<ProtectedPage allowedRoles={['SUPPORT', 'HOTEL_IT']}><WebsitesManagerPage /></ProtectedPage>} />
        <Route path={routes.public.configCode} element={<ProtectedPage allowedRoles={['SUPPORT']}><ConfigCodePage /></ProtectedPage>} />
        <Route path={routes.public.hotels} element={<ProtectedPage allowedRoles={['ADMIN']}><Navigate to={routes.public.adminMboa} replace /></ProtectedPage>} />
        <Route path={routes.public.rooms} element={<ProtectedPage allowedRoles={['ADMIN']}><Navigate to={routes.public.adminMboa} replace /></ProtectedPage>} />
        <Route path={routes.public.configWifi} element={<ProtectedPage allowedRoles={['ADMIN']}><Navigate to={routes.public.adminMboa} replace /></ProtectedPage>} />
        <Route path={routes.public.adminMboa} element={<ProtectedPage allowedRoles={['ADMIN']}><ExternalRedirect to={superAdminUrl} /></ProtectedPage>} />
        <Route path={routes.public.users} element={<ProtectedPage allowedRoles={['ADMIN']}><ExternalRedirect to={superAdminUrl} /></ProtectedPage>} />
        <Route path={routes.public.notifications} element={<ProtectedPage allowedRoles={['SUPPORT', 'HOTEL_IT', 'RECEPTIONIST']}><NotificationsPage /></ProtectedPage>} />

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
