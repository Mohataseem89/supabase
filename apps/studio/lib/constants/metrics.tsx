import { Auth, Realtime, Storage } from 'icons'
import { ActivityIcon, DatabaseIcon, HeartIcon, ServerIcon } from 'lucide-react'
import { ReactNode } from 'react'

export type Metric = {
  key: string
  label: string
  provider?: string
  category?: MetricCategory
  id?: string
}

type MetricCategory = {
  label: string
  icon: (className?: string) => ReactNode
  key: string
}

export const METRIC_CATEGORIES = {
  API: {
    label: 'All API usage',
    icon: (className?: string) => <ActivityIcon size={16} className={className} />,
    key: 'api',
  },
  API_DATABASE: {
    label: 'Database API',
    icon: (className?: string) => <DatabaseIcon size={16} className={className} />,
    key: 'api_database',
  },
  API_AUTH: {
    label: 'Auth API',
    icon: (className?: string) => <Auth size={16} className={className} />,
    key: 'api_auth',
  },
  API_STORAGE: {
    label: 'Storage API',
    icon: (className?: string) => <Storage size={16} className={className} />,
    key: 'api_storage',
  },
  API_REALTIME: {
    label: 'Realtime API',
    icon: (className?: string) => <Realtime size={16} className={className} />,
    key: 'api_realtime',
  },
  INSTANCE: {
    label: 'Instance health',
    icon: (className?: string) => <HeartIcon size={16} className={className} />,
    key: 'instance',
  },
  SUPAVISOR: {
    label: 'Supavisor',
    icon: (className?: string) => <ServerIcon size={16} className={className} />,
    key: 'supavisor',
  },
}

export const METRICS: Metric[] = [
  {
    key: 'avg_cpu_usage',
    label: 'Average CPU % Usage',
    provider: 'infra-monitoring',
    category: METRIC_CATEGORIES.INSTANCE,
  },
  {
    key: 'max_cpu_usage',
    label: 'Max CPU % Usage',
    provider: 'infra-monitoring',
    category: METRIC_CATEGORIES.INSTANCE,
  },
  {
    key: 'disk_io_consumption',
    label: 'Disk IO % Consumed',
    provider: 'infra-monitoring',
    category: METRIC_CATEGORIES.INSTANCE,
  },
  {
    key: 'disk_io_budget',
    label: 'Disk IO % Remaining',
    provider: 'infra-monitoring',
    category: METRIC_CATEGORIES.INSTANCE,
  },
  {
    key: 'ram_usage',
    label: 'Memory % Usage',
    provider: 'infra-monitoring',
    category: METRIC_CATEGORIES.INSTANCE,
  },
  {
    key: 'total_realtime_egress',
    label: 'Realtime Connection Egress',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API,
  },

  /**
   * API
   */
  {
    key: 'total_rest_ingress',
    label: 'API Ingress',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_DATABASE,
  },
  {
    key: 'total_rest_egress',
    label: 'API Egress',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_DATABASE,
  },
  {
    key: 'total_rest_requests',
    label: 'API Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_DATABASE,
  },

  /**
   * Auth
   */

  {
    key: 'total_auth_billing_period_mau',
    label: 'Auth Monthly Active User',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_AUTH,
  },
  {
    key: 'total_auth_billing_period_sso_mau',
    label: 'Auth Monthly Active SSO User',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_AUTH,
  },
  {
    key: 'total_auth_egress',
    label: 'Auth Egress',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_AUTH,
  },
  {
    key: 'total_auth_requests',
    label: 'Auth Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_AUTH,
  },

  /**
   * Storage
   */
  {
    key: 'total_storage_ingress',
    label: 'Storage Ingress',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_STORAGE,
  },
  {
    key: 'total_storage_egress',
    label: 'Storage Egress',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_STORAGE,
  },
  {
    key: 'total_storage_image_render_count',
    label: 'Storage Image Transformations',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_STORAGE,
  },
  {
    key: 'total_storage_requests',
    label: 'Storage Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_STORAGE,
  },

  {
    key: 'total_egress',
    label: 'All Egress',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API,
  },

  {
    key: 'total_requests',
    label: 'All Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API,
  },

  {
    key: 'total_ingress',
    label: 'All Ingress',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API,
  },

  /** Supavisor */
  {
    key: 'total_supavisor_egress_bytes',
    label: 'Supavisor Egress',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.SUPAVISOR,
  },
]

export const TIME_PERIODS_BILLING = [
  {
    key: 'currentBillingCycle',
    label: 'Current billing cycle',
    interval: '1d',
  },
  {
    key: 'previousBillingCycle',
    label: 'Previous billing cycle',
    interval: '1d',
  },
]

export const TIME_PERIODS_REPORTS = [
  {
    key: '7d',
    label: 'Last 7 days',
    interval: '1d',
  },
  {
    key: '30d',
    label: 'Last 30 days',
    interval: '1d',
  },
  {
    key: 'startMonth',
    label: 'This month',
    interval: '1d',
  },
]

export const TIME_PERIODS_INFRA = [
  {
    key: '1h',
    label: 'Last hour',
  },
  {
    key: '3h',
    label: 'Last 3 hours',
  },
  {
    key: '1d',
    label: 'Last 24 hours',
  },
  {
    key: '7d',
    label: 'Last 7 days',
  },
]
