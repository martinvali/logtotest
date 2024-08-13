import type { ConnectorMetadata } from '@logto/connector-kit';
import { ConnectorPlatform, ConnectorConfigFormItemType, OidcPrompt } from '@logto/connector-kit';


export const authorizationEndpoint = "https://payload-uptime-new.vercel.app/auth/id-card-login";
export const defaultMetadata: ConnectorMetadata = {
  id: 'webeid',
  target: 'webeid',
  platform: ConnectorPlatform.Universal,
  name: {
    en: 'WebEID',
    'zh-CN': 'WebEID',
    'tr-TR': 'WebEID',
    ko: 'WebEID',
  },
  logo: './logo.svg',
  logoDark: null,
  description: {
    en: 'Microsoft Azure Active Directory is a leading AD provider.',
    'zh-CN': 'Microsoft Azure Active Directory 是领先的 AD 服务提供商。',
    'tr-TR': 'Microsoft Azure Active Directory en büyük AD servisidir.',
    ko: 'Microsoft Azure Active Directory is the biggest AD provider.',
  },
  readme: './README.md',
  formItems: [
    {
      key: 'clientId',
      type: ConnectorConfigFormItemType.Text,
      required: true,
      label: 'Client ID',
      placeholder: '<client-id>',
    },
    {
      key: 'clientSecret',
      type: ConnectorConfigFormItemType.Text,
      required: true,
      label: 'Client Secret',
      placeholder: '<client-secret>',
    },
    {
      key: 'cloudInstance',
      type: ConnectorConfigFormItemType.Text,
      required: true,
      label: 'Cloud Instance',
      placeholder: 'https://login.microsoftonline.com',
      defaultValue: 'https://login.microsoftonline.com',
    },
    {
      key: 'tenantId',
      type: ConnectorConfigFormItemType.Text,
      required: true,
      label: 'Tenant ID',
      placeholder: '<tenant-id>',
    },
    {
      key: 'prompts',
      type: ConnectorConfigFormItemType.MultiSelect,
      required: false,
      label: 'Prompts',
      selectItems: Object.values(OidcPrompt).map((prompt) => ({
        value: prompt,
      })),
    },
  ],
};

export const defaultTimeout = 5000;
